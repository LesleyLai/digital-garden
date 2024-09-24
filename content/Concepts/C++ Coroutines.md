---
created: 2023-09-27
modified: 2024-03-14
parent: "[[C++]]"
publish: true
tags:
  - "#computing/cpp/coroutine"
---

# C++ Coroutines
A coroutine in C++ is an [[finite state machine|finite state machine]] that can be controlled and customized by the `promise_type`.

## Promise Type
A promise type is used to coordinate with coroutines. Unlike the return type, it _resides in the coroutine frame_ and are usually accessed through a pointer (which can be returned by `.promise()` of a coroutine handle)

## Insights
- [[./compare C++ coroutines and async Rust|compare C++ coroutines and async Rust]]
- [[./why C++ coroutines allocate on the heap|why C++ coroutines allocate on the heap]]
## Resources
- [[Introduction to C++ Coroutines Through a Thread Scheduling Demonstration|Introduction to C++ Coroutines Through a Thread Scheduling Demonstration]]
- [[Deciphering C++ Coroutines - A Diagrammatic Coroutine Cheat Sheet - Andreas Weis - CppCon 2022|Deciphering C++ Coroutines - A Diagrammatic Coroutine Cheat Sheet - Andreas Weis - CppCon 2022]]
- [[C++ Coroutine Intuition - Roi Barkan - CppNow 2023|C++ Coroutine Intuition - Roi Barkan - CppNow 2023]]
- [[C++ Coroutines from Scratch by Andreas Fertig|C++ Coroutines from Scratch by Andreas Fertig]]
- [[Coroutines C++ vs Rust|Coroutines C++ vs Rust]]
- [[Adventures in Thread-per-Core Async with Redpanda and Seastar by Travis Downs|Adventures in Thread-per-Core Async with Redpanda and Seastar by Travis Downs]]