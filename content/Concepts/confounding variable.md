---
aliases:
  - confounder
  - confounding variables
created: 2024-07-29
modified: 2024-10-07
parent:
  - "[[biases in statistics|biases in statistics]]"
publish: true
tags:
  - statistics
---
A **confounder** is a variable that influences both the dependent variable and independent variable. [^1]

![[../assets/Confounding-variables.jpg|400]]

One way to mitigate the effect of potential confounders is to split samples into *subgroups* with respect to the confounder (see [[./Simpson’s paradox|Simpson’s paradox]]). However, [[subgroup analysis|subgroup analysis]] does not guarantee to find the problem, and increasing the number of comparison can even create other problems, such as inflated false positives due to [[multiple comparisons problem|multiple comparisons]]. [^1]


[^1]: [Confounding - Wikipedia](https://en.wikipedia.org/wiki/Confounding)