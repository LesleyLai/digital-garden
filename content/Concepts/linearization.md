---
parent:
  - "[[calculus|calculus]]"
tags:
  - math/calculus/differentiation
  - math/numerical
aliases:
  - tangent line approximation
  - linear approximation
  - tangent approximation
  - tangent plane approximation
generalizations:
  - "[[./Taylor series|Taylor expansion]]"
created: 2024-01-23
modified: 2024-04-15
publish: true
---
**Linearization** use [[./tangent space|tangent space]] to approximate a function $f(x)$ in the vicinity of a point $x_0$: $f(x) \approx f(x_0) + f'(x_0) (x - x_0)$

It can be seen as first-degree [[./Taylor series|Taylor expansion]].

## Function with Multiple Inputs
See also: [[./gradient#Gradient as Best Linear Approximation|gradient > Gradient as Best Linear Approximation]]

Given a function $f(\mathbf{x}: \mathbb{R}^n)$, we can approximate this function near $\mathbf{x}_{0}$ by
$$
\begin{align}
f(\mathbf{x}) &\approx f(\mathbf{x}_{0}) + \sum_{j=1}^n \frac{\partial f}{\partial x_j}(\mathbf{x}_{0}) \, (\mathbf{x}_{j} - \mathbf{x_{0}}_{j}) \\
&= f(\mathbf{x}_{0}) + \nabla f(\mathbf{x}_0) \cdot (\mathbf{x} - \mathbf{x_{0}})
\end{align}
$$
In one and two dimensions, we have tangent line and tangent plane, respectively. Visualizing higher dimensions is more challenging.

> [!example]- Example: take $\mathbf{a} = \langle 0, 0, 0 \rangle$ and estimate $w = f(x, y, z) = \sin(x^2 + y^2 - z)$ at $(0.1, 0.2, 0.3)$
> **Answer**: first: $f(\mathbf{a}) = f(\mathbf{0}) = \sin(0) = 0$.
> Then $f_{x} = 2x \cos(x^2 + y^2 - z)$, $f_{y} = 2y \cos(x^2 + y^2 - z)$, and $f_{z} = - \cos(x^2 + y^2 - z)$ and only $f_{z}$ is non-zero at $\langle 0, 0, 0 \rangle$: $f_{z}(0, 0, 0) = -1$.
> Therefore, $f(x, y, z) \approx -(z - 0) = -z$
> And so $f(0.1, 0.2, 0.3) \approx -0.3$
> The actual value of $f(0.1, 0.2, 0.3)$ is $−0.247404$