---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

#math/probability 

For discrete distributions, the probability mass function is defined as
$$
p_i = p(X_i) = p(X = x_i)
$$
and it sums to one:
$$
\sum_i p(x_i) = 1
$$

The partial sum of PMF is the [[./cumulative distribution function|cumulative distribution function]]:
$$
P(j) = \sum_{i=1}^{j} p_i
$$
where $0 \le P(i) \le 1$