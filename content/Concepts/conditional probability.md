---
aliases:
  - conditional probability density function
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/probability
---

# Conditional Probability
**Conditional probability** is the [[./probability|chance]] that a certain [[event (probability)|event]] occurs, given another event has occurred.

It is defined as the [[joint probability|joint probability]] divided by the prior probability:
$$
P(A|B) = \frac{P(A \cap B)}{P(B)}
$$

## Conditional Distribution
Given two [[joint probability|joint]] random variable $X$ and $Y$, the conditional probability of $Y$ given $X$ is the probability of $Y$ when we fix the value of $X$

### Conditional Discrete Distributions
$$
p_{Y \mid X}(y \mid x) = P(Y=y \mid X=x)=\frac{P(\{X=x\} \cap\{Y=y\})}{P(X=x)}
$$
### Conditional Continuous Distributions

The PDF of a conditional continuous distributions is
$$
f_{Y \mid X}(y \mid x)=\frac{f_{X, Y}(x, y)}{f_X(x)}
$$
where $f_{X, Y}(x, y)$ is the [[joint probability|joint density function]] and $f_X(x)$ is the [[./marginal probability|marginal density function]] of $X$.

## See also
- [[independent random variables|independent random variables]]
- [[Bayes' theorem|Bayes' theorem]]