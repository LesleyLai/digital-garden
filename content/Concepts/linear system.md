---
created: 2024-08-18
modified: 2024-09-30
parent:
  - "[[systems|system]]"
publish: true
tags:
  - signal/systems
specializations:
  - "[[./linear time-invariant system|linear time-invariant system]]"
---
A system is **linear** if it follows the [[./linear transformation|superposition property]]:
- Additivity
  If $x_{1} \to y_{1}$ and $x_{2} \to y_{2}$, then $x_{1} + x_{2} \to y_{1} + y_{2}$
- Homogeneity (scaling)
  If $x \to y$, then for all real or imaginary k, $kx \to ky$

 If a linear system is also [[./time invariant system|time invariant]], it is called a [[./linear time-invariant system|linear time-invariant system]].

## Response of a Linear System
A system's output for $t > 0$ is the result of two independent causes:
- the initial conditions of the system (or the system state) at $t = 0$ 
- the input $x(t)$ for $t \ge 0$. 
If the system is linear, the we can decompose the output into the sum of [[zero-input response and zero-state response|those two components]]:
- zero-input response: result only from initial system state
- zero-state response: result only from the system input
This property of linear systems, which allows the separation of an output into components from the initial conditions and from the input, is called the _decomposition property_.

## Significance of a Linear System
Even though almost all systems observed in practice is nonlinear, it is possible to approximate most of them by linear systems for small-signal analysis. The analysis of non-linear system is much more difficult. By contrast, the analysis of linear systems is greatly simplified by the superposition property.

In particular, if input $x(t)$ can be broken down into simple functions$$
x(t) = a_{1}x_{1}(t) + a_{2}x_{2}(t) + \cdots + a_{m}x_{m}(t)
$$Then the response $y(t)$ is given by
$$
y(t) = a_{1}y_{1}(t) + a_{2}y_{2}(t) + \cdots + a_{m}y_{m}(t)
$$

For example, for an arbitrary input $x(t)$, we can approximate it with a sum of [[rectangular function|rectangular pulses]] of width $\Delta t$ and of varying heights. Alternatively, we can also approximate it with [[./unit step function|unit step functions]]:
![[../assets/signal representation in terms of impulse and step components.png|signal representation in terms of impulse and step components.png]]

Time-domain analysis of linear systems uses the above approach. And when performing frequency domain analysis using [[Laplace transform|Laplace transform]] or [[Fourier transform|Fourier transform]], we instead use [[sinusoid|sinusoids]] or [[./complex exponential function|exponentials]] as [[./basis functions|basis]].

## References
- Linear Systems and Signals, 3rd Edition, Chapter 1.7