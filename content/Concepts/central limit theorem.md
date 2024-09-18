---
created: 2023-05-30
modified: 2024-09-15
parent:
  - "[[probability MOC|probability MOC]]"
publish: true
tags:
  - math/probability
  - math/theorem
---
The **central limit theorem** states that the sum of N [[iid|iid]] random variables $\sum_{1}^N X_{N}$ will look more and more like a [[./normal distribution|bell curve]] $N\left( \mu, \frac{\sigma^2}{n} \right)$ when $N \rightarrow \infty$ even if $X$s themselves are not normally distributed.

> [!theorem] Central Limit Theorem
> $$\lim_{N \rightarrow \infty}P(a < \frac{\sum_{1}^N X_{N} - N \cdot \mu}{\sigma \cdot \sqrt{ N }} < b) = \int_a^b \frac{1}{\sqrt{2 \pi}} e^{-x^2 / 2} d x$$
> under the assumptions that
> 1. Each $X_i$ is [[./independent and identically distributed random variables|iid]] (independent and from the same distribution)
> 2. The [[./variance|variance]] is finite $0 < Var[X_i] < \infty$ [^1]

As a result of the central limit theorem, we can [[./normal approximation|approximate discrete distributions as a normal distribution]].

## References
- [[But what is the Central Limit Theorem|But what is the Central Limit Theorem]]

[^1]: In certain continuous distributions, the variance can diverge into infinity