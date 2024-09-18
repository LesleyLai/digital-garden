---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[convergence tests of series|convergence tests of series]]"
publish: true
tags:
  - math/sequences_and_series
  - math/calculus
---

# Comparison Test

Let $\sum_{n=m}^\infty a_n$ and $\sum_{n=m}^\infty b_n$ to be 2 formal series of real numbers, and suppose that $|a_n| < b_n$ for all $n \ge m$.

Then if $\sum_{n=m}^\infty b_n$ convergent, $\sum_{n=m}^\infty a_n$ [[./absolute convergence of series|absolute convergent]], and

$$
\left| \sum_{n=m}^\infty a_n \right| \le \sum_{n=m}^\infty |a_n| \le \sum_{n=m}^\infty b_n
$$

A useful series to compare is the [[./geometric series|geometric series]].