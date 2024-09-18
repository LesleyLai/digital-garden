---
created: 2024-01-18
modified: 2024-03-14
parent:
  - "[[calculus|calculus]]"
publish: true
tags:
  - math/calculus/vector
---

# Multi-Dimensional Derivative, Gradient, and Directional Derivative
see: [[./multi-variable derivative|multi-variable derivative]], [[./gradient|gradient]], and [[./directional derivative|directional derivative]]

## Multi-Dimensional Derivative and Gradient
Gradient only works for functions that returns one output ($f : \mathbb{R}^N \rightarrow \mathbb{R}$). In that case, the multi-variable derivative matrix will be a row vector:
$$
[D f]=\left[\begin{array}{llll}
\frac{\partial f}{\partial x_1} & \frac{\partial f}{\partial x_2} & \cdots & \frac{\partial f}{\partial x_n}
\end{array}\right]
$$
This is exactly the transpose of the gradient:
$$
\nabla f=\left[\begin{array}{c}
\frac{\partial f}{\partial x_1} \\
\frac{\partial f}{\partial x_2} \\
\vdots \\
\frac{\partial f}{\partial x_n}
\end{array}\right]
$$
We can view the multi-variable derivative as a **linear transformation** acting on a vector, while the gradient is simply a regular vector.

## Directional Derivative
The "directional derivative" $D_{\mathbf{u}}(f)$ can be defined via the as dot product from [[./gradient|gradient]] to the direction, and we can also derive it directly from the multi-variable derivative matrix:
$$
D_{\mathbf{u}}(f) = \nabla f \cdot \mathbf{u} = [Df]\mathbf{u}
$$
where $\mathbf{u}$ is a unit vector.

## Different Ways of Thinking
The use of different terminology and different math construct for the same concept demonstrate two different ways of thinking:

| vector analysis                                                 | linear algebra                                      |
| --------------------------------------------------------------- | --------------------------------------------------- |
| directional derivative                                          | rate of change of output                            |
| direction vector $\mathbf{u}$                                   | any vector of rates of change of input $\mathbf{h}$ |
| $D_{\mathbf{u}}(f) = \nabla f \cdot \mathbf{u}$                 | $[Df]\mathbf{u}$                                    |
| Require $\mathbf{u}$ to be unit vector & same units on all axis | indifferent to lengths and units                    |

## Reference
- [[Calc Blue Ch9 Gradients|Calc Blue Ch9 Gradients]]