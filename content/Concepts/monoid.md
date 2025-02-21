---
parent:
  - "[[algebraic structure|algebraic structure]]"
tags:
  - math/AbstractAlgebra
  - math/CategoryTheory
generalizations:
  - "[[./semigroup|semigroup]]"
specializations:
  - "[[group|group]]"
publish: true
created: 2025-02-21
modified: 2025-02-21
---
A monoid is a [[./semigroup|semigroup]] with an [[identity element|identity element]].

> [!definition]
> A **Monoid** is a structure $(S, *)$ consisting a set $S$ and a binary operation $*$ of $S$ such that
>  - [[./closure property|Closure]]: for all $a, b \in S$, $a * b \in S$
>  - [[associativity|Associative]]: $(a * b) * c = a * (b * c)$
>  - Identity: There exists an identity element $1_M$ such that for all $a \in S$, $1_M * a = a * 1_M = a$

A monoid that is commutative is known as [[commutative monoid|commutative monoid]].