---
created: 2024-01-30
modified: 2024-10-05
parent:
  - "[[calculus|calculus]]"
publish: true
tags:
  - math/definitions
  - math/calculus
---
For a multi-input function $f: \mathbb{R}^n \rightarrow \mathbb{R}$, the **critical point** $\mathbf{x}$ of the function is where its [[./multi-variable derivative|derivative]]/[[./gradient|gradient]] is zero or when the derivative/gradient doesn't exist:
$$
\begin{array}{r}
{[D f]=\left[\begin{array}{llll}
\frac{\partial f}{\partial x_1} & \frac{\partial f}{\partial x_2} & \cdots & \frac{\partial f}{\partial x_n}
\end{array}\right]} \\
{\left[\begin{array}{llll}
0 & 0 & \cdots & 0
\end{array}\right]}
\end{array}
$$

Critical point can be view as a generalization of [[extremum|extremum]] for single-variable function, but it does not necessary be an extremum. Instead, it may either be a maximum, minimum, or a [[saddle point|saddle point]].

![[../assets/min max and saddle.png|min max and saddle.png]]

We can use the [[./second derivative test|second derivative test]] to classify critical points.

## Critical point at where the Derivative Doesn't Exist
The classic example of a critical point at where the derivative doesn't exist is $f(x) = |x|$