---
parent:
  - "[[convolution|convolution]]"
tags:
  - math/convolution
created: 2024-09-28
modified: 2024-09-28
publish: true
aliases:
  - time and frequency convolution
---
The **convolution theorem** states that the [[Laplace transform|Laplace transform]] of the convolution of two functions is the same as the product of the Laplace transform of two functions.
$$
\mathcal{L}\{f(t) * g(t)\} = \mathcal{L}\{f(t)\} \mathcal{L}\{g(t)\}
$$
Alternatively, let $F(s) = \mathcal{L}\{f(t)\}$ and $G(s) = \mathcal{L}\{g(t)\}$,
$$
(f * g)(t) = \mathcal{L}^{-1}\{F(s) G(s)\}
$$
The theorem also holds true for the [[Fourier transform|Fourier transform]]:
$$\mathcal{F}\{ f(t) * g(t) \} = \mathcal{F}\{ f(t) \} \mathcal{L}\{ g(t) \}$$
![[../assets/convolution theorem.png|600]]
