---
aliases:
  - vector product
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[Euclidean vector space|oriented length]]"
publish: true
tags:
  - "#math/LinearAlgebra"
---

# Cross Product

In 3D, a *cross product* takes two vectors and returns a vector. Geometrically, the magnitude of the result equals to parallelogram area and the direction is orthogonal to both vectors.
![[../cross_product.png|cross_product.png]]

## Properties
1. $\mathbf{u} \times \mathbf{v}$ is [[./orthogonal|orthogonal]] to both $\mathbf{u}$ and $\mathbf{v}$
2. $\mathbf{u} \times \mathbf{v} = |\mathbf{u}| |\mathbf{v}| \sin(\theta)$
3. The vectors $\mathbf{u}$, $\mathbf{v}$, $\mathbf{u} \times \mathbf{v}$ are [[./coordinate system handedness|right handed]]
4. $\mathbf{u} \times \mathbf{v} = -\mathbf{v} \times \mathbf{u}$ ([[anti-commutativity|anti-commutativity]])
5. $\mathbf{u} \times (\mathbf{v} + \mathbf{w}) = \mathbf{u} \times \mathbf{v} + \mathbf{u} \times \mathbf{w}$ and $(\mathbf{u} + \mathbf{v}) \times \mathbf{w}) = \mathbf{u} \times \mathbf{w} + \mathbf{v} \times \mathbf{w}$ ([[distributivity|distributivity]])
6. $k(\mathbf{u} \times \mathbf{v}) = (k\mathbf{u}) \times \mathbf{v} = \mathbf{u} \times (k\mathbf{v})$ ([[associativity|associativity]])

## Cross Product, Determinant, and Angle
We can have a precise definition of the cross product without the right hand rule by using [[determinant|determinant]]:
$$
\sqrt{\det{(\mathbf{u}, \mathbf{v}, \mathbf{u} \times \mathbf{v})}} = |\mathbf{u}| |\mathbf{v}| \sin(\theta)
$$
Formula:
![[../cross_product_as_determinant.png|cross_product_as_determinant.png]]

## Cross Product as Quarter Rotation

![[../cross_product_as_quarter_rotation.png|cross_product_as_quarter_rotation.png]]

An observation for manipulating vectors in 3D:
cross product with a unit vector $\mathbf{N}$ is equivalent to quarter-rotation in the plane with normal $\mathbf{N}$:
This insight is important for [[Rodrigues' rotation formula|axis-angle rotation]], as we can using $\mathbf{u}$ and $\mathbf{n} \times \mathbf{u}$ as basis vectors and use trig to find arbitrary rotation of $\mathbf{u}$ around $\mathbf{n}$.
## See Also
- [[./scalar triple product|scalar triple product]]
- [[exterior product|wedge product]]
## Reference
- [Chapter 4: The Vector Product (Immersive Linear Algebra)](http://immersivemath.com/ila/ch04_vectorproduct/ch04.html)