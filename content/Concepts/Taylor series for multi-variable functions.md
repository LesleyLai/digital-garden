---
created: 2024-02-07
modified: 2024-03-14
parent:
  - "[[Taylor series|Taylor series]]"
publish: true
tags:
  - math/calculus
  - math/sequences_and_series
---

# Taylor Series for Multi-variable Functions
For a single-output function $f: \mathbb{R}^n \rightarrow \mathbb{R}$, around $\mathbf{x} = \mathbf{a}$, the Taylor series of this function is
$$
f(\mathbf{x}) = \sum_{I} \left. \frac{1}{I!} D^I f \right|_{\mathbf{a}} (\mathbf{x} - \mathbf{a})^I
$$
where $\sum_{I}$ is the sum over "[[./multi-index notation|multi-indices]]."


> [!example] function of two inputs
> For a planar function $f(x, y): \mathbb{R}^2 \rightarrow \mathbb{R}$ at origin $\mathbf{x} = (0, 0)$
> $$
> \begin{align}
> f(x, y) &= f(0, 0) & \text{(0th order term)} \\
> &+ \left. \frac{\partial f}{\partial x} \right|_{\mathbf{0}} x + \left. \frac{\partial f}{\partial y} \right|_{\mathbf{0}} y & \text{(1st order term)}  \\
> &+ \left. \frac{1}{2}\frac{\partial^2 f}{\partial x^2} \right|_{\mathbf{0}} x^2 + \left. \frac{\partial^2 f}{\partial x \partial y} \right|_{\mathbf{0}} xy + \left. \frac{1}{2}\frac{\partial^2 f}{\partial y^2} \right|_{\mathbf{0}} y^2 & \text{(2nd order term)}  \\
> &+ \left. \frac{1}{6}\frac{\partial^3 f}{\partial x^3} \right|_{\mathbf{0}} x^3 + \frac{1}{2}\left. \frac{\partial^3 f}{\partial x^2 \partial y} \right|_{\mathbf{0}} x^2y + \frac{1}{2}\left. \frac{\partial^3 f}{\partial x \partial y^2} \right|_{\mathbf{0}} xy^2 + \left. \frac{1}{6}\frac{\partial^3 f}{\partial y^3} \right|_{\mathbf{0}} y^3 & \text{(3rd order term)} \\
> &+ \cdots
> \end{align}
> $$

## Taylor Approximation
We can use Taylor series to approximate multi-variable functions as polynomial.
> [!example]- Approximate solutions to $\sin(xy) = e^{x^3} - \cos(x^2y)$ near $(0, 0)$
> $$
> \begin{align}
> \sin(xy) &= e^{x^3} - \cos(x^2y)  \\
> xy - O((xy)^3) &= (1 + x^3 + O(x^6)) - (1 - O((x^2y)^2))  \\
> xy - x^3 + O(|\mathbf{x}|^6) &= 0 \\
> x(y - x^2) &= 0
> \end{align}
> $$
> So we get $x = 0$ and $y = x^2$. This approximation is good up to 5-th order derivatives.

## Composition and Substitution
Sometimes it is hard to work with Taylor series of multi-variable functions. Nevertheless, we can simplify the process by using substitution to transform the function into a function of one variable.

> [!example]+ Example: Taylor expand $e^{x^2 + y}$ about $x = y = 0$ up to terms of order 3
> Let $u = x^2 + y$, then
> $$
> \begin{align}
> e^{x^2 + y} &= e^u = 1 + u + \frac{1}{2}u^2 + \frac{1}{6}u^3 + \dots  \\
> &= 1 + (x^2 + y) + \frac{1}{2}(x^2 + y)^2 + \frac{1}{6}(x^2 + y)^3 + O(|\mathbf{x}|^4)
> \end{align}
> $$
> And then we can expand the above equation and discard higher order terms

## References
- [[Calc Blue Ch12 Taylor Series|Calc Blue Ch12 Taylor Series]]
- [[Calc Blue Ch13 Computing Taylor Series|Calc Blue Ch13 Computing Taylor Series]]