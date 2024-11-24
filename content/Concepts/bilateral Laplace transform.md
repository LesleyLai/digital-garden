---
parent:
  - "[[Laplace transform|Laplace transform]]"
tags:
  - math/LaplaceTransform
created: 2024-11-08
modified: 2024-11-22
aliases:
  - two-sided Laplace transform
publish: true
---
The unilateral Laplace transform is only appropriate for transforming [[./causal signal|causal signals]]. By contrast, **bilateral Laplace transform** can handle all kinds of signals.

The bilateral Laplace transform of a function $f$ is defined as the following:
$$
F(s) = \mathcal{L}\{f(t)\} = \int_{t=\color{red} -\infty}^\infty e^{-st} f(t) \, dt
$$
## Properties

The properties of bilateral Laplace transform is very similar to the [[./Laplace transform#Properties|properties of unilateral Laplace transform]], but there are some important differences.

In particular, the time differentiation property is simpler with bilateral Laplace transform:

| Time Domain  | Unilateral s domain                             | Bilateral s domain |
| ------------ | ----------------------------------------------- | ------------------ |
| $f'(t)$      | $sF(s) - f(0^-)$                                | $sF(s)$            |
| $f''(t)$     | $s^2F(s) - sf(0^-) - f'(0^-)$                   | $s^2F(s)$          |
| $f^{(n)}(t)$ | $s^nF(s) - \sum_{k=1}^n s^{n-k} f^{(k-1)}(0^-)$ | $s^nF(s)$          |

## Inverse Transform
See also: [[./inverse Laplace transform|inverse Laplace transform]]

Unlike the unilateral Laplace transform, the inverse of the bilateral Laplace transform is not unique. In other words, given a function $X(s)$ in the complex frequency domain, there are multiple possible inverse transforms $x(t)$ unless a [[./region of convergence for Laplace transform|region of convergence]] is specified.

## Relationship with Fourier Transform
See [[./relationship between bilateral Laplace transform and Fourier transform|relationship with Fourier transform]]

## See Also
- [[sinc filter|sinc filter]]
- [[./moment generating functions|moment generating functions]]