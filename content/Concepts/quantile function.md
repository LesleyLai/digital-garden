---
parent:
  - "[[probability|probability]]"
  - "[[statistics|statistics]]"
tags:
  - math/probability
created: 2024-09-23
modified: 2024-09-23
publish: true
aliases:
  - percentile function
  - percent-point function
  - inverse cumulative distribution function
  - inverse distribution function
---
the **quantile function** (after [[quantile|quantile]]) outputs the value of a [[./random variable|random variable]] such that its probability is less than or equal to an input probability value. It can be view as the inverse of the [[./cumulative distribution function|cumulative distribution function]].

It is also called the **percentile function** (after [[percentile|percentile]]), **percent-point function**, **inverse cumulative distribution function** or **inverse distribution function**.

Given a random variable $X$ and $P(X \le x) = p$, the CDF finds $p$ given $x$ and the quantile function finds $x$ given $p$. In other word, if we have a CDF
$$
F_X(x) := P(X \le x) = p
$$
The quantile function will be
$$
Q(p) = F_X^{-1}(x)
$$
[^1]

Graphically, we can understand the quantile function as _given an area $p$, what is the value $q$ such that the CDF is equal to that area_.
![[../qnorm.png|qnorm.png]]

## Related
- [[./inverse transform sampling|inverse transform sampling]] - Using quantile function to sample numbers from a distribution

[^1]: [Quantile function - Wikipedia](https://en.wikipedia.org/wiki/Quantile_function)