---
created: 2024-01-23
modified: 2024-03-14
parent:
  - "[[Fresnel equations|Fresnel equations]]"
publish: true
tags:
  - physics/optics
---

**The Schlick's approximation** is a fast and fairly accurate approximation for the [[Fresnel equations|Fresnel equations]]. It is also parameterized by the base reflectance $F_{0}$, which is much more intuitive than the original Fresnel equations.
$$
\begin{align}
R(\theta) &= R_{0} + (1 - R_{0})(1 - \cos{\theta})^5 \\
R_{0} &= \left( \frac{n_{1} - n_{2}}{n_{1} + n_{2}} \right)^2
\end{align}
$$