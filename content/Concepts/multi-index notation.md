---
aliases:
  - multi-indices
  - multi-index
created: 2024-02-07
modified: 2024-06-24
parent:
  - "[[calculus|calculus]]"
publish: true
tags:
  - math/notations
  - math/calculus/vector
---

# Multi-index Notation
Multi-index notation generalizes integer index into ordered tuple of indices. It is useful when we have a function with a lot of input variables.

A multi-index is $n$ ordered indices $I = (i_1, i_2, \dots, i_n)$ of non-negative integers

## Definitions
### Sum of Components
The *degree* of a multi-index $I$ is defined as $|I| := i_1 + i_2 + \dots + i_n$

### Powers
We define the $I$th power of $\mathbf{x}$ as
$$
\mathbf{x}^I = x_1^{i_1} x_2^{i_2} \dots x_n^{i_n}
$$
This is the meaning of that monomial $\mathbf{x}^I$ term.

The degree of the monomial term equals the degree of the multi-index.

> [!example]- Example: For $\mathbf{x} = (x, y, z)$
> $$
> \begin{align}
> \mathbf{x}^{(1, 2, 3)} &= xy^2z^3 \\
> \mathbf{x}^{(0, 1, 0)} &= x^0y^1z^0 = y \\
> \mathbf{x}^{(1, 0, 1)} &= x^1y^0z^1 = xz
> \end{align}
> $$

### Factorials
$$
I! = i_1! i_2! \dots i_n!
$$
> [!example]-
>$$
\begin{align}
(1, 2, 3)! &= 1!2!3! = 12 \\
(2, 2, 2)! &= 2!2!2! = 8 \\
(0, 0, 0)! &= 0!0!0! = 1
\end{align}
>$$

## Derivatives & Mixed Partials
Use the multi-index to record the number & types of derivatives
Given
$$
\begin{align}
f &= f(x) \\
\mathbf{x} &= (x_1, x_2, \dots, x_n) \\
I &= (i_1, i_2, \dots, i_n)
\end{align}
$$
Define
$$
D^I f=\frac{\partial^{i_1}}{\partial x_1^{i_1}} \frac{\partial^{i_2}}{\partial x_2^{i_2}} \ldots \frac{\partial^{i_n}}{\partial x_n^{i_n}} f
$$
> [!example]+ Example: Higher Derivatives
>$$
f(\mathbf{x}) = x^3yz^2 \quad \mathbf{x} = (x, y, z)
>$$
>$$
\begin{aligned}
& D^{(1,2,3)} f=\frac{\partial}{\partial x} \frac{\partial^2}{\partial y^2} \frac{\partial^3}{\partial z^3} f=0 \\
& D^{(1,0,1)} f=\frac{\partial}{\partial x} \frac{\partial}{\partial z} f=6 x^2 y z \\
& D^{(0,0,0)} f=f=x^3 y z^2
\end{aligned}
>$$

Which order do we evaluate those partial derivatives? [[./symmetry of second derivatives|The order in which you compute the partial derivatives doesn't matter if f has continuous second partial derivatives]]!