---
parent:
  - "[[hypothesis testing|hypothesis testing]]"
tags:
  - math/statistics/HypothesisTesting
created: 2024-11-12
modified: 2024-11-12
publish: true
---
The **Shapiro-Wilk test** evaluates the [[null hypothesis|null hypothesis]] that a sample comes from a [[./normal distribution|normally distributed]] population.

> [!warning] **Caveat of Shapiro-Wilk Test**
> This test is very sensitive to sample size (for example, small samples will almost always be retained as normal). It is also easy to have [[type I and type II errors|false negative]] for large sample size. Therefore, it is recommended to use this test in conjunction with graphical methods (e.g. [[QQ-plot|QQ-plot]]).