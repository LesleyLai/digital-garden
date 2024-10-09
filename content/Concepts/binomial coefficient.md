---
created: 2023-05-30
modified: 2024-10-09
publish: true
tags:
  - math/probability
  - math/combinatorics
parent:
  - "[[combinatorics|combinatorics]]"
---
For any non-negative integers $k$ and $n$, the **binomial coefficient** $\binom nk$, read as " $n$ choose $k$ ", is the number of subsets of size $k$ for a set of size $n$.

For any $k \le n$, $\binom n k = \frac{n!}{k! (n-k)!}$
For $k > n$, $\binom n k = 0$

## Properties
- Symmetry $\binom nk = \binom n{n-k} \quad \text{for }\ 0\leq k\leq n,$
- [[./Vandermonde's identity|Vandermonde's identity]] ${m+n \choose r}=\sum_{k=0}^r{m \choose k}{n \choose r-k}$

## See Also
- [[./binomial distribution|binomial distribution]]