---
created: 2023-05-30
modified: 2024-08-25
publish: true
tags:
  - math/probability
  - math/definitions
  - math/statistics
---
In probability and statistics, **variance** measure "how far are the samples from average, on average." It can be defined in term of [[./expectation|expectation]]:

> [!definition]
> Given a random variable $X$,
> $$Var[X]=E\left[(X-E[X])^2\right]$$

## An Equivalent Definition
An equivalent way to define variant is the following equation
$$\operatorname{Var}(X)=E\left[X^2\right]-E[X]^2$$
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

## Variance for Discrete Random Variable
This definition applies to both discrete and continuous random variables. For a discrete random variable $X$, where each outcome $x_i$ has a corresponding [[./probability mass function|probability]] $p_i$, we can get the variance as:
$$
\operatorname{Var}(X)=\frac{1}{n}\sum_{i = 1}^n p_i \cdot (x_i - E[X])^2
$$
(Note that the above is the "population variant." Use $\frac{1}{n - 1}$ for sample variant. See [[Bessel's correction|population variance vs sample variance]]).

## Properties of variance
- after the square, everything is positive so the different terms of variance won't cancel out each other
- bigger differences has bigger influence on the result

## Variance is not Linear

Unlike [[linearity of expectation|expectation]], variance is not linear:
$$
\begin{aligned}
V[a f(x)] & =a^2 V[f(x)]
\end{aligned}
$$
However, the sum of variances of multiple sequences is equal to variance of sums of them:
$$
\sum_i V\left[f\left(X_i\right)\right]=V\left[\sum_i f\left(X_i\right)\right]
$$