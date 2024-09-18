---
aliases:
  - partial integration
created: 2024-09-09
modified: 2024-09-10
parent:
  - "[[calculus|calculus]]"
publish: true
tags:
  - math/calculus/integration
---

# Integration by Parts
**Integration by parts** or **partial integration** is a process that finds the integral of a product of functions. The rule can be thought of as the [[./product rule|product rule]] in reverse.

The integration by parts formula states:
$$
\begin{aligned}
\int_a^b u(x) v^{\prime}(x) d x & =[u(x) v(x)]\biggr\rvert_a^b-\int_a^b u^{\prime}(x) v(x) d x
\end{aligned}
$$
Or, letting $u=u(x)$ and $d u=u^{\prime}(x) d x$ while $v=v(x)$ and $d v=v^{\prime}(x) d x$, the formula can be written more compactly:
$$
\int u d v=u v-\int v d u
$$
The former expression is written as a definite integral and the latter as an indefinite integral. [^1]

## Derivation from the product rule
$$
\begin{align}
(uv)' &= u'v + uv' & \text{(product rule)} \\
uv &= \int u'v \, dx + \int uv' \, dx  & \text{(integrate both sides)} \\
\int u'v \, dx &= uv - \int uv' \, dx
\end{align}
$$

[^1]: [Integration by parts - Wikipedia](https://en.wikipedia.org/wiki/Integration_by_parts)