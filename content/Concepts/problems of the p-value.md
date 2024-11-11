---
parent:
  - "[[./p-value|p-values]]"
tags:
  - math/statistics/HypothesisTesting
created: 2024-10-15
modified: 2024-11-01
publish: true
---
[[Ronald Fisher|Ronald Fisher]], who first introduced the $p$-value, recognized its limitations and intended it only as a heuristic tool and convenient guide. Nevertheless, the p-value cutoff has become a widely accepted standard in many scientific disciplines. [^1] However, several drawbacks of [[./p-value|p-values]] can lead to [[p-hacking|p-hacking]] and contribute to [[replication crisis|replication crisis]].

> [!quote] 
> After [[Ronald Fisher|Fisher]] had retired to Australia, he was asked whether there was anything in his long career he regretted. He is said to have snapped, “Ever mentioning 0.05.” [^1]

The criticism of the $p$ value is nothing new, but it has started to gain more traction, and there is at least one journal outright ban the usage p-value altogether. [^2] A more common and milder view is that the $p$-value should not serve as the sole arbiter of publication, scientific conclusions should not be based only on whether a $p$-value passes a specific threshold, and researchers should always report other important information. [^6]

## Problems of the P-Value
### Base Rate Fallacy
> see: [[./base rate fallacy|base rate fallacy]]

P-values are commonly used in hypothesis testing to decide whether to reject or retain the [[null hypothesis|null hypothesis]]. However, this process is based on the misinterpretation that "the p-value is the chance that the null hypothesis is true". The statement is false since p-value is based on the assumption that the null hypothesis is true and then asks how unusual the data is. And the statement flips the direction. A low p-value tells you, "If the null hypothesis is true, these results are unlikely". It does not tell you: "If these results are true, the null hypothesis is unlikely." [^6]

In other words, this misinterpretation conflates the conditional probabilities $P(\text{Data}\ |\ \text{Null Hypothesis})$ with $P(\text{Null Hypothesis}\ |\ \text{Data})$. [^1]
### Multiple Comparisons Problem
> See: [[./multiple comparisons problem|multiple comparisons problem]] and [[p-hacking|p-hacking]]

When multiple hypotheses are tested together, the probability of obtaining "significant" result by chance increases exponentially. While it's rare for researchers to intentionally manipulate data to produce statistically significant results, they may still unconsciously select hypotheses based on whether they achieve statistical significance. [^5]

### Lack of Information on Effect Size
> See: [[effect size|effect size]]

With a sufficiently large sample size, even minuscule effects can yield statistically significant results, provided the test has adequate [[statistical power|statistical power]]. This phenomenon has led some researchers to advocate for a shift in focus from p-value to [[effect size|effect size]]. [^3]

A commonly cited example is a study on aspirin. The study has a sample size of more than 22000 subjects. It achieves a high statistical significance of $p < 0.0001$. However, the effect size was tiny: a risk difference of 0.77% with $r^2 = .001$. [^3] [^6]

### Overemphasis on Dichotomous Decision-Making
> related: [[./binary thinking|binary thinking]]

Reliance on p-values often encourages a binary mindset of either "rejecting" or "retaining" the null hypothesis, based on arbitrary thresholds like $0.05$. This approach is prone to [[Type I and type II errors|both hyped claims (false positives) and dismissal of real effects (false negatives)]].

Instead, some researchers think that the p-value should be interpreted as a continuous variable rather than in a dichotomous way. They also propose reconceptualizing [[./confidence interval|confidence intervals]] as "compatibility intervals." [^4]

Further, some people believe that statistical significance is widespread because it sates to our human desire for certainty. However, they think that we should instead [[embrace uncertainty|embracing uncertainty]] and avoid oversimplifying the would's complexity. [^1]

### Publication Bias
The requirement of statistical significance as a criterion can cause publication bias. In particular, statistical non significant results are less likely to be published. [^8]

## Teaching of P-value
Despite serious concerns, hypothesis testing and p-value are still often taught in intro statistical courses, often without mentioning any above mentioned issues. One professor mentioned that it may be due to the circularity that "we teach it because it's what we do in industry, and we do it because it's what we were taught." [^7]

[^1]: [The Significant Problem of P Values](https://www.scientificamerican.com/article/the-significant-problem-of-p-values/)
[^2]: [Psychology journal bans P values | Nature](https://www.nature.com/articles/519009f)
[^3]: [Using Effect Size—or Why the P Value Is Not Enough - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC3444174/)
[^4]: [The P Value and Statistical Significance: Misunderstandings, Explanations, Challenges, and Alternatives - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6532382/)
[^5]: [The Statistical Crisis in Science | American Scientist](https://www.americanscientist.org/article/the-statistical-crisis-in-science)
[^6]: [P Value Problems - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC5738950/)
[^7]: [The ASA Statement on p-Values: Context, Process, and Purpose](https://amstat.tandfonline.com/doi/full/10.1080/00031305.2016.1154108)
[^8]: [Publication Bias: A Problem in Interpreting Medical Data](https://www.jstor.org/stable/2982993?origin=crossref)