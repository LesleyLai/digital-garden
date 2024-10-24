---
created: 2023-05-30
modified: 2024-10-24
publish: true
tags:
  - computing/algorithms/Randomized
  - math/monte_carlo
  - math/numerical
parent:
  - "[[./Monte Carlo methods|Monte Carlo methods]]"
---
**Monte Carlo integration** uses [[./Monte Carlo methods|Monte Carlo methods]] to perform [[./numerical integration|numerical integration]]. With Monte Carlo integration, we estimate value of integral using random sampling of function
- Value of estimate depends on [[sampling (statistics)|random sample]] used
- But algorithm gives the correct value of integral "on average"

Since Monte Carlo Integration only requires function to be evaluated at random points on its domain, it is applicable to functions with [[./continuous functions|discontinuities]], and functions that are impossible to integrate directly.

Another property of Monte Carlo is that *error* of estimate is *independent of the dimensionality* of the integrand (no [[curse of dimensionality|curse of dimensionality]]). This property makes Monte Carlo the only practical numerical integration algorithm for high-dimensional integrals. The error only depends on the number of random samples used, and it decreases at a rate of $O(\sqrt{N})$ in the number of samples.

## Improve Efficiency
- [[./variance reduction methods|variance reduction methods]]
  - [[stratified sampling|stratified sampling]]
  - [[./importance sampling|importance sampling]]
  - [[multiple importance sampling|multiple importance sampling]]
- [[Russian Roulette|Russian Roulette]]