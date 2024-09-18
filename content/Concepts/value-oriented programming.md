---
aliases:
  - second-class references
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - computer/PL/idea
  - computer/PL/semantics
---

**Value-oriented programming** is a [[programming paradigms|programming paradigms]] where first-class references are disallowed. The language still use references in implementation, but it is not exposed to programmers. Unlike pure [[functional programming|functional programming]], value-oriented programming allow mutation.

Value-oriented programming [[./aggregation vs composition|ban aggregation and only allow composition]]. Using only composition, all the objects in a program form a [[./forest in graph theory|forest]] (set of disjoint trees), and thus all changes of objects can always be analyzed locally. A down side is that we need to shift mindset when creating referential data structures and use indices rather than references.

Like safe [[./Rust|Rust]], value-oriented language prevents memory corruption and data race by default.

[[./The Hylo Programming Language|The Hylo Programming Language]] is a pioneer of value-oriented programming.

## References
- [[Value-Oriented Programming Overlord Article|Value-Oriented Programming - Overlord]]