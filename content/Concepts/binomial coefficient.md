---
created: 2023-05-30
modified: 2024-11-19
publish: true
tags:
  - math/probability
  - math/combinatorics
parent:
  - "[[combinatorics|combinatorics]]"
---
For any non-negative integers $k$ and $n$, the **binomial coefficient** $\binom nk$, read as " $n$ choose $k$ ", is the number of subsets of size $k$ for a set of size $n$.

For any $k \le n$, $\binom n k = \frac{n!}{k! (n-k)!}$ and for $k > n$, $\binom n k = 0$

## Properties
- Symmetry $\binom nk = \binom n{n-k} \quad \text{for }\ 0\leq k\leq n,$
- [[./Pascal's rule|Pascal's rule]]: ${n \choose k} = {n - 1 \choose k - 1} + {n - 1 \choose k}$
- [[./Vandermonde's identity|Vandermonde's identity]] ${m+n \choose r}=\sum_{k=0}^r{m \choose k}{n \choose r-k}$

## See Also
- [[./binomial distribution|binomial distribution]]