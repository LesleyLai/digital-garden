---
tags:
  - computer/R
parent:
  - "[[R language|R]]"
created: 2024-09-23
modified: 2024-09-23
publish: true
---
## Normal Distribution
- `dnorm(x, mean = 0, sd = 1)`: [[./probability density function|PDF]] $p(x)$
- `pnorm(x, mean = 0, sd = 1, lower.tail = TRUE)` [[./cumulative distribution function|CDF]] $P(X < x)$
- `qnorm(x, mean = 0, sd = 1, lower.tail = TRUE)`: [[./quantile function|quantile function]]
- `rnorm(x, mean = 0, sd = 1)`: generates [[random deviate|random deviates]]

### Explanation
`pnorm` is the CDF, which is the area under the normal curve below certain threshold. If we set `lower.tail = FALSE`, we are essentially compute the area above `q` (a.k.a. `1 - pnorm(x, mean, sd)`)
![[../pnorm.png|pnorm.png]]

`qnorm(p, mean = 0, sd = 1, lower.tail = TRUE)` calculates the **value** such that the area of the curve below this value is equal to `p`.
![[../qnorm.png|qnorm.png]]

For example, given a random variable $X$, $P(X < x) = y$, `pnorm` finds $y$, given $x$ and `qnorm` finds $x$ given $y$.

## Binomial Distribution
See: [[./binomial distribution|binomial distribution]]
- `x`: number of events
- `n`: number of trails
- `p` or `prob`: probability of success

The R function family provided by the binomial distribution shares the similar postfixes as the normal distribution.
- `dbinom(x, n, p)`: [[./probability mass function|PMF]] $P(X = x)$
- `pbinom(x, n, p, lower.tail = TRUE)`: CDF $P(X \leq x)$
- `qninom(x, n, p, lower.tail = TRUE)`:  quantile function
- `rbinom(x, n, p)`: generates random deviates

### Examples
Compute $P(45 < X < 55)$ for $X \sim \text{Binomial}(100,0.5)$
```r
sum(dbinom(46:54, 100, 0.5))
```