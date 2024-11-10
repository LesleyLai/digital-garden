---
aliases:
  - base rate bias
  - prosecutor's fallacy
  - false positive paradox
  - transposed conditional fallacy
  - confusion of the inverse
  - conditional probability fallacy
  - inverse fallacy
  - base rate
created: 2024-02-03
modified: 2024-11-09
parent:
  - "[[./cognitive bias|cognitive bias]]"
  - "[[logical fallacies|logical fallacy]]"
publish: true
tags:
  - logic/fallacies
  - cognitive_bias
---
**Base-rate fallacy**, also called **prosecutor's Fallacy**, is a [[./cognitive bias|cognitive bias]] where people ignore the **base rate** (general prevalence) in favor of event-specific information when making judgments or decisions.

![|600](https://upload.wikimedia.org/wikipedia/commons/2/20/Base_rate_fallacy_with_vaccines.svg)

Base-rate fallacy can be view the confusion of the [[posterior probability|posterior probability]] with the [[prior probability|prior probability]]. When we specifically refer to this misunderstanding, it's also known by several other terms such as **transposed conditional fallacy**, **confusion of the inverse**, **conditional probability fallacy** or the **inverse fallacy**.

$$
P(A | B) \neq P(B | A)
$$

An example of the base rate fallacy is the **false positive paradox**, where there are more false positive test results than genuinely positive result. For example, if a facial recognition camera can identify criminals 99% accurately, but analyzing 10000 people a day, then it will get 100 false positives. the high accuracy is outweighed by the number of tests, and the program's list of criminals will likely have far more false positives than true. [^1]

## Bayesian Approach
Note that according to [[./Bayes' theorem|Bayes' theorem]], the correct way to compute the posterior probability is
$$
P(A|B) = \frac{P(B|A)P(A)}{P(B)}
$$
where we need to weigh the base rates $P(A)$ and $P(B)$.

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

### Sally Clark Case
See: [Sally Clark - Wikipedia](https://en.wikipedia.org/wiki/Sally_Clark)

Aside from multiplying the probability of two events as if they are [[./independence|independent]], another error made by the persecutors of the Sally Clark Case is to confuse $P(\text{Two SIDS}|\text{Innocent})$ and $P(\text{Innocent}|\text{Two SIDS})$. While the first one is a very low number, the second conditional probability is likely much higher, considering (double) murder is a very rare event.

If we use the [[./Bayes' theorem|Bayes' theorem]], then
$$
P(\text{Innocent}|\text{Two SIDS}) = \frac{P(\text{Two SIDS}|\text{Innocent})P(\text{Innocent})}{P(\text{Two SIDs})}
$$
This approach would have considered both the rarity of double SIDS and the rarity of double infant murder, leading to a very different conclusion. [^2]

## See Also
- [[./conditional probability|conditional probabilities]]
- [[./problems of the p-value|problems of the p-value]]


[^1]: [Base rate fallacy - Wikipedia](https://en.wikipedia.org/wiki/Base_rate_fallacy)
[^2]: [Sharon Bertsch McGrayne - Simple Bayesian Problems: The Sally Clark Case](https://www.mcgrayne.com/disc.htm)