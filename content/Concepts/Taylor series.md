---
aliases:
  - Taylor expand
  - Taylor expansion
  - Taylor approximation
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[series|series]]"
  - "[[calculus|calculus]]"
publish: true
specializations:
  - "[[linearization|linear approximation]]"
  - "[[quadratic approximation|quadratic approximation]]"
tags:
  - math/calculus
  - math/sequences_and_series
---
For $f: \mathbb{R} \rightarrow \mathbb{R}$, the **Taylor series** at around $x = a$ is
$$
f(x) = \sum_{i=0}^{\infty} \left. \frac{1}{i!} \frac{d^i f}{dx^i} \right|_{x = a} (x - a)^i = f(a) + f'(a)(x - a) + \frac{1}{2}f''(a)(x - a)^2 + \dots
$$
The Taylor series is a polynomial approximation of a function, where the polynomial has an increasing number of terms. The first two terms of the Taylor series are the same as the [[linearization|linearization]] of the function.

The Taylor series converges within a specific [[radius of convergence|radius of convergence]], which is a number $R$ where the series will converge for $|x - a| < R$.

## For Multi-variable Functions
See: [[./Taylor series for multi-variable functions|Taylor series for multi-variable functions]]