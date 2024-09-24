---
created: 2024-01-03
modified: 2024-03-14
parent:
  - "[[./C++ Coroutines|C++ Coroutines]]"
  - "[[./async Rust|async Rust]]"
publish: true
tags:
  - computing/cpp/coroutine
  - computing/rust/async
  - "#draft"
---

Both [[./C++ Coroutines|C++ Coroutines]] and [[./async Rust|async Rust]] uses [[stackless coroutines|stackless coroutines]], but they have some differences:

C++ coroutines always dynamically allocate, where Rust's coroutine state are allocated on stack by default. See [[./why C++ coroutines allocate on the heap|why C++ coroutines allocate on the heap]]
## References
- [[Coroutines C++ vs Rust|Coroutines C++ vs Rust]]