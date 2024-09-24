---
aliases:
  - elementary row operations
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[linear algebra|linear algebra]]"
publish: true
tags:
  - math/LinearAlgebra/LinearSolver
---
**Gaussian Elimination** is an algorithm to solve systems of [[./system of linear equation|system of linear equation]].

It first reduces a matrix to a [[./triangular matrix|upper-triangular matrix]] and [[back substitution|back substitutes]] the result.

We can augment a matrix with the right hand side of the equation to create an [[augmented matrix|augmented matrix]].

And then we can perform *elementary row operations* on the augmented matrix. Those row operations will not change the solution of the equation:
> [!definition] elementary row operations
> 1. Switch two rows
> 2. Scaling row
> 3. [[./linear combination|Linearly combining]] two rows

We reduces the augmented matrix row-by-row until its left side reaches the [[./triangular matrix|upper-triangular form]].

> [!info]+ when first element is zero
> Sometimes it is not possible to eliminate if the first variable in the first row is 0:
> $$
> \begin{equation}\begin{cases}\begin{array}{rrrl}
> 3 x_2 - 6 x_3 &= -21, \\
> 2 x_1 + 4 x_2 - 2 x_3 &= 16, \\
> - x_1 - 7  x_2 + 2  x_3 &= -27. \\
> \end{array}\end{cases}\end{equation}
> $$
> In this case, we can reorder the equations:
> $$
> \begin{equation}\begin{cases}\begin{array}{rrrl} \\
> 2 x_1 + 4 x_2 - 2 x_3 &= 16, \\
> 3 x_2 - 6 x_3 &= -21, \\
> - x_1 - 7  x_2 + 2  x_3 &= -27. \\
> \end{array}\end{cases}\end{equation}
> $$

Gaussian elimination suffers from the problems of numerical instability and redundant computation, and [[./LU factorization|LU factorization]] is often a preferred numerical algorithm.