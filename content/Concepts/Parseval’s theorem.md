---
parent:
  - "[[./Fourier series|Fourier series]]"
tags:
  - math/fourier
  - math/signal
created: 2024-10-15
modified: 2024-11-19
publish: true
aliases:
  - Parseval's identity
  - Plancherel's Theorem
---
## In Signal Processing
In signal processing, **the Parseval's theorem** is often written as equivalence of computing the [[./size of a signal|energy or power of a signal]] in the [[./time and frequency domain|time domain and frequency domain]]. It can apply to both periodic and aperiodic signals.

**For periodic signal:**
The Parseval's theorem states that given the the [[./Fourier series|Fourier series]] of the periodic signal $x(t)$ with [[frequency and period of waves|period]] $T$:
$$
x(t) = C_0 + \sum_{n = 1}^\infty C_n \cos(n \omega t + \theta)
$$
- where $\omega = 2\pi f$ is the [[./angular frequency|angular frequency]]
the the average power of the signal is equal to the sum of the powers of its Fourier components:
$$
P_x = \lim_{T \rightarrow \infty} { \frac{1}{T} \int _{t = -T/2}^{T/2} |x(t)|^2 \, dt } = C_0^2 + \frac{1}{2}\sum_{n=1}^\infty C_n^2
$$

**For aperiodic signals:**
The Parseval's theorem relates the energy of the signal in the time domain to its energy in the frequency domain:
$$
E_x = \int_{-\infty}^\infty |x(t)|^2 \, dt = \frac{1}{2\pi}\int_{\omega = -\infty}^{\infty} |X(\omega)|^2 \, d\omega = \int_{\omega = -\infty}^{\infty} |X(f)|^2 \, df
$$
where
- $X(\omega) = \mathcal{F}\{x(t)\}$ represents the [[Fourier transform|continuous Fourier transform]]

## Related
- [[Bessel's inequality|Bessel's inequality]]