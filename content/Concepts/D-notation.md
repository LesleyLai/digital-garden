---
aliases:
  - differential operator
created: 2024-08-19
modified: 2024-08-28
parent:
  - "[[derivative|differentiation]]"
publish: true
tags:
  - math/calculus/differentiation
---

# D Notation
The **D notation** uses a **differential operator** denoted as $D$. When applied to a function $f(x)$, it is defined as
$$
(Df)(x) = \frac{df(x)}{dx}
$$
Higher derivatives are denoted as "powers" of D. For example, $D^n f$ is the $n$th derivative of $f$. [^1]

D notation can be useful when studying [[./differential equations|differential equations]]. For example,  $\frac{d^2y(t)}{dt^2} + 3\frac{dy(t)}{dt} + 2y(t) = \frac{dx(t)}{dt}$ can be expressed compactly as $(D^2 + 3D + 2)y(t) = Dx(t)$.

The differential operator is the inverse of the integral operator, so we can use the operator $1/D$ to represent integration. Use of operator $1/D$ for integration generates some subtle mathematical difficulties because the operators $D$ and $1/D$ do not commute. [^2]

[^1]:  [Notation for differentiation - Wikipedia](https://en.wikipedia.org/wiki/Notation_for_differentiation#D-notation)
[^2]: Linear Systems and Signals 1.8