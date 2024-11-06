---
tags:
  - math/complex
  - signal
aliases:
  - complex frequency
  - complex frequency plane
  - complex frequency domain
created: 2024-09-30
modified: 2024-11-06
parent:
  - "[[./Euler's formula|complex exponential]]"
publish: true
---
For a [[./Euler's formula|complex exponential]] function $e^{st}$ where $s$ is a complex number given by $s = \sigma + i\omega$, we call $s$ as the **complex frequency**.

## Expansion with Euler's Formula
We can expand the complex exponential function with the [[./Euler's formula|complex exponential]]:
$$
\begin{align}
e^{st} &= e^{(\sigma + i\omega) t} \\
&= e^{\sigma t} e^{i\omega t} \\
&= e^{\sigma t} (\cos{\omega t} + i \sin{\omega t})
\end{align}
$$
Since the [[complex conjugate|conjugate]] of $s$ is $s^* = \sigma - i\omega$, then
$$
e^{s^* t} = e^{\sigma t} (\cos{\omega t} + i \sin{\omega t})
$$
and
$$
e^{\sigma t} (\cos{\omega t}) = \frac{1}{2}(e^{st} + e^{s^* t})
$$

## The Complex Frequency Plane
- The real part $\sigma$ determines the rate of growth or decay of the signal's amplitude.
    - If $\sigma > 0$, the amplitude grows exponentially.
    - If $\sigma < 0$, the amplitude decays exponentially.
    - If $\sigma = 0$, the amplitude remains constant.
- The imaginary part $\omega$ determines the frequency of oscillation

![[../assets/complex frequency plane.png|600]]

For signals whose complex frequencies lie on the real axis ($\omega = 0$), the frequency of oscillation is zero. And consequently, these signals are [[monotonic function|monotonically increasing or decreasing]]. Conversely, signals whose complex frequencies lie on the imaginary axis ($\sigma = 0$) are [[./sinusoid|sinusoids]] with constant amplitudes.

Here are some examples:
1. $x(t) = e^{\sigma t}, s = \sigma, \omega = 0$
2.  $x(t) = e^{i \omega t}, s = i \omega, \sigma = 0$
3. $x(t) = e^{(\sigma + i \omega) t}, s = \sigma + i \omega, \sigma < 0$
4. $x(t) = e^{(\sigma + i \omega) t}, s = \sigma + i \omega, \sigma > 0$
![[../assets/complex frequency examples.png|complex frequency examples.png]]

## Related
- [[Laplace transform|Laplace transform]] - transform a signal from [[./time and frequency domain|time domain]] into the complex frequency domain

## Reference
- Linear Systems and Signals, 3rd Edition, Chapter 1.3