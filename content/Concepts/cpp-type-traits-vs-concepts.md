---
Aliases:
  - C++ Type Traits vs Concepts
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# C++ Type Traits Vs Concepts

Even though [[C++ Type Traits|type traits]] and [[./cpp-concepts|concepts]] share similarities, they have distinct purpose in usage. Type traits serve as "function" of types, whereas concepts constrains a type base on requirements. Concepts are often implemented in term of type traits under the hood, but they are seperate things.

Using concepts as another way to write traits, but that is not what they're supposed to be used for.

---
tags: #computing/cpp/generic #computing/cpp/concepts #computing/cpp/20