---
parent:
  - "[[multiple integrals|multiple integrals]]"
tags:
  - math/calculus/integration
aliases:
  - double integral
created: 2024-11-28
modified: 2025-03-03
publish: true
---
Integrals for functions of single variables can be understand as the area under the curve. Similarly, **double integral** of a function of two variables $f(x, y)$ can be understand as the volume under a surface.

We can use [[Riemann sum|Riemann sum]] to define double integral: suppose we have a region $R$ in the xy-plane and a two-variable function $f(x, y)$. The **double integral** is defined as:
$$
\iint_R f(x, y) \, dA = \lim_{ \Delta A \to 0 } \sum_{i = 1}^n f(x_i^*, y_i^*) \Delta A_i
$$

![[../assets/double integral.webp|250]]

## As Iterated Integral
See also: [[Fubini's theorem|Fubini's theorem]]

We can also compute $\iint_R f(x, y) \, dA$ using the method of slices: Let $S(x)$ be the area of a slice parallel to the yz-plane at a given x-coordinate. Then the volume can be expressed as: $\int_{x_{min}}^{x_{max}} S(x)\ dx$. For a given $x$, $S(x) = \int_{y_{min}(x)}^{y_{max}(x)} f(x, y) \ dy$ .

Thus, we can write the double integral as an [[iterated integral|iterated integral]]:

$$
\iint_R f(x, y) \, dA = \int_{x_{min}}^{x_{max}} \left[ \int_{y_{min}(x)}^{y_{max}(x)} f(x, y) \, dy \right] dx
$$

> [!info] Note: for a non-rectangular region, the range of integration for $y$ may depend on $x$, as the boundaries of the region $R$ may change according to $x$
> ![[../assets/iterated integral with variable y.webp|200]]

## Change of Variables
In certain cases, the region of integration can be more naturally described in the polar coordinate, so [[./double integrals in polar coordinates|changing variables to polar coordinate]] and then setting up an iterated integral is more convenient to solve the problems.

More generally, for double integrals involving other types of regions or integrands can sometimes be simplified by [[./changing variables in multiple integrals|changing the coordinate system]] to one better adapted to the region or integrand.