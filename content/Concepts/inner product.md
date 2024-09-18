---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[linear algebra|linear algebra]]"
publish: true
specializations:
  - "[[dot product|dot product]]"
tags:
  - math/LinearAlgebra/InnerProduct
  - math/definitions
---

# Inner Product

**Inner product** is written as $\langle \mathbf{u},\, \mathbf{v} \rangle$.

Inner product satisfy the following properties:
- [[commutativity|Commutativity]]: $\langle \mathbf{u},\, \mathbf{v} \rangle = \langle \mathbf{v},\, \mathbf{u} \rangle$
- $\langle a\mathbf{u},\, \mathbf{v} \rangle = a\langle \mathbf{u},\, \mathbf{v} \rangle$
- $\langle \mathbf{u} + \mathbf{v},\, \mathbf{w} \rangle = \langle \mathbf{u},\, \mathbf{w} \rangle + \langle \mathbf{v},\, \mathbf{w} \rangle$
- Positivity: $\langle \mathbf{u},\, \mathbf{u} \rangle \ge 0$
- $\langle \mathbf{u},\, \mathbf{u} \rangle = 0 \iff \mathbf{u} = \mathbf{0}$

We say that the two vectors are [[./orthogonal|orthogonal]] with respect to the [[./inner product space|inner product space]] if $\langle \mathbf{u},\, \mathbf{v} \rangle = 0$.

Notice that two vector orthogonal in one inner product space may not necessarily orthogonal to each other with a different inner product.

The [[./Cauchy-Schwarz inequality|Cauchy-Schwarz inequality]] describes the relationship between [[./norm|norm]] and inner product.

## Euclidean Inner Product
A standard inner product is the so-called Euclidean inner product on n-dimensional vectors.

$$
\langle \mathbf{u},\, \mathbf{v} \rangle := \sum_{i=i}^n u_i v_i
$$

The Euclidean inner product can be gotten from the [[./L2 norm|Euclidean norm]]:
$$
\langle \mathbf{u},\, \mathbf{v} \rangle
$$

## L2 Inner Product of Functions
Just like we have [[./L2 norm#L2 Norm of Functions|L2 norm of functions]], we also have L2 inner product of functions.

$$
\langle \mathbf{f},\, \mathbf{g} \rangle := \int_0^1 f(x) g(x) dx
$$