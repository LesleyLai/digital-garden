---
aliases:
  - invertible matrix
  - singular matrix
  - non-singular matrix
created: 2023-05-30
modified: 2024-06-15
publish: true
tags:
  - math/LinearAlgebra
  - math/definitions
---
Not all [[./matrix|matrices]] have inverse, and we call non-invertible matrices **singular**.

One way to calculate matrix inverse is by the [[./Gauss–Jordan elimination|Gauss–Jordan elimination]]. 

## Equivalent Conditions
There are a lot of equivalent conditions for invertible:

Let $A$ be an $n×n$ matrix. Then the following are equivalent:
- $A$ is invertible
- $\det{A} \neq 0$ (see [[./determinant|determinant]])
- $\ker(A) = \{ \mathbf{0} \}$ (see [[./null space|nullspace (kernel)]])
- If $\mathbf{b}$ is a column vector in $\mathbb{R}^n$, there is a unique column vector $\mathbf{x}$ in $\mathbb{R}^n$ satisfying $A\mathbf{x} = \mathbf{b}$
- All the rows and columns of $A$ are linearly independent
- The [[./transpose|transpose]] $A^t$ of $A$ is invertible
- All of the [[./eigenvalues and eigenvectors|eigenvalues]] of $A$ are non-zero
- Its [[./rank of matrices|rank]] is equal to $n$

## Some Theorems about Invertible Matrices
- If $A^{-1}$ exists, then it is [[uniqueness|unique]]
- If $A^{-1}$ and $B^{-1}$ exists, then $(AB)^{-1} = B^{-1} A^{-1}$
- If $A^{-1}$ exists, then $AA^{-1} = A^{-1}A = I$