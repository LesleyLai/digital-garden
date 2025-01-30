---
parent: "[[C++ Coroutines]]"
tags:
  - "#computing/coroutine"
  - computing/cpp/coroutine
  - computing/rust/async
Video Link: https://www.youtube.com/watch?v=aa43fYHgnfo
created: 2024-01-03
modified: 2024-03-14
---
# Coroutines: C++ Vs Rust - Jonathan Müller - ACCU 2022
Related: [[./content/Concepts/async Rust|async Rust]]

## Coroutines in C++: Basics
- Coroutine: function that uses `co_await` or `co_return` (or `co_yield`)
- Coroutine state machine: controlled by user-defined promise
- Coroutine handle: `std::coroutine_handle` (function like a raw pointer)
Example:
```cpp
auto my_coroutine() -> task<int>
{
  std::puts("my coroutine");
  co_return 42;
}
```
- regular function signature; coroutine is implementation detail
- specified return type does not match `co_return` type, instead a "fancy type" is returned

> It is general a good idea to use suspend_always
## Coroutines in Rust: Basics
- Coroutine: `async fn`
- Coroutine state machine: either hand-written or compiler generated
- Coroutine handle: type that implements the `Future` trait
```cpp
async fn my_coroutine() -> i32 {
  println!("my coroutine");
  42
}
```
- special function marker: coroutine is not an implementation detail
- specified return type matches expression that is returned

### Future Trait
```rust
enum Poll<T>
  Ready(T),
  Pending
}

trait Future {
  type Output;
  
  // done() + resume() in one call
  fn poll(self : Pin<&mut Self>, ctx : &mut Context<'_>) -> Poll<Self::Output>;
}
```
### Compiler Transformation
```rust
async fn my_coroutine() -> i32 {
  println!("my coroutine");
  42
}
```
Generate
```rust
struct MyFuture {}

impl Future for MyFuture {
  type Output = i32;

  fn poll(self : Pin<&mut Self>, __ : &mut Context<'_>) -> Poll<i32> {
    println!("my coroutine");
    Poll::ready(42)
  }
}

fn my_coroutine() -> MyFuture {
  MyFuture{}
}
```
Calling the coroutine
```rust
let mut fut = my_coroutine();
let result = resume(&mut fut);
println!("result: {}", result.unwrap());
```
C++'s `co_await suspend_always()` can be spelled as `suspend_always().await`, with the following implementation for `suspend_always` (incomplete):
```rust
struct SuspendAlways { first: bool }

impl Future for SuspendAlways {
  type Output = ();
  fn poll(self : Pin<&mut Self>, __ : &mut Context<'_>) -> Poll<()> {
    // replace is like std::exchange
    if replace(self.first, false) {
      Poll::Pending
    } else {
      Poll::Ready(())
    }
  }
}

fn syspend_always() -> SuspendAlways {
  SuspendAlways{ first: true }
}
```
## Basic Coroutines: Comparison
C++
- coroutine is an implementation detail
- written return type matches result from call, does not match returned expression
- promise type allows customization of the generated state machine
- Can't write the whole state machine by hand
- `std::coroutine_handle` can only be used with coroutines
  Rust
- coroutine-ness is visible in the interface
- written return type matches returned expression, **does not match result from call**
- state machine can either be generated or hand-written
- `Future` trait can be implemented yourself
  
