---
created: 2024-01-15
modified: 2024-09-16
parent:
  - "[[C++|C++]]"
  - "[[the C programming language|the C programming language]]"
publish: true
tags:
  - computer/c
  - computer/cpp
---
  There are several incompatibilities between C and C++ that we need to consider when porting a C codebase to C++:
  - C11 [[./Type-generic macro|type-generic macro]] is not supported in C++
  - C++ has more strict [[./Strict aliasing|aliasing rule]], and it can impact codes performing [[./Type Punning|type punning]].