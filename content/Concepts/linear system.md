---
created: 2024-08-18
modified: 2024-08-18
parent:
  - "[[systems|system]]"
publish: true
tags:
  - signal/systems
---

# Linear System

A system is linear if it follows the [[./linear transformation|superposition property]]:
- Additivity
  If $x_{1} \to y_{1}$ and $x_{2} \to y_{2}$, then $x_{1} + x_{2} \to y_{1} + y_{2}$
- Homogeneity (scaling)
  If $x \to y$, then for all real or imaginary k, $kx \to ky$

#### Significance of a Linear System
The superposition property greatly simplifies the analysis of linear systems.

In particular, if input $x(t)$ can be broken down into simple functions$$
x(t) = a_{1}x_{1}(t) + a_{2}x_{2}(t) + \cdots + a_{m}x_{m}(t)
$$Then the response $y(t)$ is given by
$$
y(t) = a_{1}y_{1}(t) + a_{2}y_{2}(t) + \cdots + a_{m}y_{m}(t)
$$