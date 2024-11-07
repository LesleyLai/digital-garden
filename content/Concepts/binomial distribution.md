---
created: 2024-09-02
modified: 2024-10-21
parent:
  - "[[probability MOC|probability MOC]]"
publish: true
tags:
  - math/probability/distribution
---
The **binomial distribution** is a discrete probability distribution of a number of successes in a sequence of $n$ [[./independence|independent]] experiment, each with a boolean outcome of true (with probability $p$) and false. It is often written as following:

$$
X \sim \text{Bin}(n, p)
$$
## Probability Mass Function
Suppose we have $n$ independent, binary trials, with $P(\text{event}) = p$ at every trail, and $n$ is fixed. The chance that exactly $k$ events occur is
$$
f(k, n, p) = {n \choose k} p^k (1-p)^{n-k}
$$
where $n \choose k$ is the [[./binomial coefficient|binomial coefficient]].