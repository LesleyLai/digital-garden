---
aliases:
  - SVD
  - 奇异值分解
tags:
  - math/LinearAlgebra/decomposition
created: 2023-05-30
modified: 2024-03-14
publish: true
---
**Singular value decomposition** (SVD) decomposes a matrix into$$
\mathbf{A} = \mathbf{U}{\mathbf{D}}\mathbf{V}^T
$$such that $\mathbf{D}$ is diagonal (called *singular values*), and $\mathbf{U}$ and $\mathbf{V}$ are [[./orthogonal matrix|orthogonal matrices]].

SVD [[./decompose linear transformations|decomposes linear transformations]] into three steps: rotation, scaling, and another rotation:
![[../assets/SVD_linear_transformation.png|SVD_linear_transformation.png]]