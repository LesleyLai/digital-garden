---
parent:
  - "[[numerical methods for ordinary differential equations|numerical methods for ordinary differential equations]]"
tags:
  - "#math/DE"
  - "#math/numerical"
  - "#math/numericalODE"
aliases:
  - explicit Euler's method
  - forward Euler's method
created: 2024-11-26
modified: 2024-11-26
publish: true
---
When given the initial values for $t_0$ and $y(t_0)$, and the derivative of $y$ is given as a function of $t$ and $y$ denoted as $y'(t) = f(t, y(t))$, the **Euler's method** is used to find $y_{n + 1}$ from $y_n$ and $t_n$:
$$
y_{n + 1} = y_n + h f(t_n, y_n)
$$
Here, $h$ is a fixed step size, and $t_{n+1} = t_n + h$. The value of $y_n$ is an approximation of the solution at $t_n$, i.e., $y_n \approx y(t_n)$.

The Euler's method is [[explicit and implicit methods|explicit]], meaning the solution $y_{n + 1}$ is an explicit function of $y_i$ for $i \le n$. Due to this characteristic, it is also referred to as the **explicit Euler's method** or **forward Euler's method**.

![[../assets/Euler_method.svg|300]]

## Generalization to Higher-order Process

While the Euler method is typically used to solve [[first-order ordinary differential equation|first-order ODEs]], any ODE of order $n$ can be represented as a [[system of differential equation|system of first-order ODEs]]. when given an ODE of order $n$ defined as
$$y^{(n+1)}(t) = f\left(t, y(t), y'(t), \ldots, y^{(n)}(t)\right)$$
along with a step size $h$ and initial conditions $t_0, y_0, y'_0, \dots, y^{(n)}(0)$, we can use the following formula:
$$\mathbf{y}_{i+1} 
  = \begin{pmatrix} y_{i+1}\\ y'_{ i+1 } \\ \vdots\\ y_{i+1}^{(n-1)}\\ y_{i+1}^{(n)} \end{pmatrix}  
  = \begin{pmatrix} y_{i}+h\cdot y'_i\\ y' _{i}+h\cdot y''_{i}\\  \vdots\\ y^{(n-1)}_{i}+h\cdot y^{(n)}_{i}\\ y^{(n)}_{i}+h\cdot f\left(t_i, y_i, y'_i, \ldots, y^{(n)}_i\right) \end{pmatrix}
$$

## Variation
In addition to the explicit Euler method, there are two other variations of Euler methods that offer different trade-offs:
- [[symplectic Euler's method|symplectic Euler's method]] (also called semi-implict Euler method)
- [[implicit Euler's method|implicit Euler's method]] (also called backward Euler method)
  - more stable but requires to solve an algebraic equation

