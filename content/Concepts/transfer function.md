---
parent:
  - "[[systems|systems]]"
tags:
  - signal/systems
created: 2024-10-04
modified: 2024-11-06
publish: true
---
The **transfer function** $H(s)$ is a function that models the system's output for each possible input in the [[./complex frequency|complex frequency domain]]. It is defined as the [[./Laplace transform|Laplace transform]] of the [[impulse response|impulse response]].

Due to the [[./convolution theorem|convolution theorem]], the transfer function has the following relation with the input and output of a system:
$$
H(s) = \frac{Y(s)}{X(s)}
$$

The transfer function is defined only for [[./linear time-invariant system|linear time-invariant]] systems.

## Related
- [[frequency response|frequency response]] - [[Fourier transform|Fourier transform]] of the [[impulse response|impulse response]]