---
aliases:
  - positive-definite
  - positive-semi definite
  - negative-definite
  - negative-semi definite
  - positive-semidefinite
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/LinearAlgebra
---
# Definite Matrix

A [[./symmetric matrix|symmetric matrix]] $\mathbf{M}$ 
- is **positive-definite** iff $\mathbf{v}^T \mathbf{M} \mathbf{v} > 0 \ \ \forall \ \mathbf{v} \neq \mathbf{0}$
- is **positive-semi definite** iff $\mathbf{v}^T \mathbf{M} \mathbf{v} \ge 0 \ \ \forall \ \mathbf{v} \neq \mathbf{0}$

**Negative-definite** and **negative semi-definite** matrices are defined analogously

## Relationship with Eigen Values

The matrix $\mathbf{M}$ is positive-definite if all its [[eigenvalues|eigenvalues]] are positive. i.e. after [[./eigenvalue decomposition|eigenvalue decomposition]] $\mathbf{M} = \mathbf{U} \mathbf{D} \mathbf{U}^T$, every diagonal value of $\mathbf{D}$ is positive.