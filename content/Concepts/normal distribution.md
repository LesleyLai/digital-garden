---
aliases:
  - Gaussian distribution
  - bell curve
created: 2023-05-30
modified: 2024-11-13
publish: true
tags:
  - math/probability/distribution
  - math/definitions
---
If a random variable $X$ is normally distributed with [[mean|mean]] $\mu$ and the [[./variance and standard deviation|standard deviation]] $\sigma$, we can express it as
$$
X \sim N(\mu, \sigma^2)
$$
![[../assets/unpack normal distribution.webp|433]]

## Equations
The [[./probability density function|probability density function]] of normal distribution is
$$
 f(x) = \frac{1}{\sigma \sqrt{2\pi} } e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$
See [[./unpack the normal distribution|unpack the normal distribution]] for an intuition of the above equation.

The [[./cumulative distribution function|CDF]] of the normal distribution does not have a closed-form analytical solution, so people often calculate it via either via numerical integration on the computer or using a lookup table for the standard normal distribution $Z \sim N(0, 1)$.

## Subtopics
- [[./68-95-99.7 rule|68-95-99.7 rule]]
- [[./normal approximation|normal approximation]]
- [[./central limit theorem|central limit theorem]]
