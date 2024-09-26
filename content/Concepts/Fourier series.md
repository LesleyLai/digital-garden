---
parent:
  - "[[./series|sum]]"
  - "[[Fourier analysis|Fourier analysis]]"
  - "[[signal processing|signal processing]]"
tags:
  - math/fourier
created: 2024-09-24
modified: 2024-09-24
publish: true
---
A **Fourier series** is a way to representing a [[periodic function|periodic function]] as a [[./series|sum]] of sine and cosine functions. It is analogous to a [[./Taylor series|Taylor series]], which expresses functions as a sum of monomial terms.

![[../assets/Fourier series.gif|A sawtooth wave represented by a successively larger sum of trigonometric terms]]

For functions that are not periodic, we need to use [[Fourier transform|Fourier transform]]. For functions of two variables that are periodic in both variables, the trigonometric basis in the Fourier series is replaced by the [[./spherical harmonics|spherical harmonics]].

## Definition
> [!definition] Fourier Series, Trigonometric Form
> The Fourier series of a periodic function $f(x)$ of period $T$ is
> $$
>f(x) = \frac{a_0}{2} + \sum_{k = 1}^\infty \left( a_k \cos{\frac{2\pi kx}{T}} + b_k \sin{\frac{2\pi kx}{T}} \right)
> $$
>
> for some set of **Fourier coefficients** $a_k$ and $b_k$ defined by the integrals
> 
> $a_k = \frac{2}{T}\int_{x = 0}^T f(x) \cos\left( \frac{2\pi kx}{t} \right)$ and $b_k = \frac{2}{T}\int_{x = 0}^T f(x) \sin\left( \frac{2\pi kx}{t} \right) \, dx$

Some sources simplify the [[angular frequency|angular frequency]] $\frac{2\pi}{T}$ as $\omega$: 
$$
f(x) = \frac{a_0}{2} + \sum_{k = 1}^\infty \left( a_k \cos{(k\omega t)} + b_k \sin{(k\omega t)} \right)
$$