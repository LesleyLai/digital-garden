---
parent:
  - "[[special functions|special functions]]"
tags:
  - math/functions
  - physics/wave/sinusoids
aliases:
  - sine wave
  - sinusoidal wave
  - sinusoids
  - "#physics/wave/sinusoids"
created: 2024-10-11
modified: 2024-10-14
publish: true
---
A **sinusoid** or **sine wave** is a [[periodic function|periodic]] [[wave|wave]] whose shape is the trigonometric sine function.

Sine wave is heavily related to [[circular motion|circular motions]]:
![[../assets/sincos-circle.gif|600]]

A sinusoid has the following form:
$$
y(t) = A\sin(\omega t + \varphi) = A\sin(2 \pi f t + \varphi)
$$
where
- $A$ is the [[wave amplitude|amplitude]]
- $t$ is the independent variable (often representing time in seconds)
- $f$ is the [[frequency and period of waves|frequency]], measured in hertz (Hz), representing the number of oscillations per second
- $\omega = 2\pi f$ is the [[./angular frequency|angular frequency]], in units of radians per second
- $\varphi$ is the [[phase (waves)|phase]] (in radians), specifying the starting point of the oscillation at $t = 0$ [^1]

## Properties
- [[./sum of same frequency sinusoids|the sum of same frequency sinusoids is another sinusoid of that frequency]]

## Related
- [[./Euler's formula|Euler's formula]] - Transform between the polar form of a complex number into sinusoids
- [[./Fourier series|Fourier series]] - Decompose functions into linear combination of sinusoids

[^1]: [Sine wave - Wikipedia](https://en.wikipedia.org/wiki/Sine_wave)