---
created: 2023-05-30
modified: 2024-05-06
publish: true
tags:
  - math/probability
  - math/sampling
---

Importance sampling is a [[./variance reduction methods|variance reduction methods]] technique for [[./Monte Carlo integration|Monte Carlo integration]]. The idea is to put more samples where the [[./probability density function|PDF]] $f(x)$ is bigger.

![[../importance sampling.png|importance sampling.png]]

## Process of Importance Sampling
  1. Having an integral $f(x)$ over the domain $[a, b]$
  2. Pick a [[PDF|PDF]] $p(x)$ that is non-zero over the domain $[a, b]$
  3. We average a bunch of $\frac{f(r)}{p(r)}$ where $r$ is a random number with PDF $p$

  Any choice of PDF $p$ will converge to the correct anwser eventually, but the closer the PDF approximate $f$, the faster we converge.

## References
- [[ray tracing the rest of your life|Ray Tracing: The Rest of Your Life]]