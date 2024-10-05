---
created: 2023-05-30
modified: 2024-08-16
parent:
  - "[[linear algebra|linear algebra]]"
publish: true
tags:
  - math/LinearAlgebra
  - math/definitions
---
A **system of linear equation** is a bunch of equations where the left hand side is a [[linear function|linear function]] and the right hand side is a constant.

A linear system can be written in the format
$$
A \mathbf{x} = \mathbf{b}
$$
where we need to solve $\mathbf{x}$.

## Visualization
For any linear system, there are some good mental models to visualize:

![[../assets/linear_equations.png|linear_equations.png]]

## Solution
Not all linear systems can be solved. A system of linear equations has either
1. no solution, or,
2. exactly one solution
3. an infinite number of solutions

![[../assets/solutions_or_linear_system.png|400]]

Whether the system of linear equations have a solution depends on the numbers of equations versus the number of unknowns. For a system of linear equation $A \mathbf{x} = \mathbf{b}$ where
$$
A=\left(\begin{array}{cccc}
a_{11} & a_{12} & \ldots & a_{1 n} \\
\vdots & \vdots & \vdots & \vdots \\
a_{m 1} & \ldots & \ldots & a_{m n}
\end{array}\right),
\quad \mathbf{x}=\left(\begin{array}{c}
x_1 \\
\vdots \\
x_n
\end{array}\right),
\quad\text{and }
\mathbf{b}=\left(\begin{array}{c}
b_1 \\
\vdots \\
b_m
\end{array}\right),
$$
- $m > n$ (more equations than unknowns), we expect no solution
- $m < n$ (less equations than unknowns), we expect many solutions
- $m = n$, one solution if $A$ is [[./matrix inverse|invertible]]

## Solvers
There are two types of linear solvers: direct and iterative.

A direct solvers find the exact solution in a finite number of steps, without relying on iterative approximation. [[./Gaussian elimination|Gaussian elimination]], [[./LU factorization|LU factorization]], and [[./Cramer's rule|Cramer's rule]] are all considered direct methods. [^1] [^2]

[^1]: [Direct Methods for Solving Linear Systems of Equations](https://johnfoster.pge.utexas.edu/numerical-methods-book/LinearAlgebra_DirectSolvers.html)
[^2]: [ljll.fr/\~frey/cours/UPMC/linear-systems.pdf](https://www.ljll.fr/~frey/cours/UPMC/linear-systems.pdf)