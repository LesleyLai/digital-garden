---
created: 2023-05-30
modified: 2024-11-12
publish: true
tags:
  - math/probability
  - math/definitions
  - math/statistics
aliases:
  - standard deviation
  - population standard deviation
  - sample standard deviation
  - variance
  - population variance
  - sample variance
  - SD
  - Std Dev
parent:
  - "[[probability MOC|probability MOC]]"
  - "[[statistics|statistics]]"
---
**Variance** measure "how far are the samples from average, on average." It can be defined in term of [[./expectation|expectation]]:

> [!definition]
> Given a random variable $X$,
> $$\operatorname{Var}[X]=\operatorname{E}\left[(X-E[X])^2\right]$$

The **standard deviation** of a distribution is the positive square root of its variance.

## Notations
Here are various notations for standard deviations
- $\operatorname{SD}[X]$ or $\operatorname{Std Dev}[X]$  for the standard deviation of a distribution $X$
- $\sigma$ (sigma) for population standard deviation
- $s$ for sample standard deviation

and standard deviations:
- $\operatorname{Var}[X]$
- $\sigma^2$ and $s^2$ for population and sample variance, respectively

## An Equivalent Definition of Variance
An equivalent way to define variance is the following equation
$$\operatorname{Var}(X)=\operatorname{E}\left[X^2\right]-\operatorname{E}[X]^2$$
> [!derivation]-
> $$
> \begin{align}  
> \operatorname{Var}(X) &= \operatorname{E}\left[(X - \operatorname{E}[X])^2\right] \\[4pt]  
> &= \operatorname{E}\left[X^2 - 2X\operatorname{E}[X] + \operatorname{E}[X]^2\right] \\[4pt]  
> &= \operatorname{E}\left[X^2\right] - 2\operatorname{E}[X]\operatorname{E}[X] + \operatorname{E}[X]^2 & (\text{By linearity of expectation}) \\[4pt]  
> &= \operatorname{E}\left[X^2\right] - 2\operatorname{E}[X]^2 + \operatorname{E}[X]^2 \\[4pt]  
> &= \operatorname{E}\left[X^2 \right] - \operatorname{E}[X]^2  
> \end{align}
> $$
> See [[linearity of expectation|linearity of expectation]]

## Properties of variance
- always non-negative (as it is the square of the standard deviation) ($\operatorname{Var}[X] \ge 0$)
- [[variance is not linear|variance is not linear]] ($\operatorname{Var}[a f(x)] =a^2 \operatorname{Var}[f(x)]$)
- [[law of total variance|law of total variance]] ($\operatorname{Var}[X] = \operatorname{E}[\operatorname{Var}(X\ |\ Y)] + \operatorname{Var}(\operatorname{E}[X\ |\ Y])$)

## Population Variance and Sample Variance
In statistics, the variance of a [[./statistical population|population]] of size $N$ is defined as
$$
\sigma^2 = \frac{1}{N}\sum_{i = 1}^N (x_i - \mu)^2
$$
where
- $x_i$ is the value of the $i$-th element in the population
- $\mu$ is the [[mean|population mean]]


However, we often only have [[sampling (statistics)|samples]]. Given a sample data size $n$, the sample variance is
$$
s^2 = \frac{1}{n - 1}\sum_{i = 1}^n (x_i - \bar{x})^2
$$
where
- $\bar{x}$ is the sample mean

Note the key difference in the denominator: $\frac{1}{n-1}$ for the sample variance versus $\frac{1}{N}$ for the population variance. This distinction is called the [[Bessel's correction|Bessel's correction]].

## Variance for Discrete Random Variables
We can generalize the above definition into a discrete random variable with weight. For a discrete random variable $X$ in [[sample space|sample space]] $S$ with a [[./probability mass function|probability mass function]] $x_1 \mapsto p_1, x_2 \mapsto p_2, \ldots, x_n \mapsto p_n$, the variance is
$$
\operatorname{Var}(X) = \sum_{x_i \in S} p_i (x_i - \operatorname{E}(X))^2
$$
where the [[./expectation|expected value]] $\operatorname{E}(X)$ can be seen as the generalization of [[mean|population mean]] $\mu$ (but weighted by $p_i$):
$$
\operatorname{E}(X) = \sum_{x_i \in S} p_i x_i
$$
Note that we still need to apply the [[Bessel's correction|Bessel's correction]] when we sample from the random variable (e.g. in [[./Monte Carlo methods|Monte Carlo methods]]).

## Variance for Continuous Random Variables
Given a continuous random variable $X$ in sample space $S$ with a [[./probability density function|probability density function]] $f(x)$, the variance can be obtained in two ways:
$$
\begin{align}
\operatorname{Var}(X) &= \int_{x \in S} f(x) \cdot(x-\operatorname{E}(X))^2 \mathrm{~d} x \\
&=\int_{x \in S}\left(f(x) \cdot x^2\right) \mathrm{d} x-\operatorname{E}(X)^2
\end{align}
$$
where
$$
\operatorname{E}(X) = \int_{x \in S} f(x) \cdot x \, dx 
$$

## See Also
- [[./standard error|standard error]]
- [[./variance reduction methods|variance reduction methods]] - methods to reduce variance in the [[./sampling|sampling]] process