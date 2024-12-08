---
created: 2024-01-15
modified: 2024-12-08
parent:
  - "[[C++|C++]]"
  - "[[the C programming language|the C programming language]]"
publish: true
tags:
  - computing/c
  - computing/cpp
---
  There are several incompatibilities between C and C++ that we need to consider when interoperate between C and C++:
  - C and C++ has different [[./C compound literals|compound literal]] syntax
  - C11 [[./Type-generic macro|type-generic macro]] is not supported in C++
  - The semantics of the [[inline in C and C++|inline]] keyword is different
  - C++ has more strict [[./Strict aliasing|aliasing rule]], and it can impact codes performing [[./Type Punning|type punning]].