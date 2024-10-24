---
aliases:
  - PRNG
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - computing/algorithms/PRNG
  - computing/algorithms/Hash
---

# Pseudorandom Number Generator
Pseudorandom number generator generates a sequence of values depend on an initial _seed_.

It is a common technique used in simulation (such as [[./Monte Carlo methods|Monte Carlo methods]]), game dev (such as [[procedural generation|procedural generation]]), [[./randomized algorithms|randomized algorithms]], and [[cryptography|cryptography]].

There are a tradeoff between quality and speed, and no PRNG can fit the requirement of all application. That being said, there are some research on which PRNGs[^1] to pick.

### See also
- [[./sampling (signal processing)#Pseudo Random Number Sampling Methods|sampling (signal processing) > Pseudo Random Number Sampling Methods]]

[^1]: [[Hash Functions for GPU Rendering paper|Hash Functions for GPU Rendering paper]]