---
parent:
  - "[[Laplace transform|Laplace transform]]"
  - "[[Fourier transform|Fourier transform]]"
tags:
  - math/LaplaceTransform
  - math/fourier
created: 2024-10-14
modified: 2024-11-08
publish: true
---
We have the [[bilateral Laplace transform|bilateral Laplace transform]]:
$$
F(s) = \mathcal{L}\{f(t)\} = \int_{t=-\infty}^\infty e^{-st} f(t) \, dt
$$
where $s = \sigma + i\omega$ is a [[./complex frequency|complex frequency]].

And we also have the [[Fourier transform|Fourier transform]]:
$$
F(\omega) = \mathcal{F}\{f(t)\} = \int_{t=-\infty}^\infty e^{-i \omega t} f(t) \, dt
$$

## Fourier to Laplace
The two formula looks very similar and it is tempting to set $s = i \omega$ to get the Fourier transform from the Laplace transform.

However, there is a caveat: only when the [[region of convergence for Laplace Transform|region of convergence (ROC)]] for $F(s)$ includes the imaginary axis, then $F(i\omega)$ exists and equals the Fourier transform $F(\omega)$.

## Laplace to Fourier
Conversely, we can start at the bilateral Laplace transform and try to get a Fourier transform. Since $s = \sigma + i \omega$, we have
$$
\begin{align}
\mathcal{L}\{f\} = F(s) &= \int_{t=-\infty}^\infty e^{-st} f(t) \, dt \\
&= \int_{t=-\infty}^\infty e^{-(\sigma + i\omega)t} f(t) dt \\
&= \int_{t=-\infty}^\infty \left[f(t) e^{-\sigma t}\right] e^{i\omega t} dt \\
&= \mathcal{F}\{f(t) e^{-\sigma t} \}
\end{align}
$$
In other words, Laplace transform can be understand as a [[Fourier transform|Fourier transform]] of the original function multiplied by $e^{-\sigma t}$ [^1]

[^1]: [Laplace Transform Region of Convergence Explained ("THE best explanation I've seen") - YouTube](https://www.youtube.com/watch?v=SexBL1OlhhU)