---
parent:
  - "[[statistics|statistics]]"
tags:
  - statistics/HypothesisTesting
aliases:
  - statistics/HypothesisTesting
  - hypothesis test
  - statistical hypothesis test
created: 2024-10-07
modified: 2024-10-09
publish: true
---
A **hypothesis test** is a method of [[statistical inference|statistical inference]] used to decide whether the sample data sufficiently supports a particular hypothesis about a [[./statistical parameters and estimates|population parameter]]. We typically consider two competing hypotheses:

1. The [[null hypothesis|null hypothesis]] ($H_0$): This is the default assumption or the status quo. It claims that the effect being studied does not exist
2. The [[alternative hypothesis|alternative hypothesis]] ($H_1$ or $H_a$): This is the hypothesis we're testing against the null hypothesis.

The process involves collecting sample data and using it to determine whether there is enough evidence to reject the null hypothesis $H_0$ in favor of the alternative hypothesis $H_1$.

When perform hypothesis testing, we typically have the following steps:
1. Formulate research questions and develop hypotheses
2. Design the study and [[./data collection|collect data]]
3. Choose an appropriate statistical test with an appropriate [[test statistic|test statistic]] $T$
4. Verify that the data meet the assumptions for the chosen test
5. Weigh up evidence against hypotheses
6. Draw conclusion
  - Decide whether to reject or retain the null hypothesis $H_0$

## Subtopics
- [[test statistic|test statistic]]
- [[p-value|p-value]]

## Test Methods
- [[Z-test|Z-test]]
- [[Student's t-test|Student's t-test]]