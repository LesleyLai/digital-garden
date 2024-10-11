---
created: 2023-05-30
modified: 2024-10-11
publish: true
tags:
  - math/LinearAlgebra/orthogonality
  - math/geometry/transformation
---
An **orthogonal transformation** is a [[./linear transformation|linear transformation]] that preserves the [[./inner product|inner product]]. It can usually be represented by an [[./orthogonal matrix|orthogonal matrix]] $Q$ where $Q^T Q = I$.

Geometrically, orthogonal transformations preserve *distance* between two points and the *origin*. [[./rotation|Rotation]] is a subset of orthogonal transformation which also preserve *orientation* ($\det(Q) > 0$, see [[./determinant|determinant]]). If the orientation is reversed ($\det(Q) < 0$), we get [[./reflection|reflection]].

## See Also
- [[./two reflections gives a rotation|two reflections gives a rotation]]