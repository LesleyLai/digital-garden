---
aliases:
  - "#signal/sampling"
  - sampling
created: 2023-05-30
modified: 2024-10-07
publish: true
tags:
  - signal/sampling
  - math/probability
  - MOC
---
> [!info] For other use, see [[./sampling|sampling (disambiguation)]]

**Sampling** encodes a continuous signal as [[./discrete signals and systems|discrete]] set of samples. The reverse process is called [[./sample reconstruction|reconstruction]].

## Concepts
- [[./aliasing|aliasing]]
- [[./sample reconstruction|reconstruction]]
- [[./variance|variance]]

## Pseudo Random Number Sampling Methods
## Uniform
- [[./generating uniform distributed integer|generating uniform distributed integer]]

### Non-uniform
#### Discrete
- Linear search or binary search on weights
- [[alias method|alias method]]
#### Continuous
- [[rejection sampling|rejection sampling]]
- [[./inverse transform sampling|inverse transform sampling]]
- [[./transformation of random variables|transformation of random variables]]

  Also see Wikipedia: [Non-uniform random variate generation - Wikipedia](https://en.wikipedia.org/wiki/Non-uniform_random_variate_generation)

## Improve Efficiency
- [[./variance reduction methods|variance reduction methods]]
  - [[stratified sampling|stratified sampling]]
  - [[./importance sampling|importance sampling]]
  - [[multiple importance sampling|multiple importance sampling]]
- [[Russian Roulette|Russian Roulette]]