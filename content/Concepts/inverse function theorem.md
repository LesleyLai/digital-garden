---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[calculus|calculus]]"
publish: true
tags:
  - math/calculus/differentiation
  - math/functions
---
# Inverse Function Theorem

The **inverse function theorem** gives a sufficient condition for a function to be [[bijection|invertible]] in a [[neighborhood (topology)|neighborhood]] of a point in its domain: _its derivative is [[./continuous functions|continuous]] and non-zero at the point._

The theorem also gives a formula for the derivative of the inverse function: In single variable calculus, the [[inverse rule|inverse rule]] states that $\frac{d}{dx}(f^{-1}) = \frac{1}{df/dx}$.

## In Multi-variate Context

A function $f: \mathbb{R}^n \rightarrow \mathbb{R}^n$ has an inverse $f^{-1}$ _if and only if_  $f^{-1}(f(\mathbf{x})) = \mathbf{x}$ and $f(f^{-1}(\mathbf{u})) = \mathbf{u}$ for all $\mathbf{x}$ and $\mathbf{u}$.

Computing inverse of a non-linear multi-variate functions is difficult. However, we can find a _local_ inverse via [[./Taylor series|Taylor expansion]] and [[linearization|linearization]].

> [!example] finding nonlinear inverses
> Given
> $$
> f(\mathbf{x})=\mathbf{u} \quad \text { with } \quad f\left(\begin{array}{l}
> x \\
> y
> \end{array}\right)=\left(\begin{array}{l}
> u \\
> v
> \end{array}\right) 
> $$
> $$
>  \text{where } f\left(\begin{array}{l}
> x \\
> y
> \end{array}\right)=\left(\begin{array}{c}
> e^{x+y}-\cos (3 x+y) \\
> x y+\sin(x-2 y)
> \end{array}\right)
> $$
> It is hard to find an inverse to this function. However, if we want to find an inverse to a particular point, say for $x, y$ close to zero, we can Taylor expand the function.
> $$
> \begin{aligned}
> f\left(\begin{array}{l}
> x \\
> y
> \end{array}\right)
> &=\left(\begin{array}{c}
> \left(1+(x+y)+O\left(\|\mathbf{x}^2\|\right)\right)-\left(1-O\left(\|\mathbf{x}\|^2\right)\right) \\
> x y+\left((x-2 y)-O\left(\|\mathbf{x}\|^3\right)\right)
> \end{array}\right) \\
> &=
> \left(\begin{array}{c}
> x + y + O\left(\|\mathbf{x}\|^2\right) \\
> x - 2y + O\left(\|\mathbf{x}\|^2\right)
> \end{array}\right)
> \end{aligned}
> $$
> We will ignore the higher-order terms, and as a result we get
> $$
> = \left[\begin{array}{cc}
> 1 & 1 \\
> 1 & -2
> \end{array}\right]\left(\begin{array}{l}
> x \\
> y
> \end{array}\right)+O\left(\|\underline{x}\|^2\right)
> $$
> Now we get an linear function and the derivative is invertible.

The big idea: the derivative at a point tells you about the local nature of the function there, including invertibility.

> [!definition] The inverse rule in multi-variate context
> The [[./derivative|derivative]] of the inverse is the inverse of the derivative
> $$
> [ Df^{-1} ] = [Df]^{-1}
> $$
> assuming the function is differentiable

> [!proof]-
By definition $(f^{-1} \circ f)(\mathbf{x}) = \mathbf{x}$
$\left[D(f^{-1} \circ f)\right] = \mathrm{I}$
$\left[Df^{-1}\right]\left[Df\right] = \mathrm{I}$ and vice versa (via [[./chain rule|chain rule]])
thus $\left[Df^{-1}\right] = \left[Df\right]^{-1}$

Note that the [[existence|existence]] of an inverse should never be taken for granted.

> [!theorem] Inverse function theorem
> $f: \mathbb{R}^n \rightarrow \mathbb{R}^n$ is locally invertible near $f(\mathbf{a})$ if the derivative of $f$ at $\mathbf{a}$ is invertible

In other word, $f$ is invertible near $f(a)$ if $\det [Df]_{a} \neq 0$ ([[determinant|determinant]] of [[./derivative|derivative]])

The inverse function theorem implies that the linear data (derivatives) can control the existence of nonlinear inverse function.

## Applications
- [[inverse kinematics|inverse kinematics]]

## References
- [Inverse function theorem - Wikipedia](https://en.wikipedia.org/wiki/Inverse_function_theorem)
- [CalcBLUE 2 : Ch. 7 : THE INVERSE FUNCTION THEOREM : INTRO - YouTube](https://www.youtube.com/watch?v=JlrFnNYGhBc&list=PL8erL0pXF3JZZTnqjginERYYEi1WpLE_V&index=43)