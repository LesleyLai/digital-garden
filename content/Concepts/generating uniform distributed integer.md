---
created: 2024-01-22
modified: 2024-03-14
publish: true
tags:
  - computer/AlgorithmsAndDataStructures/PRNG
---

# Generating Uniform Distributed Integer
[Lemire's algorithm](https://arxiv.org/abs/1805.10941) is a state of the art (as of 2024) for generating uniformly distributed random integers in an interval $[0, s)$

To transform from $[0, s)$ to $[a, b]$, we need to add $a$ to the result and pick $s = b-a$