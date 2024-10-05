---
parent:
  - "[[linear algebra|linear algebra]]"
tags:
  - math/LinearAlgebra/LinearSolver
created: 2024-10-05
modified: 2024-10-05
publish: true
---
**Cramer's rule** is an explicit formula for the solution of a [[./system of linear equation|system of linear equations]] with as many equations as unknowns, valid whenever the system has a unique solution. [^1]

## Rule
Consider a system of $n$ equation and $n$ unknowns, represented as the following
$$
\underbrace{\left[\begin{array}{cccc}
a_{11} & a_{12} & \cdots & a_{1 n} \\
a_{21} & a_{22} & \cdots & a_{2 n} \\
\vdots & \vdots & \cdots & \vdots \\
a_{n 1} & a_{n 2} & \cdots & a_{n n}
\end{array}\right]}_{A}\underbrace{\left[\begin{array}{c}
x_1 \\
x_2 \\
\vdots \\
x_n
\end{array}\right]}_{\mathbf{x}}=\underbrace{\left[\begin{array}{c}
b_1 \\
b_2 \\
\vdots \\
b_n
\end{array}\right]}_{\mathbf{b}}
$$
where the matrix $A$ has non-zero [[./determinant|determinant]].

Then Cramer's rule state that the solution $\mathbf{x}$ is
$$
x_k = \frac{\det D_k}{\det A} \quad k = 1, 2, \dots, n
$$
where $D_k$ is replaced by using the $k$th column of $A$ by $\mathbf{b}$.

> [!example]-
> Use Cramer's rule to solve the following linear equations:
> $$
> \begin{array}{r}
> 2 x_1+x_2+x_3=3 \\
> x_1+3 x_2-x_3=7 \\
> x_1+x_2+x_3=1
> \end{array}
> $$
> In matrix form, these equations can be expressed as
> $$
> \left[\begin{array}{ccc}
> 2 & 1 & 1 \\
> 1 & 3 & -1 \\
> 1 & 1 & 1
> \end{array}\right]\left[\begin{array}{l}
> x_1 \\
> x_2 \\
> x_3
> \end{array}\right]=\left[\begin{array}{l}
> 3 \\
> 7 \\
> 1
> \end{array}\right]
> $$
> We can then calculate the determinants:
> $$
> |\mathbf{A}|=\left|\begin{array}{ccc}
> 2 & 1 & 1 \\
> 1 & 3 & -1 \\
> 1 & 1 & 1
> \end{array}\right|=4
> $$
> Since $|\mathbf{A}|=4 \neq 0$, a unique solution exists for $x_1, x_2$, and $x_3$. This solution is provided by Cramer's rule as follows:
> $$
> \begin{aligned}
> &x_1=\frac{1}{|\mathbf{A}|}\left|\begin{array}{ccc}
> 3 & 1 & 1 \\
> 7 & 3 & -1 \\
> 1 & 1 & 1
> \end{array}\right|=\frac{8}{4}=2 \\
> & x_2=\frac{1}{|\mathbf{A}|}\left|\begin{array}{ccc}
> 2 & 3 & 1 \\
> 1 & 7 & -1 \\
> 1 & 1 & 1
> \end{array}\right|=\frac{4}{4}=1 \\
> & x_3=\frac{1}{|\mathbf{A}|}\left|\begin{array}{ccc}
> 2 & 1 & 3 \\
> 1 & 3 & 7 \\
> 1 & 1 & 1
> \end{array}\right|=\frac{-8}{4}=-2
> \end{aligned}
> $$

## Practicality for Large Systems
Cramer's rule, implemented in a naive way, is computationally inefficient for systems of more than two or three equations. [^1] The standard implementation of Cramer's rule requires calculating $n+1$ determinants for a system of n equations, each of which has a complexity of $O(n!)$ using basic methods. Cramer's rule can also be [[numerical stability|numerically unstable]] even for 2×2 systems. [^1]

Though it is possible to reduce its complexity to the same as [[./Gaussian elimination|Gaussian elimination]] [^1], it is still not preferred for large systems in practice.

[^1]: [Cramer's rule - Wikipedia](https://en.wikipedia.org/wiki/Cramer%27s_rule)
