---
parent:
  - "[[numerical analysis|numerical analysis]]"
  - "[[algorithms|algorithms]]"
tags:
  - math/monte_carlo
  - "#computing/algorithms/Randomized"
aliases:
  - Monte Carlo simulation
  - Monte Carlo experiments
  - Monte Carlo algorithms
created: 2024-10-08
modified: 2024-10-24
publish: true
---
**Monte Carlo methods** are a class of algorithms that uses random [[sampling (statistics)|samples]] to obtain numerical result. Some common tasks that can be solved by Monte Carlo method includes [[./numerical integration|numerical integration]].

In the context of algorithms, **Monte Carlo algorithm** is a randomized algorithm that produces approximation and relies on the [[./law of large numbers|law of large numbers]] and [[./central limit theorem|central limit theorem]] to converge to a reasonable result as the sample count increases. This contrasts with [[Las Vegas algorithms|Las Vegas algorithms]], which always produce deterministic results but may have none-deterministic runtime.

## Sub Topics
- [[./Monte Carlo integration|Monte Carlo integration]]
- [[./variance reduction methods|variance reduction methods]]
- [[pseudo-random number sampling|pseudo-random number sampling]]