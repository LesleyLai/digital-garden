---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/probability
---
We can calculate sum of random variables by using [[./moment generating functions|moment generating functions]].

## The Sum of Independent Poissons is Poisson
$$
   X_{1}, X_{2}, \ldots, X_{n} \stackrel{i i d}{\sim} \operatorname{Poisson}(\lambda) \Rightarrow \sum_{i=1}^{n} X_{i} \sim \operatorname{Poisson}(n \lambda)
$$
and more generally:
$X_{1}, X_{2}, \ldots, X_{n}$ independent with $X_{i} \sim \operatorname{Poisson}\left(\lambda_{i}\right)$ implies $$
\sum_{i=1}^{n} X_{i} \sim \operatorname{Poisson}\left(\sum_{i=1}^{n} \lambda_{i}\right)
$$
## The Sum of [[[independent and identically distributed random variables|iid]] [[exponential random variable|exponentials]] is [[gamma random variable|gamma]]:
$$
X_{1}, X_{2}, \ldots, X_{n} \stackrel{i i d}{\sim} \exp (\text { rate }=\lambda) \Rightarrow \sum_{i=1}^{n} X_{i} \sim \Gamma(n, \lambda)
$$
## The Sum of Iid Gammas is Gamma
   $$
   X_{1}, X_{2}, \ldots, X_{n} \stackrel{i i d}{\sim} \Gamma(\alpha, \beta) \Rightarrow \sum_{i=1}^{n} X_{i} \sim \Gamma(n \alpha, \beta) .
   $$