---
aliases:
  - Gaussian distribution
  - bell curve
created: 2023-05-30
modified: 2024-08-19
publish: true
tags:
  - math/probability/distribution
  - math/definitions
---

# Normal Distribution

If a random variable $X$ is normally distributed with mean $\mu$ and the standard deviation $\sigma$, we can express it as
$$
X \sim N(\mu, \sigma^2)
$$

The [[./probability density function|probability density function]] of normal distribution is
$$
 f(x) = \frac{1}{\sigma \sqrt{2\pi} } e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$
See [[./unpack the normal distribution|unpack the normal distribution]] for an intuition of the above equation.

Statistically, [[./68-95-99.7 rule|68%, 95%, and 99.7%]] of the values from a normal distribution lie within one, two, and three standard deviations of the mean:
![[../assets/normal_dist_68_rule.jpg|300]]

Normal distribution can be used to approximate [[./binomial distribution|binomial distribution]] (see [[./central limit theorem|central limit theorem]]).

## CDF of Normal Distribution
The [[./cumulative distribution function|CDF]] of the normal distribution does not have a closed-form analytical solution, so people often calculate it via either via numerical integration on the computer or using a lookup table for the standard normal distribution $Z \sim N(0, 1)$.