---
created: 2024-01-23
modified: 2024-03-14
publish: true
tags:
  - math/calculus
  - computing/graphics/pbr
---
# Approximate Integral of Product as Product of Integral

Given an integral of product $\int_{\Omega} f(x) g(x) \mathrm{d} x$, we normally need to evaluate it either analytically through [[./integration by parts|integration by parts]] or numerically by Monte Carlo integration. However, when the functions either have small [[./support (mathematics)|support]] or are [[./smoothness|smooth]], the following approximation can work well:
$$
\int_{\Omega} f(x) g(x) \mathrm{d} x \approx \frac{\int_{\Omega} f(x) \mathrm{d} x}{\int_{\Omega} \mathrm{d} x} \cdot \int_{\Omega} g(x) \mathrm{d} x
$$

This approximation is extensively employed in real-time rendering. For example, [[./shadow mapping|shadow mapping]] separates the visibility term of the [[./rendering equation|rendering equation]]. And [[./the split sum approximation|the split sum approximation]] goes a step further by isolating the material and lighting components.

## Reference
- [[Games 202#Lecture 3 Real-time Shadows 1|Games 202 > Lecture 3 Real-time Shadows 1]]