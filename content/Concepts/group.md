---
created: 2024-01-25
modified: 2024-03-14
publish: true
tags:
  - math/AbstractAlgebra
  - "#math/definitions"
---

# Group
> [!definition]
> A group is a pair $(G, *)$ consisting a set $G$ and a binary operation $*$ of $G$ such that
>   - G has an *identity element*, usually denoted $1_G$ or just 1, with the property that
>   $$
>   1_G * g = g * 1_G = g \quad \forall \ g
>   $$
>   - The operation is *associative*, a.k.a $(a * b) * c = a * (b * c)$
>   - Each elements of $G$ has an *inverse* s.t. $(g * g^{-1} = g^{-1} * g = 1_G)$

Some authors also add a [[./closure property|closure property]] to explicitly state that $(g * h) \in G$. Though this property is implied by the fact that $*$ is a binary operator of $G$.

## Examples
  - The pair $(\mathbb{Q}, \times)$ is *not* a group since $0 \in \mathbb{Q}$ does not have an inverse. By contrast, if we change $\mathbb{Q}$ to non-zero rationals, then this pair becomes a group.