---
aliases:
  - Generalized Algebraic Data Type
created: 2024-02-06
modified: 2024-03-14
publish: true
tags:
  - computing/FunctionalProgramming/GADT
---

# Generalized Algebraic Data Type (GADT)

**Generalized Algebraic Data Type (GADT)** allows each constructor to have customized return type.

Here is an OCaml example from [[Real World OCaml|Real World OCaml]]:
```ocaml
type _ value =
  | Int : int -> int value
  | Bool : bool -> bool value

type _ expr =
  | Value : 'a value -> 'a expr
  | Eq : int expr * int expr -> bool expr
  | Plus : int expr * int expr -> int expr
  | If : bool expr * 'a expr * 'a expr -> 'a expr
```

## Reference
- [GADTs - Real World OCaml](https://dev.realworldocaml.org/gadts.html)