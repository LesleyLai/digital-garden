---
parent:
  - "[[Laplace transform|Laplace transform]]"
  - "[[Fourier transform|Fourier transform]]"
tags:
  - math/LaplaceTransform
  - math/fourier
created: 2024-10-14
modified: 2024-10-15
publish: true
---
We have the bilateral [[Laplace transform|Laplace transform]]:
$$
F(s) = \mathcal{L}\{f(t)\} = \int_{t=-\infty}^\infty e^{-st} f(t) \, dt
$$
where $s = \sigma + i\omega$ is a complex number.

And we also have the [[Fourier transform|Fourier transform]]:
$$
F(\omega) = \mathcal{F}\{f(t)\} = \int_{t=-\infty}^\infty e^{-i \omega t} f(t) \, dt
$$

The two formula looks very similar and it is tempting to set $s = i \omega$ to get the Fourier transform from the Laplace transform.

However, there is a caveat: only when the [[region of convergence for Laplace Transform|region of convergence (ROC)]] for $F(s)$ includes the imaginary axis, then $F(i\omega)$ exists and equals the Fourier transform $F(\omega)$.