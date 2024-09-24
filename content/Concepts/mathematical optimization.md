---
aliases:
  - numerical optimization
  - optimization problems
created: 2024-01-19
modified: 2024-05-10
parent:
  - "[[calculus|calculus]]"
publish: true
tags:
  - math/calculus
---
# Mathematical Optimization
It is natural human desire to find the best solution among all possibilities,
though it is usually subject to *certain constraints*.

## Types of Optimization Problems
Optimization problems can be either *continuous* or *discrete*.
### Discrete
  - domain is a discrete set
  - Without clever strategies, we need $O(\exp(n))$ amount of time to solve it
    - sometimes clever strategy (e.g. [[MST|MST]])
    - more often, [[NP-hard|NP-hard]] (e.g. [[travelling salesman problem|travelling salesman problem]])
### Continuous
  - domain is continuous
  - still many NP-hard problems, but also large classes of "easy problems" (e.g. [[./convex optimization|convex optimization]])

## Standard Form
We can formulate most continuous optimization problems this way:
given functions  $f_i: \mathbb{R}^n \rightarrow \mathbb{R}, i = 0, \cdots, m$
$$
    \begin{equation*}
    \begin{aligned}
    \text { find } \min _{x \in \mathbb{R}^n} & f_0(x) \\
    \text { subject to } & f_i(x) \leq b_i, i=1, \ldots, m
    \end{aligned}
    \end{equation*}
$$
The _optimal solution_ $x^*$ has smallest value of $f_0$ among all feasible $x$.

We can usually reduce other problems into this form.
For example, if we have equality constraint, we can just use two constraints ($f_i(x) \le c, f_i(x) \ge c$)

Note here: $f_0$ is the function to minimize and other $f$ are used for constraints.
For example:
$$
\begin{equation*}
\begin{aligned}
\min _{x \in \mathbb{R}^2} & x_1^2-x_2^2 \\
\text { s.t. } & x_1^2+x_2^2-1 \leq 0
\end{aligned}
\end{equation*}
$$
![[../assets/optimization example.png|200]]

## Methods to Solve Optimization Problems
- finding [[./derivative|derivatives]] and performing [[./second derivative test|second derivative test]]
- [[./Lagrange multiplier|Lagrange multiplier]]
- [[gradient descent|gradient descent]]

## Local Vs Global Minima
_Global_ minimum is the absolute best among all possibilities,
and the _local_ minimum is best "among immediate neighbors".
Depending on the problem, sometimes local minima is a good enough answer.
For example, a lot of times, structure in nature is _local_ minimum (e.g. protein structure).
Another example is machine learning (which is often local minimum)

## Existence & Uniqueness of Minimizers
The minimizer may not exist. And if it exist, it may not be unique.
For example, the problem above does not have a unique minima.

### Feasibility
Consider
$$
\begin{equation*}
\begin{aligned}
\min _{x \in \mathbb{R}^n} \quad & 0 \\
\text{ subject to } & f_i(x) \leq b_i, i=1, \ldots, m
\end{aligned}
\end{equation*}
$$

The value of objective doesn't depend on $x$ (all feasible solutions are equally good).
But it can totally happen that where no points can satisfy this constraint (no _feasible_ points)

### Even Bounded below is not Enough
Consider
$$\min _{x \in \mathbb{R}} e^{-x}$$
It is bounded at $f = 0$. No matter how big $x$ is, we never achieve the bound.

### Existence
#### Sufficient Conditions for a Solution to Exist
- [[./extreme value theorem|extreme value theorem]]: continuous objective & compact domain
- [[coercivity|coercivity]]: objective goes to $+\infty$ as we travel (far) in any direction

#### Optimality Conditions
- In general, our objective is $f_0: R^n \rightarrow R$
- How do we test for a local minimum?
  - In 1D we can use [[derivative test|derivative test]] ($f_0'(x^*) = 0$ and $f_0''(x^*) > 0$)
- 1st derivative becomes [[./gradient|gradient]] ($\Delta f$); 2nd derivative becomes [[./Hessian|Hessian]] ($\Delta^2 f$)

The optimal condition is
$$
  \begin{aligned}
  \Delta f_0(x^*) &= 0 \\
  \Delta^2 f_0 (x^*) &\succcurlyeq 0
  \end{aligned}
$$
  Note here the $\succcurlyeq$ symbol means [[./definite matrix|positive-semidefinite]] ( $u^TAu \ge 0 \text{ for all } u$)

#### With Constraints
When we have constraints, we will probably find a minimizer that is not a optimality condition (since optimality conditions may not satisfy constraints).

In general, any (local or global) minimizer must _at least_ satisfy the [[./Karush-Kuhn-Tucker conditions|Karush-Kuhn-Tucker conditions]].