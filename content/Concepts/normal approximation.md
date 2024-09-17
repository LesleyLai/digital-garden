---
created: 2024-09-15
modified: 2024-09-17
parent:
  - "[[./central limit theorem|central limit theorem]]"
publish: true
tags:
  - math/probability
---
# Normal Approximation

By the [[./central limit theorem|central limit theorem]], the sampling distribution of averages or proportions from a large number of independent trials approximately follows the [[./normal distribution|normal distribution]]. The expectation of a sample proportion or average is the corresponding population value.

The [[standard deviation|standard deviation]] of the sample mean is the [[standard error|standard error]]:
$$
\sigma_{x} = \frac{\text{population standard deviation}}{\sqrt{ n }} = \frac{\sigma}{\sqrt{ n }}
$$

The speed at which random variables converge to a normal distribution depends on their original distribution:
- More skewed distributions require a larger number of samples.
- A common rule of thumb is that at least 30 samples are needed for approximation by a normal distribution, assuming the distribution is relatively symmetric and free of significant outliers.

> [!example] Example: If we replicate the experiment of tossing a fair coin 10000 times, how to approximate the sum of the result (H = 1, T = 0) as a normal distribution?
> The mean population is $0.5$, and the population standard deviation $\frac{((1 - 0.5))^2 + ((0 - 0.5))^2}{2} = 0.5$.
> The sample sum is  is $0.5 * 10000 = 5000$, and the standard deviation of sample sum is $\frac{0.5}{\sqrt{ 10000 }} * 10000 = 50$. Thus, the distribution we have is $N(5000, 50)$

To approximate discrete random variables via normal distribution, we need to apply [[./continuity correction|continuity correction]].
## Sample Size Vs Replicates
It is important to distinguish between the effect of sample size $n$ and replicates $N$

Consider a skewed distribution. Note that increasing the replicates down column 1 will approach the original distribution, **NOT** the Normal curve. However, increasing the sample size (going across the rows) approaches the Normal curve.

![[../sample size vs replicates.png|sample size vs replicates.png]]