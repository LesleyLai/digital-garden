---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[C++|C++]]"
  - "[[the C programming language|the C programming language]]"
publish: true
tags:
  - "#computer/c"
  - "#computer/cpp"
---
# Type Punning
Type punning refers to techniques that are used to circumvent the type system. In the context of C and C++, it usually means reinterpreting bytes.

## Differences in C and C++
In C, objects of two [[layout compatible types|layout compatible types]] can be converted back and forth with each other. In C++, such conversions are usually [[./undefined behavior|UB]] and in some cases may not compile.