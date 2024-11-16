---
parent:
  - "[[hypothesis testing|hypothesis test]]"
tags:
  - math/statistics/HypothesisTesting
created: 2024-10-24
modified: 2024-11-13
publish: true
---
A **Chi-squared test** ($\chi^2$ test) is a statistical hypothesis test used for categorical variables. It can be seen as a generalization of the [[./Z-test#One Sample Proportion Test|proportion test]], extending its application beyond binary outcomes to multiple categories. The Chi-squared test was initially developed by [[Karl Pearson|Karl Pearson]] in 1900.

> [!info] Note that [[greek letter chi|Chi]] ($\chi$) is pronounced as the "ki" in "kite"

The Chi-squared test can be applied in various scenarios, including
- **Goodness-of-fit tests**: To determine if an observed frequency distribution differs from a theoretical distribution.
- **Tests of independence**: To assess whether there is a significant association between two categorical variables.

We test the [[test statistic|test statistic]] against the [[chi-squared distribution|chi-squared distribution]]. Since the $\chi^2$ distribution is always positive, the test statistic of the $\chi^2$ test is also always positive, and we will always have a [[one-tailed and two-tailed tests|one-tailed tests]].

## Goodness of Fit Test

The Chi-squared goodness-of-fit test has the [[null hypothesis|null hypothesis]] $H_0$ that any difference between observed frequencies and the expected frequency is due to chance alone.

It has the following assumptions:
- observations are [[./independence|independent]]
- the expected frequencies don't have empty and no more than 20% are < 5 ([[Cochran's rule|Cochran's rule]])

For a test with $k$ categories, the [[test statistic|test statistic]] is
$$
\chi^2 = \sum_{i = 1}^k \frac{(O_i - E_i)^2}{E_i}
$$
where $O_i$ is the observed frequency and $E_i$ is the expected frequency for category $i$.

The degrees of freedom is $k - 1$.

## Test for Independence

The chi-squared test for independence has the null hypothesis $H_0$ that there is no association between the two categorical variables. The frequencies are arranged in a 2D grid that can be visualized by a [[contingency table|contingency table]] like the following:

|               | Sleep during lecture | Not sleep | Total |
| ------------- | -------------------- | --------- | ----- |
| like class    | 20                   | 40        | 60    |
| dislike class | 20                   | 20        | 40    |
| Total         | 40                   | 60        | 100   |

The [[test statistic|test statistic]] is similar to the goodness of fit test too. If you have $m$ rows and $n$ columns, 
$$
\chi^2 = \sum_{i = 1}^m \sum_{j = 1}^n \frac{(O_{ij} - E_{ij})^2}{E_{ij}}
$$

The [[degrees of freedom (statistics)|degrees of freedom]] for the $\chi^2$ distribution is $(m - 1)(n - 1)$.

## Interesting Fact

[[Ronald Fisher|Ronald Fisher]] used the $\chi^2$ tests for independence to claim that some of [[Gregor Mendel|Gregor Mendel]]'s data may be too perfect to be realistic. Despite this, Fisher holds very high regard of Mendel and didn't think he was guilty of data manipulation [^1].

[^1]: [Ending the Mendel-Fisher Controversy](https://www.jstor.org/stable/j.ctv10tq47g)