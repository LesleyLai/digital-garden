---
created: 2024-02-21
generalizations: "[[Taylor series|Taylor expansion]]"
modified: 2024-03-14
parent:
  - "[[calculus|calculus]]"
publish: true
tags:
  - math/calculus/differentiation
  - math/numerical
---

# Quadratic Approximation of Functions
Quadratic approximation extends [[linearization|linear approximation]]:
$$
f(x) \approx f\left(x_0\right)+f^{\prime}\left(x_0\right)\left(x-x_0\right)+\frac{f^{\prime \prime}\left(x_0\right)}{2}\left(x-x_0\right)^2 \quad\left(x \approx x_0\right)
$$

## Function with Two Variables
See: [[./Taylor series for multi-variable functions|Taylor series for multi-variable functions]]

Given a function $f(\mathbf{x}: \mathbb{R}^n)$, we can approximate this function near $\mathbf{x}_{0}$ by
$$
Q_f(\mathbf{x})=\underbrace{f\left(\mathbf{x}_0\right)}_{\text {Constant }}+\underbrace{\nabla f\left(\mathbf{x}_0\right) \cdot\left(\mathbf{x}-\mathbf{x}_0\right)}_{\text {Linear term }}+\underbrace{\frac{1}{2}\left(\mathbf{x}-\mathbf{x}_0\right)^{\mathrm{T}} \mathbf{H}_f\left(\mathbf{x}_0\right)\left(\mathbf{x}-\mathbf{x}_0\right)}_{\text {Quadratic term }}
$$
where $\nabla f$ is the [[./gradient|gradient]] evaluated at $\mathbf{x}_{0}$ and $\mathbf{H}_f(\mathbf{x}_{0})$ is the [[./Hessian|Hessian matrix]] evaluated at $\mathbf{x}_{0}$.

> [!example] Example: function $f(x, y)$ with two parameters
> For the specific example where $f$ has two input variables $x$ and $y$, we can approximate $f(x, y)$ near $(x_{0}, y_{0})$ as
> $$
\begin{aligned}
Q_f(x, y)= & f\left(x_0, y_0\right)+ \\
& f_x\left(x_0, y_0\right)\left(x-x_0\right)+f_y\left(x_0, y_0\right)\left(y-y_0\right)+ \\
& \frac{1}{2} f_{x x}\left(x_0, y_0\right)\left(x-x_0\right)^2+ \\
& f_{x y}\left(x_0, y_0\right)\left(x-x_0\right)\left(y-y_0\right)+ \\
& \frac{1}{2} f_{y y}\left(x_0, y_0\right)\left(y-y_0\right)^2
\end{aligned}
> $$