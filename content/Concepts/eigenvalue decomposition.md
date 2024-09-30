---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#math/LinearAlgebra/decomposition"
---

A special case of [[./singular value decomposition|singular value decomposition]] is **eigenvalue decomposition**:
a [[./symmetric matrix|symmetric matrix]] can be decomposed into
$$
\mathbf{A} = \mathbf{U}\mathbf{D}\mathbf{U}^T
$$
such that $\mathbf{D}$ is diagonal and $\mathbf{U}$ is an [[./orthogonal matrix|orthogonal matrix]] (and thus $\mathbf{U}^{-1} = \mathbf{U}^T$).

It also happens that $\mathbf{D}$'s diagonal contains the [[./eigenvalues|eigenvalues]] of $\mathbf{A}$ and the columns of $\mathbf{U}$ are eigen vectors.

## Eigenvalue Decomposition of Asymmetric Matrix
  If we allow eigenvalues and eigenvectors to be complex (numbers),
  then we can do eigenvalue decomposition for asymmetric matrix.