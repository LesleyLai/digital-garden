---
aliases:
  - expected value
tags:
  - math/probability
  - math/definitions
parent:
  - "[[probability MOC|probability MOC]]"
created: 2023-05-30
modified: 2024-10-07
publish: true
---
The **expectation** of a function $f(x)$ with respect to a probability distribution $p(x)$ is denoted as $E_p[f(x)]$. It represents the [[weighted average|weighted average]] value of $f(x)$ over the distribution $p(x)$. Often, the subscript $p$ is omitted when the distribution is clear from context.

For a discrete random variable $X$, the expectation is defined as the probability-weighted sum of all possible values in the random variable's [[./support (mathematics)|support]],
$$
E[X] = \sum_{x \in X} x P(X = x)
$$

For continuous random variables, the expectation is defined as the integral of the product of the function and the [[./probability density function|probability density function]] over the entire support of the random variable:
$$
E[X] = \int_{\Omega} x f_X(x) \, dx 
$$
## Properties
- [[linearity of expectation|linearity]]: $aE[X] + bE[Y] = E[aX + bY]$

## Subtopics
- [[./Wald's equation|Wald's equation]]