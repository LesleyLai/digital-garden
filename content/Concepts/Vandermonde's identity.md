---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#math/combinatorics"
---
The **Vandermonde's identity** states that the [[./binomial coefficient|binomial coefficient]]

$${m+n \choose r}=\sum_{k=0}^r{m \choose k}{n \choose r-k}$$

## Story Proof

Consider a group of $m$ peacocks and $n$ toucans, from which a set of size $r$ birds will be chosen. There are $m + n \choose r$ possibilities for this set of birds. If there are $k$ peacocks in the set, then there must be $r-k$ toucans in the set. The right-hand side of Vandermonde's identity sums up the cases for $k$.