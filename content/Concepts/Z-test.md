---
parent:
  - "[[hypothesis testing|hypothesis test]]"
tags:
  - math/statistics/HypothesisTesting
created: 2024-11-11
modified: 2024-11-11
aliases:
  - proportion test
publish: true
---
A **Z-test** is a statistical hypothesis test in which the [[test statistic|test statistic]] can be approximated by a [[./normal distribution|normal distribution]] under the [[null hypothesis|null hypothesis]].

The name "Z-test" comes from the standard normal distribution, which is also known as Z-distribution.

We can use Z-test for proportion or population mean.

## Key Assumptions
- The samples are [[./independence|independent]]
- The population standard deviation is known
- The population closely follows a [[./normal distribution|normal distribution]]

The sample size also needs to be large enough (e.g. $n > 30$) (see [[./central limit theorem|central limit theorem]]).

## One Sample Proportion Test
A proportion test determine if the proportion of a certain outcome in a sample differs significantly from an expected proportion. We can either use [[Binomial test|Binomial test]], which is more accurate, especially for small sample size, or z-test (which is a normal approximation)

For the z-test, the [[test statistic|test statistic]] is
$$
z= \frac{\hat{p}-p_0}{\text{standard error}} = \frac{\hat{p}-p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}}
$$
where
- $n$ is the sample size
- $\hat{p}$ is the observed proportion
- $p_0$ is the null hypothesis proportion (i.e. when $H_0: p = p_0$)
- The [[./standard error|standard error]] is $\sqrt{\frac{p_0(1-p_0)}{n}}$, as the population standard deviation is computed by $\sqrt{ p_0(1-p_0) }$

> [!example]+ Example: A random sample found 13,173 boys were born among 25,468 newborn children. The sample proportion of boys was 0.5172. Is this sample evidence that the birth of boys is more common than the birth of girls in the entire population?
> Here, we want to test $H_0: p=0.5, H_A: p \neq 0.5$
> The test statistics is
> $$
> \begin{align} z &=\frac{\hat{p}-p_o}{\sqrt{\frac{p_0(1-p_0)}{n}}}\\
> &=\frac{0.5172-0.5}{\sqrt{\frac{0.5(1-0.5)}{25468}}}\\
> &= 5.49 \end{align}
> $$
> We are performing a [[one-tailed and two-tailed tests|one-tailed test]] and $z > 0$, so $p = P(Z \ge 5.49) = 1 - \Phi(5.49) \approx 2 \cdot 10^{-8}$.
> 
> ![[../assets/one sample proportion test p-value.webp|346]]
> 
> Based on the very small p-value, we can conclude that this example is an evidence that baby boys are more common than girls. [^1]

## Z-Test for Mean

To perform a Z-test for a population mean, the population standard deviation must be known from a prior large-sample study. Unlike tests for proportions, it is impossible to calculate the population standard deviation directly. In practice, this information on population mean is often unavailable, and [[Student's T-test|Student's T-test]] is often a better alternative.

The [[test statistic|test statistic]] is very similar to the test-statistic of the proportion test, though we need to know the population standard deviation:
$$
z= \frac{\bar{x}-\mu}{\text{standard error}} = \frac{\bar{x}-\mu}{\sigma_{\text{pop}}/\sqrt{ n }}
$$
where
- $\bar{x}$ is the observed [[mean|sample mean]]
- $\mu$ is the expected [[mean|population mean]]
- $\sigma_{\text{pop}}$ is the **population** standard deviation

## See Also
- [[Binomial test|Binomial test]] is more accurate to test proportion for small sample sizes
- [[Student's T-test|Student's T-test]] is more appropriate for testing mean when the population standard deviation is not known or when the sample size is small
- [[./problems of the p-value|problems of the p-value]]

[^1]: [S.6 Test of Proportion | STAT ONLINE](https://online.stat.psu.edu/statprogram/reviews/statistical-concepts/proportions)