---
parent:
  - "[[p-value|p-values]]"
tags:
  - statistics/HypothesisTesting
created: 2024-10-15
modified: 2024-10-18
publish: true
---
> [!quote] After [[Ronald Fisher|Fisher]] had retired to Australia, he was asked whether there was anything in his long career he regretted. He is said to have snapped, “Ever mentioning 0.05.” [^1]

[[Ronald Fisher|Ronald Fisher]], who first introduced the $p$-value, recognized its limitations and intended it only as a heuristic tool and convenient guide. Nevertheless, the p-value cutoff has become a widely accepted standard in many scientific disciplines. [^1] However, several drawbacks of [[p-value|p-values]] can lead to [[p-hacking|p-hacking]] and contribute to [[replication crisis|replication crisis]].

The criticizing of $p$ value is nothing new, but it starts to gain more traction, and some researchers even propose to ban the p-value altogether. [^2]

## Problem: Base Rate Fallacy
> see: [[./base rate fallacy|base rate fallacy]]

P-values are commonly used in hypothesis testing to decide whether to reject or retain the [[null hypothesis|null hypothesis]]. However, this process is based on the misinterpretation of the p-value is that "the p-value is the chance that the null hypothesis is true". The statement is false since p-value is based on the assumption that the null hypothesis is true and then asks how unusual the data is. And the statement flips the direction. A low p-value tells you, "if the null hypothesis is true, these results are unlikely". It does not tell you: "If these results are true, the null hypothesis is unlikely."

In other word, this misinterpretation conflates the conditional probabilities $P(\text{Data}\ |\ \text{Null Hypothesis})$ with $P(\text{Null Hypothesis}\ |\ \text{Data})$. [^1]


[^1]: [The Significant Problem of P Values](https://www.scientificamerican.com/article/the-significant-problem-of-p-values/)
[^2]: [Psychology journal bans P values | Nature](https://www.nature.com/articles/519009f)