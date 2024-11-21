---
created: 2024-08-27
modified: 2024-11-19
publish: true
tags:
  - math/discrete_mathematics
  - math/DifferentialEquations
aliases:
  - recurrence relation
  - recurrence equation
---
A **recurrence relation** or a **difference equation** is the discrete analog to [[./differential equations|differential equations]]. They are great ways to model [[./discrete signals and systems|discrete systems]].

> [!definition] Definition: First Order Difference Equation
> A first order difference equation is a recursively defined sequence in the form
> $$
> y_{n+1} = f(n, y_{n}) \qquad n = 0, 1, 2
> $$

What makes this first order is that we only need to know the most recent previous value to find the next value. It also has clear parallel to the [[first-order ordinary differential equation|first-order ODEs]].

> [!example]
> $$
> y_{n+1} = 3y_n + 1
> $$
> Sometimes we use a different notation:
> $$
> y[n + 1] = 3y[n] + 1
> $$

> [!example] Example: The Fibonacci sequence
> The [[Fibonacci sequence|Fibonacci sequence]] can be described as
> $$
> f[n] = f[n - 1] + f[n - 2]
> $$
> with initial conditions $f[0] = 1$ and $f[1] = 1$

> [!example] Example: Pascal's rule
> > See: [[./Pascal's rule|Pascal's rule]]
> 
> The [[./binomial coefficient|binomial coefficient]] can be described by the following recurrence relation
> $$
> {n \choose k} = {n - 1 \choose k - 1} + {n - 1 \choose k}
> $$

