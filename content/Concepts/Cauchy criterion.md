---
created: 2023-05-30
modified: 2024-03-14
publish: true
parent:
  - "[[convergence tests of series|convergence tests of series]]"
tags:
  - math/sequences_and_series
  - math/calculus
---
Let $(a_N)^{\infty}_{N=1}$ be the decreasing [[./sequences|sequence]] of non-negative real numbers, ($a_n \ge 0$ and $a_{n+1} < a_n$ for all $n \ge 1$), then the series $\sum_{n=1}^\infty a_n$ converges if and only if the series
$$
\sum_{n=0}^\infty 2^k a_{2^k} = a_1 + 2 a_2 + 4 a_4 + 8 a_8 + \cdots
$$
converges.