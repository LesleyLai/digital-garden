---
created: 2023-05-30
generalizations:
  - "[[inner product|inner product]]"
modified: 2024-10-11
parent:
  - "[[Euclidean vector space|Euclidean vectors]]"
publish: true
tags:
  - math/LinearAlgebra/InnerProduct
  - math/definitions
---
**Dot product** is denoted as $\mathbf{u} \cdot \mathbf{v}$.

> [!definition] Geometric Definition
> $$
 \mathbf{u} \cdot \mathbf{v}= \begin{cases}\|\mathbf{u}\|\|\mathbf{v}\| \cos [\mathbf{u}, \mathbf{v}], & \text { if } \mathbf{u} \neq \mathbf{0} \text { and } \mathbf{v} \neq \mathbf{0} \\ 0, & \text { if } \mathbf{u}=\mathbf{0} \text { or } \mathbf{v}=\mathbf{0}\end{cases}
> $$
> where we use $[\mathbf{u}, \mathbf{v}]$ to denote the angle between $\mathbf{u}$ and $\mathbf{v}$.

If two vectors are [[./orthogonal|orthogonal]], then their dot product is $\mathbf{0}$:
$$
\mathbf{u}\cdot \mathbf{v} = \mathbf{0} \iff \mathbf{u} \perp \mathbf{v}
$$

The dot product can be getting from the [[./L2 norm|Euclidean norm]].
## Properties
Dot product satisfies the following properties:
- $\mathbf{u}\cdot \mathbf{v} = \mathbf{v}\cdot\mathbf{u}$ ([[commutativity|Commutativity]])
- $(a\mathbf{u})\cdot \mathbf{v} = a\mathbf{u}\cdot \mathbf{v}$ ([[associativity|Associativity]])
- [[./dot production is distributive over the addition|dot production is distributive over the addition]] (Distributive)
- $\mathbf{u}\cdot \mathbf{u} \ge 0$ (Positive-definiteness)
- $\mathbf{u}\cdot \mathbf{u} = 0 \iff \mathbf{u} = \mathbf{0}$