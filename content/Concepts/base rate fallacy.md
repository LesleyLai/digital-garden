---
aliases:
  - base rate bias
  - prosecutor's fallacy
  - false positive paradox
created: 2024-02-03
modified: 2024-09-04
parent:
  - "[[./cognitive bias|cognitive bias]]"
  - "[[logical fallacies|logical fallacy]]"
publish: true
tags:
  - logic/fallacies
  - cognitive_bias
---

# Base Rate Fallacy
**Base-rate fallacy**, also called **prosecutor's Fallacy**, is a [[./cognitive bias|cognitive bias]] where people ignore the [[base rate|base rate]] (general prevalence) in favor of event-specific information when making judgments or decisions.

![|600](https://upload.wikimedia.org/wikipedia/commons/2/20/Base_rate_fallacy_with_vaccines.svg)

Base-rate fallacy can be view the confusion of the posterior probability with the prior probability.

An example of the base rate fallacy is the **false positive paradox**, where there are more false positive test results than genuinely positive result. For example, if a facial recognition camera can identify criminals 99% accurately, but analyzing 10000 people a day, then it will get 100 false positives. the high accuracy is outweighed by the number of tests, and the program's list of criminals will likely have far more false positives than true. [^1]

## Examples
### DNA Match
Suppose that there are 5 million people in Sydney. A murder occurs with DNA left on the weapon and a person matching the DNA is arrested.

Incorrect argument: given that the chance of a DNA match is 1 in 500000, the chance that the arrested person is guilty is very high.

We can compute the [[./conditional probability|conditional probabilities]] of prior and posterior:
$$
P(\text{DNA Match}|\text{Innocent}) = \frac{9}{4999999} = 0.00018%
$$
$$
P(\text{Innocent}|\text{DNA Match}) = \frac{9}{10} = 90\%
$$
Note that $P(\text{DNA Match}|\text{Innocent}) \neq P(\text{Innocent}|\text{DNA Match})$.

## See Also
- [Sally Clark - Wikipedia](https://en.wikipedia.org/wiki/Sally_Clark)


[^1]: [Base rate fallacy - Wikipedia](https://en.wikipedia.org/wiki/Base_rate_fallacy)