---
parent:
  - "[[hypothesis testing|hypothesis testing]]"
tags:
  - math/statistics/HypothesisTesting
aliases:
  - T-test
  - paired T-test
created: 2024-10-10
modified: 2024-11-12
publish: true
---
The **T-test** allows us to investigate differences in [[mean|means]], either between groups or compared to a pre-specified amount.

Compare to the [[./Z-test|Z-test]] (which uses a normal distribution), the t-test tests the [[test statistic|test statistic]] against the [[./Student's t-distribution|Student's t-distribution]]. The Z-test also requires a known [[./variance and standard deviation|population standard deviation]], so the t-test can be more appropriate when the population standard deviation is unknown and/or the sample size is small.

## One-Sample T-test
The **one-sample T-test** tests the mean against a specific amount. A.k.a, we have a [[null hypothesis|null hypothesis]] of $H_0: \mu = c$ (where $c$ is a constant).

The test statistic is very similar to the test statistic of a [[./Z-test#Z-Test for Mean|Z-test for mean]], though we use sample standard deviation rather than the population standard deviation:
$$
t= \frac{\bar{x}-\mu}{\text{standard error}} = \frac{\bar{x}-\mu}{s/\sqrt{ n }}
$$
where
- $\bar{x}$ is the observed [[mean|sample mean]]
- $\mu$ is the expected [[mean|population mean]]
- $s$ is the **sample** standard deviation

The [[degrees of freedom (statistics)|degrees of freedom]] of the t-distribution for one-sample test is depends on the sample size ($n - 1$).

## Paired T-test
see: [[paired difference test|paired difference test]]

A **paired t-test** is used when two samples are dependent (e.g., measurements from the same individuals taken at two different times). It then compares the means of the difference of these paired measurements.

The paired T-test relaxed the independence assumption, but it still requires that the
- population differences follows a [[./normal distribution|bell curve]] distribution
- Each pair is independent

The test statistics is essentially the same as the one-sample version, though it is calculated on the differences between paired observations:
$$
t= \frac{\bar{x}_1-\bar{x}_2}{\text{standard error}} = \frac{\bar{x}_1-\bar{x}_2}{s/\sqrt{ n }}
$$
where
- $s$ is the standard deviation of $x_1 - x_2$

## Independent Two-Sample T-test
An **independent two-sample t-test** differs from a paired t-test in that it assumes independence between the two groups being compared. It also assumes that both populations have equal [[./variance and standard deviation|spread]], unless a modification (like [[Welch's t-test|Welch's t-test]]) is used.

The test statistics is
$$
t = \frac{\bar{x}_1-\bar{x}_2}{\text{standard error}} = \frac{\bar{x}_1-\bar{x}_2}{\sqrt{ s_p^2 \left( \frac{1}{n_1} + \frac{1}{n_2} \right) }}
$$
where
- $s_p$ is the [[pooled variance|pooled standard deviation]] where $s_p^2 = \frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2}$
- $s_1$ and $s_2$ are the sample standard deviations
- $n_1$ and $n_2$ are the sample sizes

The [[degrees of freedom (statistics)|degrees of freedom]] of two-sample T-test is $n_1 + n_2 - 2$.

## Checking Assumptions
Here are the check for various assumptions in different flavor of T-tests:
- **independence**: There is no direct statistical test to verify independence. We need to reason about the experiment design and data collection.
- **equal spread (variance)**
  - We can visualize with [[./boxplot|boxplot]] or [[histogram|histogram]]
  - We can use a statistical test like the [[Levene's test|Levene's test]] to compute variance
  - If the assumption is not met, we can use the [[Welch's t-test|Welch's t-test]]
- **normality**
  - We can visualize with [[./boxplot|boxplot]] (check outliers) and [[histogram|histogram]], though [[QQ-plot|QQ-plots]] is the most effective visualization
  - We can use a statistical test such as the [[./Shapiro-Wilk Test|Shapiro-Wilk Test]] for normality
  - The normality assumption becomes less critical with larger sample sizes due to the [[./central limit theorem|central limit theorem]]

## See Also
- [[./Z-test|Z-test]]
- [[./problems of the p-value|problems of the p-value]]