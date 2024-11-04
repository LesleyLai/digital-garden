---
created: 2024-08-27
modified: 2024-09-01
publish: true
tags:
  - math/discrete_mathematics
  - math/DifferentialEquations
aliases:
  - recurrence relation
  - recurrence equation
---
The **difference equation** is the discrete analog to [[./differential equations|differential equations]]. They are great ways to model [[./discrete signals and systems|discrete systems]].

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