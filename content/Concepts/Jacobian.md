---
aliases:
  - Jacobian Matrix
  - Jacobian determinant
  - Jacobian
created: 2023-05-30
modified: 2025-03-03
publish: true
tags:
  - math/calculus/differentiation
---
For a function $\mathbf{f} : \mathbb{R}^n \rightarrow \mathbb{R}^m$, [[./multi-variable derivative|the derivative of the function]] can be viewed as an $m \times n$ matrix that takes all the [[./partial derivative|partial derivatives]]:
$$
D\mathbf{f} =
\begin{bmatrix}
\frac{\partial f_1}{\partial x_1} & \cdots & \frac{\partial f_1}{\partial x_n} \\
\cdots & \frac{\partial f_i}{\partial x_j} & \cdots \\
\frac{\partial f_m}{\partial x_1} & \cdots & \frac{\partial f_m}{\partial x_n}
\end{bmatrix}
$$

This matrix is often called the **Jacobian matrix**. The matrix can be seen as transforming vectors of *rates of change* of inputs to vectors of rates of change of outputs.

When the Jacobian matrix is a square matrix, the [[./determinant|determinant]] of it is often referred to as **Jacobian determinant**. Both the matrix and the determinant are often referred to simply as the **Jacobian** in literature. [^1] Jacobian determinant plays an important role in measuring volume change under [[./changing variables in multiple integrals|transformations]].

## See Also
- [[./divergence|divergence]]
- [[./curl|curl]]
- [[./multi-variable derivative|the derivative of the function]]
- [[./linearization|linear approximation]] - the Jacobian matrix represent the best linear approximation of the function $\mathbf{f}$ in a neighborhood of $\mathbf{x}$

[^1]: [Jacobian matrix and determinant - Wikipedia](https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant)