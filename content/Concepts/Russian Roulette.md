---
parent:
  - "[[./Monte Carlo integration|Monte Carlo integration]]"
tags:
  - "#math/monte_carlo"
created: 2024-11-26
modified: 2024-11-26
publish: true
---
**Russian Roulette** is a potential-lethal game where participants take turns firing a revolver loaded with a single bullet at themselves.

![[../assets/Russian Roulette.webp|250]]

In the context of [[./Monte Carlo integration|Monte Carlo integration]], particularly in [[path tracing|path tracing]], **Russian Roulette** refers to a probabilistic technique used to randomly terminate a ray's path based on its [[./probability density function|PDF]]. This method helps optimize computations by skipping rays with negligible contribution, such as when the integrand's value is zero or very low.

Despite the termination of some paths, Russian Roulette ensures that the estimator remains unbiased by appropriately weighting the contributions of the remaining paths based on their survival probabilities.

See [monte carlo - Is Russian Roulette really the answer? - Computer Graphics Stack Exchange](https://computergraphics.stackexchange.com/questions/2316/is-russian-roulette-really-the-answer)