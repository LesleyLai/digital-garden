---
tags:
  - math/polynomials
created: 2024-01-15
modified: 2024-03-14
publish: true
---
The n +1 *Bernstein basis polynomials* of degree n are [[./basis|basis]] of polynomials defined as
$$
b_{\nu,n}(x) = \binom{n}{\nu} x^{\nu} \left( 1 - x \right)^{n - \nu}, \quad \nu = 0, \ldots, n,
$$

For example, the first Bernstein basis is $b_{0, 0}(x) = 1$, and the second Bernstein basis are $b_{0, 1}(x) = 1 - x, b_{1, 1}(x) = x$

![[../assets/2021-08-15_10-33-56_Bernstein_Polynomials.svg|Bernstein basis polynomials for 4th degree curve blending|300]]

Bernstein Basis is a good choice of building up curves. For example, [[./Bezier curve|Bezier curve]].

## Reference
- [Wikipedia: Bernstein polynormial](https://en.wikipedia.org/wiki/Bernstein_polynomial)
