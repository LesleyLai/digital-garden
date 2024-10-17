---
parent:
  - "[[Fourier series|Fourier series]]"
tags:
  - math/fourier
created: 2024-10-15
modified: 2024-10-18
publish: true
---
We can calculate the [[./size of a signal|power]] of a [[periodic function|periodic signal]] $x(t)$ with a [[frequency and period of waves|period]] $T$ by the following
$$
P_x = \lim_{T \rightarrow \infty} { \frac{1}{T} \int _{t = -T/2}^{T/2} |x(t)|^2 \, dt }
$$

However, there is a shortcut if we know its Fourier series. Given the the Fourier series of $x(t)$:
$$
x(t) = C_0 + \sum_{n = 1}^\infty C_n \cos(n \omega t + \theta)
$$
where $\omega_0 = \frac{2\pi}{T}$ is the angular frequency, the **Parseval's theorem** states that the power of a periodic signal is equal to the sum of the powers of its Fourier components:
$$
P_x = C_0^2 + \frac{1}{2}\sum_{n=1}^\infty C_n^2
$$
We can use the theorem to directly compute the signal power in the frequency domain.