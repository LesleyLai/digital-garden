---
created: 2024-04-29
modified: 2024-04-29
parent:
  - "[[C++ concurrency|C++ concurrency]]"
publish: true
tags:
  - "#computer/cpp/concurrency"
---
## `std::stop_source`
See: [stop_source - cppreference](https://en.cppreference.com/w/cpp/thread/stop_source)
`std::stop_token` can also be used for any running entity outside of `std::jthread` and `std::condition_variable_any` by using `stop_source`

## Wait until Stop
```cpp
void receiver(std::stop_token stopToken) {
  std::unique_lock lck(mutex_);
  auto now = std::chrono::system_clock::now();
  bool ret = condVar.wait_until(lck, stopToken, now + 1s, []{return dataReady;});
  if (ret) {
    // notification received
  } else {
    // stop requested
  }
}
```
> "Only use case of condition variable in C++20"