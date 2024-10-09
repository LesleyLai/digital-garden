---
created: 2023-05-30
modified: 2024-10-09
publish: true
tags:
  - math/combinatorics
parent:
  - "[[./binomial coefficient|binomial coefficient]]"
aliases:
  - Vandermonde's convolution
---
The **Vandermonde's identity** or **Vandermonde's convolution**, states that the [[./binomial coefficient|binomial coefficient]] is the following property:
$${m+n \choose r}=\sum_{k=0}^r{m \choose k}{n \choose r-k}$$

## Story Proof

Consider a group of $m$ peacocks and $n$ toucans, from which a set of size $r$ birds will be chosen. There are $m + n \choose r$ possibilities for this set of birds. If there are $k$ peacocks in the set, then there must be $r-k$ toucans in the set. The right-hand side of Vandermonde's identity sums up the cases for $k$.

## See Also
- [[./convolution|convolution]]: one way to view the Vandermonde's identity is as the discrete convolution ${m+n \choose r}=\left(a(k) * b(k)\right)_{r}$ where $a(k) = {m \choose k}$ and $b(k) = {n \choose k}$.