---
tags:
  - statistics/frequentist
created: 2024-10-07
modified: 2024-10-07
publish: true
---
The **standard error (SE)** of a [[./statistical parameters and estimates|statistic]] is the [[standard deviation|standard deviation]] of its [[sample distribution|sample distribution]] or an estimate of that standard deviation. If the statistic is the [[sample mean and variance|sample mean]], then the SE is called the **standard error of the mean (SEM)**. The standard error is a key ingredient in producing [[./confidence interval|confidence intervals]]. [^1]

## Standard Error of the Sample Mean
For a population with a population standard deviation $\sigma$, if we take independent samples of $n$ observations, the standard error of the sample mean is given by:
$$
\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{ n }}
$$
In practice, the population standard deviation is often unknown. In such cases, the sample standard deviation $s$ is used as an estimate, resulting in the following formula:
$$
\sigma_{\bar{x}} =\frac{s}{\sqrt{ n }}
$$


[^1]: [Standard error - Wikipedia](https://en.wikipedia.org/wiki/Standard_error)