---
parent:
  - "[[R language|R language]]"
  - "[[hypothesis testing|hypothesis testing]]"
tags:
  - computing/R
  - math/statistics/HypothesisTesting
created: 2024-11-11
modified: 2024-11-12
publish: true
---
The R language has built-in support for a lot of hypothesis testing methods. Though we can also compute it manually.

## One-sampled Proportion Test
See: [[./Z-test#One Sample Proportion Test|Z-test > One Sample Proportion Test]]

```r
prop.test(x, n, p, alt = "two.sided", conf.level = 0.95, correct = TRUE)
```
- where `x` is the observed count of success (a count rather than proportion!)
- `n` is the sample size
- `p` is the probability of success according to the null hypothesis
- `alt` is the direction of the alternative hypothesis. Can be `less`, `greater`, or `two.sided`
- `conf.level = 0.95`
- `correct = True` is whether to apply [[Yates' continuity correction|Yates' continuity correction]]

For example:
```r
prop.test(19, 220, 0.1, alt = "two.sided", correct = FALSE)
```

To compute the p-value manually, we first need to compute the test statistics according to the formula
$$
z= \frac{\hat{p}-p_0}{\text{standard error}} = \frac{\hat{p}-p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}}
$$
```r
box = ... # expected population distribution e.g. c(rep(0, 9), 1)
n = ... # Sample size. e.g. 42
OV = ... # observed value

box_mean = mean(box)
box_sd = rafalib::popsd(box) # Note that we need population standard deviation!

# EV and SE of the sample sum
EV = n * box_mean
SE = sqrt(n) * box_sd

# calculate test statistic
test_stat = (OV - EV)/SE
```
Then we use `pnorm` to calculate the chance of getting a test statistic as or more extreme. The exact formula depends on the side of alternative hypothesis and whether we are doing [[one-tailed and two-tailed tests|one-tailed and two-tailed tests]]:
```r
p_value = 2 * pnorm(test_stat) # if 2-sided, t < 0
```

## T-Test
Use `t.test()`

## Check Normality: Shapiro-Wilk Test
see: [[./Shapiro-Wilk Test|Shapiro-Wilk Test]]
```r
shapiro.test(vec)
```