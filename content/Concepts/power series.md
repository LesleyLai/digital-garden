---
parent:
  - "[[series|series]]"
tags:
  - math/sequences_and_series
specializations:
  - "[[./geometric series|geometric series]]"
  - "[[./Taylor series|Taylor series]]"
created: 2024-12-01
modified: 2024-12-01
publish: true
---
A **power series** is a series in the following form
$$
\sum_{n = 0}^\infty c_n (x - a)^n = c_0 + c_1(x - a) + c_2(x - a)^2 + \cdots
$$
where
- $x$ is a variable
- $a$ is a constant, often called the **center** of the series
- $c_n$ are constant coefficients

## Convergence
The [[./convergence of series|convergence]] of a power series depends on the variable $x$, and a power series may converge for some $x$ but diverge for others.

There exists a non-negative number $R$, called the **[[radius of convergence|radius of convergence]]**, such that:
1. The series [[./absolute convergence of series|converges absolutely]] for all $x$ satisfying $|x - a| < R$
2. The series diverges for all $x$ satisfying $|x - a| > R$

The behavior of the series when $|x - a| = R$ depends on the specific series.

The set of all $x$ for which the series converges is called the **interval of convergence**. It's typically an open interval $(a-R, a+R)$, but may include one or both endpoints.

## See Also
- A [[./geometric series|geometric series]] is a special case of power series with $a = 0$ and $c_n = 1$
- The [[Borel's Theorem|Borel's Theorem]] states that every power series is the [[./Taylor series|Taylor series]] of some [[./smoothness|smooth function]]