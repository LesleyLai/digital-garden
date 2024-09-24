---
tags:
  - "#math/LinearAlgebra"
  - "#math/definitions"
created: 2023-05-30
modified: 2024-03-14
aliases:
  - 二次型
publish: true
---
A **quadratic form** is a polynomial of *only* degree 2 terms. For example, $x^2 + 2xy - 3y^2$.

## Quadratic Form for Matrices
For a [[square matrix|square matrix]] $A$ and variable $\mathbf{x}$, the quadratic form is
$$
f(\mathbf{x}) = \mathbf{x}^T A \mathbf{x} = \mathbf{x} \cdot (A \mathbf{x})
$$

Its derivative is
$$
[Df] = \mathbf{x}^T (A + A^T)
$$

We can derive this derivative by using [[./product rule|product rule]]

$$
\begin{aligned}
[Df] &= [D(\mathbf{x}^T A \mathbf{x})] \\
&= \mathbf{x}^T [D(A\mathbf{x})] + (A\mathbf{x})^T[D\mathbf{x}] \\
&= \mathbf{x}^T A + (A\mathbf{x})^T I \\
&= \mathbf{x}^T A + \mathbf{x}^T A^T \\
&= \mathbf{x}^T (A + A^T)
\end{aligned}
$$