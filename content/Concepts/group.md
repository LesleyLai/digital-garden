---
parent:
  - "[[algebraic structure|algebraic structure]]"
created: 2024-01-25
modified: 2025-03-11
publish: true
tags:
  - math/AbstractAlgebra
  - math/definitions
generalizations:
  - "[[./semigroup|semigroup]]"
  - "[[./monoid|monoid]]"
---

> [!definition]
> A group is a pair $(G, *)$ consisting a _set_ $G$ and a _binary operation_ $*$ of $G$ such that
>   - G has an [[identity element|identity element]] $e$, with the property that $\forall \ g \in G,\, e * g = g * e = g$
>   - The operation is [[associativity|associative]], a.k.a $(a * b) * c = a * (b * c)$
>   - Each elements of $G$ has an *inverse* s.t. $(g * g^{-1} = g^{-1} * g = e)$

Some authors also add a [[./closure property|closure property]] to explicitly state that $(g * h) \in G$. Though this property is implied by the fact that $*$ is a binary operator of $G$.

## Examples
  - The pair $(\mathbb{Q}, \times)$ is *not* a group since $0 \in \mathbb{Q}$ does not have an inverse. By contrast, if we change $\mathbb{Q}$ to non-zero rationals, then this pair becomes a group.

## Relation to Other Structures

### Specializations
- An [[abelian group|abelian group]], also called a commutative group, is a group in which the operation is [[commutativity|commutative]].
- An [[additive group|additive group]] is a specific type of abelian group where the operation is addition.

### Generalizations
- A [[./monoid|monoid]] is a more general structure than a group, lacking the requirement for inverses.
- A [[./semigroup|semigroup]] further generalizes a monoid by omitting the identity element.