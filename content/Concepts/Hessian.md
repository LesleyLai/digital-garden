---
aliases:
  - Hessian matrix
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[calculus|calculus]]"
publish: true
tags:
  - math/calculus/vector
---

# Hessian

The Hessian is the matrix of all second [[partial derivative|partial derivative]]

$$
\begin{equation}
\nabla^2 f:=\left[\begin{array}{cccc}
\frac{\partial^2 f}{{\partial x_1}^2} & \frac{\partial^2 f}{\partial x_1 \partial x_2} & \cdots & \frac{\partial f}{\partial x_1 \partial x_n} \\
\frac{\partial^2 f}{\partial x_2 \partial x_1} & \frac{\partial^2 f}{\partial x_2^2} & \cdots & \frac{\partial f}{\partial x_2 \partial x_n} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial^2 f}{\partial x_n \partial x_1} & \frac{\partial^2 f}{\partial x_n \partial x_2} & \cdots & \frac{\partial f}{{\partial x_n}^2}
\end{array}\right]
\end{equation}
$$

It measure the "[[./curvature|curvature]]" of the function.

We can also view Hessian as second-order [[./multi-variable derivative|multi-variable derivative]] $[D^2f]$.