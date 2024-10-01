---
aliases:
  - context parameter
  - implicit context
created: 2024-05-23
modified: 2024-05-23
parent:
  - "[[pl design|pl design]]"
publish: true
tags:
  - computing/PL/idea
---
Use case:
- Avoid passing annoy-to-pass "context information" (allocator, loggers, etc)
- passing additional parameters to an implementation of a generic interface

## Existing Designs
- Scala [Contextual Parameters, aka Implicit Parameters](https://docs.scala-lang.org/tour/implicit-parameters.html)
- [[OCaml|OCaml]]'s [Modular implicits](https://arxiv.org/pdf/1512.01895.pdf)
- [Implementing Swift generics](https://www.youtube.com/watch?v=ctS8FzqcRug)
- [[./Odin (programming langauge)|Odin]]'s [Implicit Context System](https://odin-lang.org/docs/overview/#implicit-context-system)
- Rust [With clauses](https://rust-lang.github.io/async-fundamentals-initiative/evaluation/design/with_clauses.html) Proposal
- [Getting Allocators out of Our Way - Alisdair Meredith & Pablo Halpern - CppCon 2019 - YouTube](https://youtu.be/RLezJuqNcEQ?si=JWwF7M8QlUA6XFpl)
  - [2024 slides](https://www.open-std.org/JTC1/SC22/WG21/docs/papers/2024/p3240r0.pdf)

## Articles
- [Value Oriented Programming Needs Implicits?](https://matklad.github.io/2023/05/02/implicits-for-mvs.html)
  - talk about in [[./value-oriented programming|value-oriented programming]] where heavily relies on using indices, and as a result we often need to have some "context" around. But since Value-oriented programming also doesn't support storing references, implicit parameters seems to be the answer