---
created: 2023-05-30
modified: 2024-10-11
parent:
  - "[[linear algebra|linear algebra]]"
publish: true
specializations:
  - "[[./dot product|dot product]]"
tags:
  - math/LinearAlgebra/InnerProduct
  - math/definitions
---
**Inner product** is written as $\langle \mathbf{u},\, \mathbf{v} \rangle$.

Inner product satisfy the following properties:
- [[commutativity|Commutativity]]: $\langle \mathbf{u},\, \mathbf{v} \rangle = \langle \mathbf{v},\, \mathbf{u} \rangle$
- $\langle a\mathbf{u},\, \mathbf{v} \rangle = a\langle \mathbf{u},\, \mathbf{v} \rangle$
- $\langle \mathbf{u} + \mathbf{v},\, \mathbf{w} \rangle = \langle \mathbf{u},\, \mathbf{w} \rangle + \langle \mathbf{v},\, \mathbf{w} \rangle$
- Positivity: $\langle \mathbf{u},\, \mathbf{u} \rangle \ge 0$
- $\langle \mathbf{u},\, \mathbf{u} \rangle = 0 \iff \mathbf{u} = \mathbf{0}$

We say that the two vectors are [[./orthogonal|orthogonal]] with respect to the [[inner product space|inner product space]] if $\langle \mathbf{u},\, \mathbf{v} \rangle = 0$.

Notice that two vector orthogonal in one inner product space may not necessarily orthogonal to each other with a different inner product.

The [[./Cauchy-Schwarz inequality|Cauchy-Schwarz inequality]] describes the relationship between [[./norm|norm]] and inner product.

## Subtopics
- [[./dot product|dot product]]
- [[L2 inner product of functions|L2 inner product of functions]]