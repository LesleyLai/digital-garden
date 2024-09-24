---
parent:
  - "[[R language|R language]]"
tags:
  - computing/R
created: 2024-09-23
modified: 2024-09-24
publish: true
---
## Statistics
- `sum`
- `min`/`max`
- `length`
- `mean`
- `median`
- `var` sample variance
- `sd` ([[Bessel's correction|sample standard deviation]])
- `rafalib::popsd` (population standard deviation)
- `cov(x, y)` [[covariance|covariance]]
- `cor(x, y)` [[correlation|correlation]] (default [[./Pearson correlation coefficient|Pearson]])

## Regression
- `lm(y ~ x)` Create a linear model
- `summary` Summary the model

## Generation
- `1:10` integer range from `[1, 10]`
- `seq(from = 1, to = 9, by = 2)` 1 3 5 7 9
- `rep(42, 10)` repeat 42 for 10 times
- `rep(1:3, times = 3)` 1 2 3 1 2 3 1 2 3

## Probability Distributions in R
Main: [[./probability distributions in R|probability distributions in R]]

![[./probability distributions in R#Overview|probability distributions in R > Overview]]

## Monte-Carlo Methods
- `set.seed` set a seed for [[./Pseudorandom number generator|PRNG]]
- `sample(x, size, replace = TRUE/FALSE, prob = NULL)` takes samples of the specified size with or without replacement.
- `replicate` replicate an experiment `n` times

### Examples
Sample from 1-10 for 5 times without replacement
```r
sample(x = 1:10, size = 5)
# 3 4 9 5 6
```

Randomly throw a die 5 times:
```r
sample(1:6, 5, replace = T)
```

Do 1000 simulations of the sample sum of flipping a coin 10 times
```r
simulation_result = replicate(1000, sum(sample(c(0, 1), 10, replace = T)))
```

## Plot
See [[ggplot2|ggplot2]]