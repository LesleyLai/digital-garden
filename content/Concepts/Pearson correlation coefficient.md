---
aliases:
  - linear correlation coefficient
  - linear correlation
created: 2024-08-26
modified: 2024-08-29
parent:
  - "[[correlation|correlation]]"
publish: true
tags:
  - statistics/correlation
---
the **Pearson correlation coefficient**, also known as _Pearson's r_, is a correlation coefficient that measures **linear correlation** between two sets of data. [^1]

![[../assets/linear-correlation-coefficient.png|linear-correlation-coefficient.png]]

> [!definition]
> Given two random variables $X$ and $Y$, the Pearson correlation coefficient is often denoted as $\rho_{XY}$ and is defined as
>$$
\rho_{XY} = \frac{\text{Cov}[X, Y]}{\text{stdev}[X]\text{stdev}[Y]}
>$$
>where
> - $\text{Cov}[X, Y]$ is the [[covariance|covariance]] between $X$ and $Y$
> - $\text{stdev}[X]$ and $\text{stdev}[Y]$ are the [[standard deviation|standard deviation]] of $X$ and $Y$

Note that the above ratio is only well-defined when $\text{stdev}[X]$ and $\text{stdev}[Y]$ are both greater than zero. However, it is often assumed that the correlation is 0 when one of the standard deviations is 0 (in which case $Cov[X, Y]$ will also be zero).

[^1]: [Linear correlation | Definition, examples, explanations](https://statlect.com/fundamentals-of-probability/linear-correlation)