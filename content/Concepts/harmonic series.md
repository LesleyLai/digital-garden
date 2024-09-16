---
created: 2024-02-26
modified: 2024-03-14
parent:
  - "[[series|series]]"
publish: true
tags:
  - math/sequences_and_series
---

# Harmonic Series
**Harmonic series** is an infinite series formed by summing all unit fractions:
$$
\sum_{n=1}^\infty \frac{1}{n} = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} + \cdots
$$

## Divergence
Harmonic series [[./convergence of series|diverges]]. We can show that the harmonic series is divergent by grouping terms
$$
\begin{align}
&1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} + \frac{1}{6} + \frac{1}{7} + \frac{1}{8} + \cdots \\
>& \ 1 + \frac{1}{2} + \left( \frac{1}{4} + \frac{1}{4} \right) + \left( \frac{1}{8} + \frac{1}{8} + \frac{1}{8} + \frac{1}{8} \right) + \cdots \\
=& \ 1 + \frac{1}{2} + \frac{1}{2} + \frac{1}{2} + \cdots
\end{align}
$$