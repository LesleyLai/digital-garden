---
parent:
  - "[[hypothesis testing|hypothesis testing]]"
tags:
  - math/statistics/HypothesisTesting
aliases:
  - statistical significance
created: 2024-10-18
modified: 2024-10-23
publish: true
---
In hypothesis testing, **p-value** is a number to weighing up whether the sample is consistent with the [[null hypothesis|null hypothesis]] $H_0$. It can be defined as the probability of observing the [[test statistic|test statistic]] (or something more extreme) under the condition that $H_0$ is true.

A very small p-value indicates that the extreme observed outcome would be very unlikely under the null hypothesis. In practice, the p-value is often judged by a significant level $\alpha$ (typical set as $0.05$ or much lower) where $p \leq \alpha$ is considered **statistical significant**.

The misinterpretation and misuse of p-value and statistical significance is common in scientific literature that it is subjects to major debates in statistics and [[./philosophy of science and metascience|metascience]] communities. For example, in 2016, the American Statistical Association (ASA) mad a formal statement that discusses proper usage and outlines various misconception of the p-value [^1].

## Subsections
- [[./problems of the p-value|problems of the p-value]]
- [[p-hacking|p-hacking]]

## Calculation

The calculation method of p-value depends on the _type_ of statistical test being performed. The process involves a comparison of a [[test statistic|test statistic]] $t$ against the [[./cumulative distribution function|CDF]] of a probability distribution $T$ (decided by the type of the statistical test).
- $p = \Pr(T \geq t \mid H_0)$ for a one-sided right-tail test-statistic distribution (when testing for a value greater than a threshold)
- $p = \Pr(T \leq t \mid H_0)$ for a one-sided left-tail test-statistic distribution (when testing for a value less than a threshold)
- $p = 2\min\{\Pr(T \geq t \mid H_0),\Pr(T \leq t \mid H_0)\}$ for a two-sided test-statistic distribution. If the distribution of $T$ is symmetric about zero, then $p = \Pr(|T| \geq |t| \mid H_0).$ [^2]

## Related
- [[./confidence interval|confidence interval]]
- [[effect size|effect size]]

[^1]: [The ASA Statement on p-Values: Context, Process, and Purpose](https://amstat.tandfonline.com/doi/full/10.1080/00031305.2016.1154108)
[^2]: [p-value - Wikipedia#Definition](https://en.wikipedia.org/wiki/P-value#Definition)