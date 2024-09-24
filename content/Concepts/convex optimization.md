---
created: 2024-01-25
modified: 2024-03-14
parent:
  - "[[./mathematical optimization|optimization]]"
publish: true
tags:
  - math/optimization/convex
---
Convex problems are a special class of [[./mathematical optimization|optimization]] problems that are almost always "easy" to solve (polynomial-time).

A problem is _convex_ if it has a [[convex domain|convex domain]] and [[convex objective|convex objective]]

![[../assets/2022-10-30_11-04-39_convex_criteria.png|600]]

Convex problems has the following nice properties:
- can make guarantees about solution (always the best)
- doesn't depend on initialization (strong convexity) (we can start at whatever random guess)
- often quite efficient

## Convex Quadratic Objectives & Linear Systems
It is an often problem in Computer Graphics, for example, in [[quadric error simplification|quadric error simplification]].

It can be expressed via [[./definite matrix|positive-semidefinite]] (PSD) matrix A:
$$
f_0(x)=\frac{1}{2} x^T A x-x^T b, A \succeq 0
$$
By differentiating the above function, we get
$$
\begin{aligned}
Ax &= b \quad& \text{1st-order optimality condition} \\
A &\succeq 0 & \text{2nd-order optimality condition}
\end{aligned}
$$
The 2nd-order condition is satisfied by definition, so we just need to solve a [[./system of linear equation|system of linear equation]]!

Unfortunately, most problems are not that clean (and often have constraints),
so we need to solve them by [[./descent methods|descent methods]].