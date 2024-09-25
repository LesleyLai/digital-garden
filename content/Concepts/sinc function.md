---
parent:
  - "[[functions|functions]]"
tags:
  - math/functions
  - math/fourier
  - signal
aliases:
  - sampling function
  - sine cardinal function
  - cardinal sine function
created: 2024-09-23
modified: 2024-09-25
publish: true
---
The **sinc function**, also called "**sampling function**," is a function that arises frequently in [[./signal processing|signal processing]] and [[Fourier analysis|Fourier analysis]].

The full name of "sinc" is "**sine cardinal**."

The **unnormalized sinc function** is defined as the following [^1]
$$
\mathrm{sinc}(x) = \begin{cases}
1 & \text{for } x = 0 \\
\frac{ \sin(x)}{x} & \text{otherwise}
\end{cases}
$$

The **normalized sinc function** is commonly defined for $x \neq 0$ as  [^2]
$$
\mathrm{sinc}(x) = \frac{\sin{(\pi x)}}{\pi x}
$$
(It is called normalized because $\int_{x = -\infty}^{\infty} \frac{\sin{(\pi x)}}{\pi x} \, dx = 1$)

![[../assets/Si_sinc.svg.png|Si_sinc.svg.png]]

[^1]: [Sinc Function -- from Wolfram MathWorld](https://mathworld.wolfram.com/SincFunction.html)
[^2]: [Sinc function - Wikipedia](https://en.wikipedia.org/wiki/Sinc_function)