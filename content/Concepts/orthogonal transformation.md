---
created: 2023-05-30
modified: 2024-07-09
publish: true
tags:
  - math/LinearAlgebra/orthogonality
  - math/geometry/transformation
---

# Orthogonal Transformation
An **orthogonal transformation** is a [[./linear transformation|linear transformation]] that preserves the [[./inner product|inner product]]. It can be represented by an [[./orthogonal matrix|orthogonal matrix]] $Q$ where $Q^T Q = I$.
Geometrically, orthogonal transformations preserve *distance* between two points and the *origin*. [[./rotation|Rotation]] is a subset of orthogonal transformation which also preserve *orientation* ($\det(Q) > 0$, see [[./determinant|determinant]]). If the orientation is reversed ($\det(Q) < 0$), we get [[./reflection|reflection]].