## Coroutine in C++: Awaitables and Resumer
- Awaitable: something with overloaded `operator co_await` (or `Awaiter` itself)
- Resumer: the awaitable itself
```cpp
struct Awaitable {
  Awaiter operator co_await();
}

puts("before await");
auto value = co_await awaitable;
puts("after await");
```
With an awaiter like the following:
```cpp
struct Awaiter
{
  bool await_ready(); // is the awaiter ready?
  void await_suspend(std::coroutine_handle<Promise> suspended_coroutine);
  T await_resume();
};
```
The code is transformed to something like this (simplified):
```cpp
puts("before await");
auto awaiter = awaitable.operator co_await();
if (!awaiter.await_ready())
{
  awaiter.await_suspend(current_coroutine_handle);
  continue return;
}
auto value = awaiter.await_resume();
puts("after await");
```
### std::suspend_always As an Awaitable
```cpp
struct std::suspend_always
{
  bool await_ready() { return false; }
  void await_suspend(std::coroutine_handle<>) {}
  void await_resume() {}
}
```
### initial_suspend() And final_suspend()
`Promise::initial_suspend()` and `Promise::final_suspend` return awaitables. So the code is transformed to something like this:
```cpp
auto my_coroutine() -> task<int> {
  task<int>::promise_type promise = ...;
  co_await promise.initial_suspend();
  
  ...
  
  co_await promise.final_suspend();
}
```
### Coroutine Resumer
**It is the responsibility of `await_suspend()` to schedule the coroutine for resumption**
With `co_await suspend_always`, we give this the responsibility to the caller, which is not idea. Instead we can create another awaiter like this:
```cpp
class timer
{
  struct awaiter;

  public:
    // Suspend coroutine until next tick.
    awaiter operator co_await();
    // Resume all coroutines waiting for the timer.
    void tick();
};
```
#### Implement a Timer
Insight: the Awaiter is stored as part of the coroutine
```cpp
class timer
{
  struct awaiter
  {
    timer* tmr;
    std::coroutine_handle<> waiting;
    awaiter* next;
    
    bool await_ready() { return false; }
    void await_suspend(std::coroutine_handle<> suspended);
    void await_resume() {}
  };
  
  awaiter* _head;
};
```

```cpp
void awaiter::await_suspend(std::coroutine_handle<> suspended)
{
  waiting = suspended;
  next = std::exchange(tmr->_head, this);
}
```

```cpp
void timer::tick()
{
  // iterate over the linked-list and resume everything
  auto cur = std::exchange(_head, nullptr); // important to set _head to null
  while (cur) {
    auto next = cur->next;
    cur->waiting.resume();
    cur = next;
  }
}
```
### Chaining Coroutines
We can store a continuation to the promise type
```cpp
struct task<T>::promise_type
{
  std::coroutine_handle<> continuation;
  auto final_suspend() noexcept {
    struct awaiter
    {
      void await_suspend(std::coroutine_handle<promise_type> suspended) {
        if (suspended.promise().continuation) {
          suspended.promise().continuation.resume();
        }
      }
    };
    
    return awaiter{};
  }
```
Also need to implement `task<T>::operator co_await()`

### Tail Calls
The following will segfault
```cpp
task<void> coro_b() { co_return; }
task<void> coro_a() {
  for (auto i = 0; i != 1000000; ++i) { co_await coro_b(); }
}
```
because we blow the call stack. So instead of the following:
```cpp
// task's awaiter
void await_suspend(std::coroutine_handle<> suspended)
{
  handle.promise().continuation = suspended;
  handle.resume();
}
// final_suspend()'s awaiter
void await_suspend(std::coroutine_handle<promise_type> suspended)
{
  if (suspended.promise().continuation)
    suspended.promise().continuation.resume();
}
```
We can return the handle
```cpp
// task's awaiter
auto await_suspend(std::coroutine_handle<> suspended)
{
  handle.promise().continuation = suspended;
  return handle;
}
// final_suspend()'s awaiter
auto await_suspend(std::coroutine_handle<promise_type> suspended)
{
  if (suspended.promise().continuation)
    return suspended.promise().continuation;
  else
    return std::noop_coroutine();
}
```

