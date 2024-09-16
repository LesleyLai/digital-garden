---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/LinearAlgebra/orthogonality
  - "#math/numerical"
---

# Gram-Schmidt Process
The **Gram-Schmidt process** is an algorithm to convert a [[./basis|basis]] $\{ \mathbf{a}_{1}, \mathbf{a}_{2}, \cdots, \mathbf{a}_{n} \}$ for some [[./vector space|vector space]] to an [[./orthonormal basis|orthonormal basis]] $\{ \mathbf{e}_{1}, \mathbf{e}_{2}, \cdots, \mathbf{e}_{n} \}$.

The step is first find an orthogonal basis and then normalize.

The algorithm is following:
- normalize the first vector
- subtract any component of the 1st vector from the 2nd one (by subtracting the [[./vector projection|projection]])
- repeat by normalize the kth vector, subtract components of first k vectors from vector k+1
![[../Gram-Schmidt process.png|700]]

## Alternatives
- In the case of 3D math, we can use [[./cross product|cross product]] to get an orthonormal basis.
- For large number of vectors/nearly parallel vectors, Gram-Schmidt is not the best algorithm numerically. Instead, [[./QR decomposition|QR decomposition]] is a better alternative.
- Gram-Schmidt is a [[sequential algorithm|sequential algorithm]] since calculation of normal vector $\mathbf{e}_{n}$ depends on the value of previous normal vector $\mathbf{e}_{n-1}$. However, there are parallel variants.