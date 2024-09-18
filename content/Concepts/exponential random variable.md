---
aliases:
  - exponential distribution
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/probability/distribution
  - math/definitions
---

---
# Exponential Random Variable
  $$
  X \sim exp(rate=\lambda)
  $$
## PDF
  $$
  f(x;\lambda) = \begin{cases}
\lambda  e^{-(\lambda x)} & x \ge 0, \\
0 & x < 0.
\end{cases}
  $$
## CDF
$$
   F(x;\lambda) = P(X > x) = \begin{cases}
1-e^{-(\lambda x)} & x \ge 0, \\
0 & x < 0.
\end{cases}
$$

## Expectation and variance

  $E[X] = 1 / \lambda$ and $Var[X] = 1 / \lambda^2$

## Memoryless Property of Exponential Random Variable

Exponential distribution is [[./memoryless property|memoryless]], which means
   $$
   P(X > s + t | X > t) = P(X > s)
 $$