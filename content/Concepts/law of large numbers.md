---
parent:
  - "[[probability MOC|probability MOC]]"
tags:
  - math/probability
publish: true
created: 2024-09-18
modified: 2024-11-07
---
The **law of large numbers** (LLN) states that the [[mean|average]] of the [[outcome|outcomes]] from a large number of [[./independence|independent]] random samples converges to the [[./expectation|expected value]]. For example, if we flip a fair dice 100,000 times, the result should be closer to 0.5 than if we flip the dice 10 times on average.

More formally, the LLN states that given a sample of [[./independent and identically distributed random variables|independent and identically distributed values]], the [[mean|sample mean]] converges to the population mean. [^1]

Note that the LLN only applies to the [[mean|sample mean]]. It does not claim that the sample sum gets close to the $n E(X)$ when $n$ increase.

## Related
- [[./Monte Carlo methods|Monte Carlo methods]]
- [[./central limit theorem|central limit theorem]] - describe the distribution of the sum of iid random variables

[^1]: [Law of large numbers - Wikipedia](https://en.wikipedia.org/wiki/Law_of_large_numbers)