## Coroutine in Rust: Awaitables and Resumer
- Awaitable: a type that implements `Future`
- Resumer: some user-written executor
Question: how is the executor informed that it should call `future.poll()` again?
Answer: `Context`: provides a `Waker`:
```rust
// simplified
struct Context { … };

impl Context {
  fn waker(&self) -> &Waker;
}
```
Waker: called by a Future when it is ready to be polled again
```rust
struct Waker { … };

impl Waker {
  fn wake(self);
  fn wake_by_ref(&self);
}
```
Complete implementation of `suspend_always()`:
```rust
struct SuspendAlways {
  first: bool
}

impl Future for SuspendAlways {
  type Output = ();
  fn poll(mut self: Pin<&mut Self>, ctx: &mut Context<'_>) -> Poll<()> {
  if replace(self.first, false) {
    // Need to wake here
    ctx.waker().wake_by_ref();
    Poll::Pending
  } else {
    Poll::Ready(())
  }
}
```
resume a coroutine:
```rust
fn resume<F: Future>(f: &mut F) -> Option<F::Output> {
  let waker = get_noop_waker();
  let mut ctx = Context::from_waker(&waker);
  
  match F::poll(unsafe { Pin::new_unchecked(f) }, &mut ctx) {
    Poll::Pending => None,
    Poll::Ready(val) => Some(val),
  }
}

let mut fut = my_coroutine();
resume(&mut fut)
```
Timer
```rust
struct Timer {
  time: i32,
  waker: Option<Waker>
}

impl Timer {
  fn new() -> RefCell<Timer> { .. }
  fn block(self_ : &RefCell<Timer>) -> TimerFuture { .. }
  fn tick(self_ : &RefCell<Timer>) { .. }
}
```
## Awaitables and Resumer: Comparison
### C++
- Awaitable is user-defined type with operator `co_await`
- `await_suspend()` schedules the coroutine for resumption (bottom up)
- coroutine chaining requires library code, `co_await` implementation
- you can customize what happens on resumption
- coroutine is only resumed when it can definitely make progress
  
### Rust
- Awaitable is type implementing Future trait
- you need to write something that executes the top-level future (top down)
- coroutine chaining is part of the language
- you can write the entire state machine yourself
- coroutine can be polled unnecessarily, `Waker` used to notify when polling should be done
  
### Executing a Coroutine on a Thread Pool
C++
```cpp
class thread_pool
{
public: 
  awaitable schedule() const;
};

task<void> my_coroutine(const thread_pool& pool) {
  std::puts("hello from main thread");
  co_await pool.schedule();
  std::puts("hello from thread pool");
}
```

Rust
```rust
struct ThreadPool { .. };

impl ThreadPool {
  fn spawn<F: Future>(f: F);
}

async fn my_coroutine();
...
pool.spawn(my_coroutine());
```
### Socket
C++
```cpp
auto buffer = co_await socket.read();
```
Rust
```rust
let buffer = socket.read().await();
```

Implementation:
Rust
```rust
struct SocketRead<'a> {
  socket: &'a Socket,
}

impl Future for SocketRead<'_ > {
  type Output = Vec<u8>;
  fn poll(self : Pin<&mut Self>, ctx : &mut Context<'_>) -> Poll<Self::Output> {
    if self.socket.has_data_to_read() {
      Poll::Ready(self.socket.do_sync_read())
    } else {
      self.socket.on_data(ctx.waker());
      Poll::Pending
    }
  }
}
```
C++
```cpp
struct socket_read
{
  socket* s;
  bool await_ready()
  {
    return s->has_data_to_read();
  }
  
  void await_suspend(std::coroutine_handle<> waiting)
  {
    // resume (with arbituary code that can block) on await_suspend
    // is not a good idea
    // s->on_data([waiting] { waiting.resume(); });

    // only notify that it is ready, but don't resume yet
    s->on_data([s, waiting] { s->context.can_resume(waiting) });
  }
  
  std::vector<char> await_resume()
  {
    return s->do_sync_read();
  }
}
```

### Coroutine Allocation
Coroutines store states so its frame need to be allocated somewhere. Both Rust and C++ coroutines are [[stackless coroutines|stackless]].

Rust generates a future struct (that implements `Future`) for coroutines.
C++ heap allocate coroutine state
- promise object
- parameters
- current suspension point (state machine state)
- local variables that need to persist between suspensions
`std::coroutine_handle` is a type-erased pointer to that state

### Coroutine Allocation: Comparison
#### Rust: Coroutine State part of Type System
- you can figure out the type of the coroutine state
- coroutine state can be treated like any variable and put of the stack
- size of state can be queried at compile-time
- type has to be determined before optimizations happen and is part of the
ABI (unfortunately this means that coroutine state can be bigger than necessary)
#### C++: Coroutine State Type-erased
- you cannot figure out the type of the coroutine state
- coroutine state has to be heap allocated as it is type-erased
- size of state cannot be queried at compile-time
- type can be determined after optimizations happen and is not part of the ABI
-  coroutine state only as big as necessary