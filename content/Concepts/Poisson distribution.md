---
Aliases:
  - Poisson random variable
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# Poisson Distribution
A discrete random variable $X$ is $\text{Poisson}(\lambda)$ for $\lambda > 0$ when the PMF
$$
P(X = x) = \frac{e^{-\lambda} \lambda^x}{x!}, \quad x = 0, 1, 2, \cdots
$$

## Expectation and Variance
Expectation:
$$
E[X]  = \sum_x \, x \, P(X = x) = \lambda
$$
Variance:
$$
\text{Var}[X] = \lambda
$$

## Properties
- [[./sum of random variable#|the sum of Poisson random variables is Poisson]]

---
tags: #math/probability/distribution #math/definitions