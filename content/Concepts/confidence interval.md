---
parent:
  - "[[frequentist inference|frequentist inference]]"
tags:
  - statistics/frequentist
created: 2024-09-25
modified: 2024-10-07
publish: true
aliases:
  - confidence intervals
---
In contrast to [[point estimator|point estimators]], **confidence interval** estimate a [[./statistical parameters and estimates|parameter]] by specifying a range of possible values.

The interval is linked to a _confidence level_, which describes the the probability that the sampling procedural will produce an interval containing the true parameter. In other words, a 95% confidence interval means that if we perform the sampling process a bunch of times and work out the confidence interval, we expect 95% of the confidence intervals to contain the true unknown population parameter.
![[../assets/confidence interval.png|confidence interval.png]]

## Computation of the Confidence Intervals
The confidence interval is typically calculated as the [[point estimator|point estimate]] (e.g., sample mean) plus or minus a multiple of the [[./standard error|standard error]] [^1]:
$$
\text{confidence interval} = \text{point estimator} \pm n \times \text{standard error}
$$
where $n$ is a number coming from the [[./normal distribution|standard normal distribution]] that corresponds to the desired confidence level. Higher confidence levels result in larger multiples of the standard error, which leads to wider confidence intervals. The relationship between confidence levels and confidence intervals can be understood through the [[./68-95-99.7 rule|68-95-99.7 rule]].
![[../assets/Standard_deviation_diagram.svg|Standard_deviation_diagram.svg]]
## Resources
- [Seeing Theory - Frequentist Inference](https://seeing-theory.brown.edu/frequentist-inference/index.html#section2) - An interactive visualization of confidence interval
- [Interpreting Confidence intervals](https://rpsychologist.com/d3/ci/) - Another visualization of confidence interval

[^1]: [Standard error and confidence intervals](https://www.healthknowledge.org.uk/e-learning/statistical-methods/practitioners/standard-error-confidence-intervals)