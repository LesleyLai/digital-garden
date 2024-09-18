---
created: 2024-02-28
modified: 2024-03-14
parent:
  - "[[determinant|determinant]]"
publish: true
tags:
  - math/LinearAlgebra/determinant
---

# Geometric Intuitions of Determinant
## Determinant in 2D
$\left| \det(\left[ \mathbf{u} \ \mathbf{v} \right]) \right|$ encodes the area under the parallelogram of with edge vectors $\mathbf{u}$ and $\mathbf{v}$

## Volume and Triple Product in 3D
$\det(\left[\mathbf{u} \ \mathbf{v} \ \mathbf{w}\right])$ encodes (signed) volume of parallelepiped with edge vectors $\mathbf{u}, \mathbf{v}, \mathbf{w}$:![[../triple_product.png|triple_product.png]]

The above relationship is known as a "[[./scalar triple product|triple product]] formula".

Note we cannot reverse order of cross product, otherwise we get the wrong sign.

## Determinant of a Linear Map
If a matrix $A$ encodes a [[./linear transformation|linear map]] $f$, the determinant measures the *change in volume*:
![[../determinant_volume_change.png|determinant_volume_change.png]]