---
aliases:
  - wedge product
tags:
  - math/LinearAlgebra
  - math/geometric_algebra
  - math/definitions
created: 2023-05-30
modified: 2024-07-09
parent:
  - "[[geometric algebra|geometric algebra]]"
publish: true
---
# Exterior Product

> [!warning] not to be confused with [[./outer product|outer product]]. Note that the exterior product is sometimes called outer product in literatures.

The **exterior product**, also called **wedge product**, $\mathbf{u} \wedge \mathbf{v}$ of vectors $\mathbf{u}$ and $\mathbf{v}$ constructs a [[./bivector|bivector]] represents the parallelogram formed by the the vectors  $\mathbf{a}$  and $\mathbf{b}$ , in the plane they span together. [^1]

exterior product is closely related to the [[./cross product|cross product]]:
![[../assets/exterior_product.jpg|exterior_product.jpg]]

## Properties
- $\mathbf{u} \wedge \mathbf{u} = \mathbf{0}$
- $\mathbf{v} \wedge \mathbf{u} = -(\mathbf{u} \wedge \mathbf{v})$
- $a(\mathbf{u} \wedge \mathbf{v}) = (a\mathbf{u}) \wedge \mathbf{v}$
- Distributive over addition: $(\mathbf{u} +\mathbf{v} ) \wedge \mathbf{w} = \mathbf{u} \wedge \mathbf{w} + \mathbf{v} \wedge \mathbf{w}$

## Magnitude
The magnitude of exterior product is the same as the magnitude cross product.

### Theorem
Let $\{ \mathbf{e}_1, \mathbf{e}_2 \}$ be an orthonormal basis for a plane. Orient the plane with that of $\mathbf{e_1} \wedge \mathbf{e_2}$. Let $\mathbf{u}$ and $\mathbf{v}$ be vectors in the plane. Let $\theta$ be the oriented angle from $\mathbf{u}$ to $\mathbf{v}$, $-\pi < \theta \le \pi$. Then
$$
\mathbf{u} \wedge \mathbf{v} = |\mathbf{u}||\mathbf{v}| \sin \theta (\mathbf{e_1} \wedge \mathbf{e_2})
$$

## In 3D
So far we are talking about the coordinate-free definition of exterior product, and here is a definition with three coordinate vectors:

Let $\mathbf{u} = u_1 \mathbf{e}_1 + u_2 \mathbf{e}_2 + u_3 \mathbf{e}_3$ and $\mathbf{v} = v_1 \mathbf{e}_1 + v_2 \mathbf{e}_2 + v_3 \mathbf{e}_3$.
Then
$$
\mathbf{u} \wedge \mathbf{v} = (u_3v_2 - u_2v_3) \mathbf{e}_1 + (u_1v_3-u_3v_1) \mathbf{e}_2 + (u_2v_1 - u_1v_2) \mathbf{e}_3
$$
and
$$
\left|\mathbf{u} \wedge \mathbf{v}\right|^2 = (u_3v_2 - u_2v_3)^2 + (u_1v_3-u_3v_1)^2 + (u_2v_1 - u_1v_2)^2
$$

## Related
- [[./inner product|inner product]]
- [[./outer product|outer product]]
- [[./cross product|cross product]]
- [[./geometric product|geometric product]]
- [[Cartesian product|Cartesian product]]
- [[./Hadamard product|Hadamard product]] - element-wise product

[^1]: [Let's remove Quaternions from every 3D Engine (An Interactive Introduction to Rotors from Geometric Algebra) - Marc ten Bosch](https://marctenbosch.com/quaternions)