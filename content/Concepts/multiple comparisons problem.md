---
parent:
  - "[[biases in statistics|biases in statistics]]"
tags:
  - math/statistics/HypothesisTesting
  - math/statistics/bias
created: 2024-11-01
modified: 2024-11-01
publish: true
aliases:
  - multiple comparisons
---
Suppose that one statistic test has a 5% false positive rate; then it will have a 95% probability of not getting a false positive. However, if we perform the test $n$ times, we will have $1 - 0.95^n$ likelihood of getting at least one false positive. For example, if we perform the test 20 times, our false positive rate is more than 60%! 

This issue is known as the **multiple comparison problem**. It has long troubled the scientific community due to the unavoidable need for making multiple comparisons, a focus on achieving [[./p-value|statistical significance]], and a lack of understanding of probability and statistics.

The practice of conducting multiple statistical comparisons without a pre-specified hypothesis, with the aim of finding statistically significant results, is known as [[p-hacking|p-hacking]]. This approach is now widely considered unethical.

Perhaps the most egregious example of the multiple comparisons problem is that a scan of dead salmon can be shown to have brain activity. Despite using a small p-value ($p = 0.001$), the sheer number of comparisons (130,000) makes false positives unavoidable. [^1]

There are techniques to mitigate the multiple comparison problem. For example, the [[Bonferroni correction|Bonferroni correction]] says that if you perform multiple comparisons, the criteria for significance should be $p < \alpha/n$. However, this method has a drawback: it reduces [[statistical power|statistical power]], as it requires a much stronger correlations to reach statistical significance. [^2]

## Related
- [[./problems of the p-value|problems of the p-value]]
- [[./Texas sharpshooter fallacy|Texas sharpshooter fallacy]]

[^1]: C. Bennett, A. Baird, M. Miller, G. Wolford. [Neural Correlates of Interspecies Perspective Taking in the Post-Mortem Atlantic Salmon: An Argument For Proper Multiple Comparisons Correction.](https://teenspecies.github.io/pdfs/NeuralCorrelates.pdf) _Journal of Serendipitous and Unexpected Results_, 1:1–5, 2010.
[^2]: [The p value and the base rate fallacy — Statistics Done Wrong](https://www.statisticsdonewrong.com/p-value.html)