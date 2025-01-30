---
tags:
  - Literature/Videos
  - computing/cpp/coroutine
link: https://www.youtube.com/watch?v=pOIoeFuIUKQ
author: "[[Travis Downs]]"
created: 2024-01-13
modified: 2024-03-14
---
# # Adventures in Thread-per-Core Async with Redpanda and Seastar by Travis Downs
## Thread-per-core
One thread per core and pinned: make scheduling decisions in _userspace_.
This thread must not block.
Question: how do we replace blocking calls?
## Seastar
- [GitHub - scylladb/seastar: High performance server-side application framework](https://github.com/scylladb/seastar)
- [Asynchronous Programming with Seastar](https://docs.seastar.io/master/tutorial.html)

Shared nothing architecture made up of "shards":
- A CPU core
- A pool of memory NUMA-local to that core
- All-to-all mesh of SPSC message queues
- Cooperative multitasking

## Continuation Style
```cpp
ss::future<> consensus: :stop() {
  ...
  return _event_manager.stop()
    .then([this] { return _append_requests_buffer.stop(); })
    .then([this] { return _batcher.stop(); })
    .then([this] { return _bg.close(); })
    .then([this] {
      if (likely(!_snapshot_writer)) {
        return ss::now();
      }
      return _snapshot_writer->close().then(
        [this] { _snapshot_writer.reset(); });
    });
}
```
Lifetime is difficult to reason about

## C++ Coroutines
Language provides a future concept but not implementation: Seastar still defines the future/promise type:
```cpp
﻿ss::future<> consensus::stop() {
﻿  ...
  co_await _event_manager.stop();
  co_await _append_requests_buffer.stop();
  co_await _batcher.stop();

  _op_lock.broken();
  co_await _bg.close();

  if (unlikely(_snapshot_writer)) {
    co_await _snapshot_writer->close();
    _snapshot_writer.reset();
  }
}
```

## Coroutine Performance
Coroutine performance depends on **both** the framework implementing the promise type and the compiler.

Here we talk about seastar's implementation and clang 16

Preview: coroutines are not transparent when it comes to performance

### Frame Allocations
Observation: *almost every* coroutine allocates

Exception: if the compiler can statically prove the coro never suspends
- No suspension points (`co_await` or `co_yeild`) in function
- Suspension points is never reachable
- Suspension point is reachable but never suspends

#### Frame Allocation Example
This coroutine
- Never suspends
- Never even executes `co_await`
- ~200 instructions and ~80 cycles
- Always allocates
```cpp
seastar::future<> empty_coro() {
  if (always_false) { // always_false is a global variable so compiler don't know it is false
    co_await make_ready_future<>();
  }
}
```

### Case Study: Varint Decode
See: [[varint|varint]]
Let's look at a case study drawn from Redpanda code
Decode an unsigned 32-bit variant
1-5 bytes and MSV
Widely used in Kafka protocol (and other places)

#### Coroutine Decoder
- `read1()` is async (could suspend but doesn't in most cases)
- Almost the same as the synchronous version
- Allocates once per decode
```cpp
auto coro_decode(input_stream& s) {
  detail::var_decoder decoder;
  while (true) {
    char c = co_await s.read1();
    if (decoder.accept(c)) {
      break;
    }
  }
  co_return decoder.result();
}
```
- ~680 instruction, ~220 cycles, 176 bytes allocated
  
#### Continuation Decoder
- Much harder to read (and write)
- Does not allocate
- Recursion is bounded by decoder
```cpp
auto cont_recurse(iobuf_readers s, var_decoder decoder) {
  return s.read1().then([&s, decoder](char c) mutable {
    if (decoder.accept(c)) {
     return ss::make_ready_futurecresult_type> (decoder. result());
    }
    return cont_recurse(s, decoder);
  });
}
```
Note that recursion is not recommended in seastar (because it can stack overflow), and there are dedicated loop idioms. Here it is fine because we know that we will make no more than 4 recursive calls.

#### Runtime Comparison
![[./content/assets/varint decoder performance.png|varint decoder performance.png]]

#### Yellow Method
- Optimistic approach
- Avoid any async machinery if possible
- Doubles the amount of code
```cpp
auto cont_tricky(iobuf reader s, var_decoder decoder) {
  auto f = s.read1();
  // Look synchronously if future is already available
  while (f.available()) {
    if (decoder.accept(f.get())) {
      return decoder.result_as_future(); 
    } 
    f = s.read1();
  }
  return std::move(f).then([&s, decoder](char c) mutable {
    if (decoder.accept(c)) {
      return decoder.result_as_future();
    }
    return cont_tricky(s, decoder);
  });
}
```

#### Green Method: just Synchronous
- Almost identical to coro version
- Speedup varies from 4x to 9x
- However, **we can't use this** as this *may sometimes block*
```cpp
auto sync_decode(input_stream& s) {
  detail::var_decoder decoder;
  while (true) {
    char c = s.read1_sync();
    if (decoder.accept(c)) {
      break;
    }
  }
  return decoder.result();
}
```

#### Sync with Async Fallback
- peek at 5 bytes, fallback if not available
- Fallback must in own method!
```cpp
auto decode_fallback(iobuf_reader& s) {
  auto [buf, filled] = s.peek<5>();
  if (filled) {
    auto result = decode_u32(buf.data());
    s.skip(result.second);
    return ss::make_ready_future(result);
  }

  return coro_decode(s);
}
```

### Performance Bottom Line
- Async is still cheap in the large
  - Context switches are 1000s of cycles, large cache impact
- Very short coroutines may be expensive: consider continuations
- Continuations have a per-continuation cost: consider coroutines
- Consider sync vs async fallback
- Drive the above decisions via profiling