---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/LinearAlgebra/decomposition
---

# Polar Decomposition

**Polar decomposition** of a matrix $A$ is a factorization $A=QP$ where $Q$ is an [[./orthogonal matrix|orthogonal matrix]] and $P$ is a [[./symmetric matrix|symmetric]] [[./definite matrix|positive-semi definite]] matrix.

## Geometric Intuition

The [[./orthogonal matrix|orthogonal matrix]] always represents [[./rotation|rotation]] or [[./reflection|reflection]]. And the positive-semidefinite matrix also represents (possibly none uniform) [[./scaling|scaling]].

![[../polar_decomposition.png|polar_decomposition.png]]

## Relationship with Singular Value Decomposition

Since $P$ is symmetric, we can also take a step further with a [[./spectral theorem|spectral decomposition]] $P = VDV^T$:  $$A = QVDV^T = UDV^T$$ where $U$ and $V^T$ are rotations and $D$ is axis-aligned scaling. By that we get [[singular value decomposition|singular value decomposition]].