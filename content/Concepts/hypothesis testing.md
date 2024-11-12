---
parent:
  - "[[statistics|statistics]]"
tags:
  - math/statistics/HypothesisTesting
aliases:
  - statistics/HypothesisTesting
  - hypothesis test
  - statistical hypothesis test
created: 2024-10-07
modified: 2024-11-12
publish: true
alias: 
---
A **statistical hypothesis test** is a method of [[statistical inference|statistical inference]] used to decide whether the sample data sufficiently supports a particular hypothesis about a [[./statistical parameters and estimates|population parameter]]. We typically consider two competing hypotheses:

1. The [[null hypothesis|null hypothesis]] ($H_0$): This is the default assumption or the status quo. It claims that the effect being studied does not exist
2. The [[alternative hypothesis|alternative hypothesis]] ($H_1$ or $H_a$): This is the hypothesis we're testing against the null hypothesis.

The process involves collecting sample data and using it to determine whether there is enough evidence to reject the null hypothesis $H_0$ in favor of the alternative hypothesis $H_1$.

The usage of hypothesis testing and [[./p-value|p-value]] in particular is ubiquitous in scientific research. However, it is also controversial and are under heavy debate within the statistical and [[./philosophy of science and metascience|metascience]] community.

## Subtopics
- [[null hypothesis|null hypothesis]] and [[alternative hypothesis|alternative hypothesis]]
- [[test statistic|test statistic]]
- [[one-tailed and two-tailed tests|one-tailed and two-tailed tests]]
- [[./p-value|p-value]]
  - [[./problems of the p-value|problems of the p-value]]
- [[type I and type II errors|type I and type II errors]]
- [[./confidence interval|confidence interval]]
- [[statistical power|power]]
- [[degrees of freedom (statistics)|degree of freedom]]
- [[hypothesis testing in R|hypothesis testing in R]]

## Test Methods
### Quantitative Variables
- [[./Z-test|Z-test]] - approximate quantitative variables with normal distribution
- [[./Student's T-test|Student's T-test]] - approximate quantitative variables with t-distribution
### Qualitative Variables
- [[Binomial test|Binomial test]] and [[./Z-test#One Sample Proportion Test|Z-test for proportion]] - tests success probability in binary outcome experiments
- [[Chi-squared test|Chi-squared test]] - tests goodness-to-fit or independence for categorical data
  - [[Yates' continuity correction|Yates' continuity correction]]

### Assumptions Tests
- [[./Shapiro-Wilk Test|Shapiro-Wilk Test]] - check the normality assumption
- [[Levene's test|Levene's T test]] - tests equality of variances between two populations

## Steps
When perform hypothesis testing, we typically have the following steps:
1. Formulate research questions and develop hypotheses
2. Design the study and [[./data collection|collect data]]
3. Choose an appropriate statistical test with an appropriate [[test statistic|test statistic]] $T$
4. Verify that the data meet the assumptions for the chosen test
5. Weigh up evidence against hypotheses
6. Draw conclusion
  - Decide whether to reject or retain the null hypothesis $H_0$
