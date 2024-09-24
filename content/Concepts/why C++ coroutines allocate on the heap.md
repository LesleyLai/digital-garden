---
created: 2024-01-08
modified: 2024-03-14
parent:
  - "[[C++ Coroutines|C++ Coroutines]]"
publish: true
tags:
  - computing/cpp/coroutine
---

# Why C++ Coroutines Allocate on the Heap
A major complain of C++ coroutines is that it dynamically allocate by default and relies on compiler [[Halo|heap-elision]].

One reason for that design decision I can think of is that not having layout determined in frontend gives the optimizer opportunity to optimize out some variables.

However, [this insightful r/cpp comment](https://www.reddit.com/r/cpp/comments/18b8zpy/comment/kc4s7lj/) highlights that storing coroutine states on the stack could limit them to header files (or module interface files) and can easily break ABI. Both are not a big problem for [[./async Rust|Rust]] since Rust's TUs are much larger (a crate) and have an unstable ABI by default.

Also see this table from [Coroutines: Use-cases and Trade-offs](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2019/p1493r0.pdf):
![[../assets/type-erased coroutines vs embedded coroutines.png|type-erased coroutines vs embedded coroutines.png]]