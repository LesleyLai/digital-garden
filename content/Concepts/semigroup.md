---
parent:
  - "[[algebraic structure|algebraic structure]]"
tags:
  - math/AbstractAlgebra
  - math/CategoryTheory
generalizations:
  - "[[magma|magma]]"
specializations:
  - "[[./group|groups]]"
  - "[[./monoid|monoids]]"
created: 2025-02-20
modified: 2025-02-20
publish: true
---
> [!definition]
> A **semigroup** is a pair $(S, *)$ consisting a set $S$ and a binary operation $*$ of $S$ such that the operation is associative, a.k.a $(a * b) * c = a * (b * c)$

Semigroups are a generalization of [[./monoid|monoids]] and [[./group|groups]]. A semigroup with an [[identity element|identity element]] is called a monoid, and a monoid in which every element has an inverse is called a group.
associative
## In Programming

A semigroup may be represented as something like [^1]
```ocaml
module type Semigroup = sig
  type t
  val append : t -> t -> t
end
```
Note that the `append` function can be called by a lot of different names such as `add`, `multiply`. But we use `append` throughout this note for consistency.

Programming languages usually can't guarantee associativity mechanically, so an implementation of `Semigroup` must ensure the following holds:
```ocaml
append a (append b c) = append (append a b) c
```

## Examples of Semigroup
### Numbers
```ocaml
module IntAdd = struct
  type t = int
  let append = ( + )
end

module IntMul = struct
  type t = int
  let append = ( * )
end
```
### Boolean
```ocaml
module BoolAnd = struct
  type t = bool
  let append = ( && )
end

module BoolOr = struct
  type t = bool
  let append = ( || )
end
```
### String
```ocaml
module String = struct
  type t = string
  let append = ( ^ ) (* ^ is string concatenation syntax in OCaml *)
end
```

### Generic Calculation of Min (or max)
```ocaml
module type Comparible = sig
  type t
  val compare : t -> t -> int
end

module Min(C: Comparible) = struct
  type t = C.t
  let append x y = if C.compare x y <= 0 then x else y
end
```

## Applications
- [[./power of element#Semigroup|power]]
- fold/reduce

[^1]: [Pragmatic Category Theory | Part 1: Semigroup Intro](https://chshersh.com/blog/2024-07-30-pragmatic-category-theory-part-01.html)