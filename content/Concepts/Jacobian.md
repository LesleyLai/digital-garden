---
aliases:
  - Jacobian Matrix
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#math/calculus/differentiation"
---
See also [[./divergence|divergence]] and [[./curl|curl]]

For a function $f : \mathbb{R}^n \rightarrow \mathbb{R}^m$, *the derivative of the function* can be viewed as an $m \times n$ matrix that takes all the [[./partial derivative|partial derivatives]]:

$$
Df =
\begin{bmatrix}
\frac{\partial f_1}{\partial x_1} & \cdots & \frac{\partial f_1}{\partial x_n} \\
\cdots & \frac{\partial f_i}{\partial x_j} & \cdots \\
\frac{\partial f_m}{\partial x_1} & \cdots & \frac{\partial f_m}{\partial x_n}
\end{bmatrix}
$$

This matrix is often called the *Jacobian*.

And it can be seen as transforming vectors of *rates of change* of inputs to vectors of rates of change of outputs.