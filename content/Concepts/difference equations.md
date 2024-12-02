---
created: 2024-08-27
modified: 2024-12-02
publish: true
tags:
  - math/discrete_mathematics
  - math/DE
aliases:
  - recurrence relation
  - recurrence equation
---
A **recurrence relation** or a **difference equation** is the discrete analog to [[./differential equations|differential equations]].

> [!definition] Definition: First Order Difference Equation
> A first order difference equation is a recursively defined sequence in the form
> $$
> y_{n+1} = f(n, y_{n}) \qquad n = 0, 1, 2
> $$

What makes this first order is that we only need to know the most recent previous value to find the next value. It also has clear parallel to the [[first-order ordinary differential equation|first-order ODEs]].

> [!definition] Definition: K-th Order Difference Equation
> A difference equation of order $k$ ($k \in \mathbb{Z}^+$) has the form of
> $$
> y_{n+1} = f(n, y_{n}, y_{n-1}, \dots, y_{n-k+1}) \qquad n = 0, 1, 2
> $$

## Examples
> [!example]
> $$
> y_{n+1} = 3y_n + 1
> $$
> Sometimes we use a different notation:
> $$
> y[n + 1] = 3y[n] + 1
> $$

> [!example] Example: Pascal's rule
> > See: [[./Pascal's rule|Pascal's rule]]
> 
> The [[./binomial coefficient|binomial coefficient]] can be described by the following recurrence relation
> $$
> {n \choose k} = {n - 1 \choose k - 1} + {n - 1 \choose k}
> $$

## Linear Difference Equation
In a [[linear difference equation|linear difference equation]], the $n$th term is equated to a [[linear function|linear function]] of $k$ previous terms. A famous example is the [[Fibonacci sequence|Fibonacci numbers]]:
$$
f[n] = f[n - 1] + f[n - 2]
$$
with initial conditions $f[0] = 1$ and $f[1] = 1$. This is a second-order linear homogeneous difference equation.

## Modeling Discrete Systems
Difference equations are great ways to model [[./discrete signals and systems|discrete systems]] as they are mathematically concise and precise, and they are also convenient for step-by-step analysis. However, deriving a closed-form solution from difference equations is often challenging, and sometimes a more imperative description like the [[./block diagram|block diagram]] may be more preferable to describe a system.