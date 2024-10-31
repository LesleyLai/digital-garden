---
parent:
  - "[[./linear time-invariant system|linear time-invariant]]"
tags:
  - signal/systems
created: 2024-09-30
modified: 2024-10-09
publish: true
---
A [[./linear time-invariant system|linear time-invariant]] continuous (LTIC) system is often represented as [[./linear differential equation|linear differential equations]] like the following:
$$
\begin{aligned}
& \frac{d^N y(t)}{d t^N}+a_1 \frac{d^{N-1} y(t)}{d t^{N-1}}+\cdots+a_{N-1} \frac{d y(t)}{d t}+a_N y(t) \\
& \quad=b_{N-M} \frac{d^M x(t)}{d t^M}+b_{N-M+1} \frac{d^{M-1} x(t)}{d t^{M-1}}+\cdots+b_{N-1} \frac{d x(t)}{d t}+b_N x(t)
\end{aligned}
$$

where all the coefficients $a_i$ and $b_i$ are constants and $M \leq N$.

Using [[./D-notation|operator notaiton]] $D$ to represent $d / d t$ and simplify with the [[summation notation|summation notation]], we can express this equation as
$$
\sum_{k = 0}^N a_k D^k y(t) = \sum_{k=0}^M b_k D^k x(t)
$$
As the system is linear, we can represent it as a sum of [[./zero-input response and zero-state response|zero-input response and zero-state response]] (decomposition property). Therefore,

<div style="text-align: center;">
total response = zero-input response + zero-state response
</div>

In other word, we can decompose the total response $y(t)$ into the zero-input response (homogeneous solution) $y_h(t)$ and zero-state response (particular solution) $y_p(t)$.

## The Zero-input Response
The [[./zero-input response and zero-state response|zero-input response]] $y_h(t)$ is the solution of the previous equation where the input $x(t) = 0$:
$$
\sum_{k = 0}^N a_k D^k y_h(t) = 0
$$
This is a [[homogeneous differential equation|homogeneous differential equation]], and we can solve it with [[./characteristic equation|characteristic equations]] (see that note for more information).

## The Zero-State Response
The [[./zero-input response and zero-state response|zero-state response]] $y_p$ is a particular solution to our differential equation:
$$
\sum_{k = 0}^N a_k D^k y_p(t) = \sum_{k=0}^M b_k D^k x(t)
$$

In a LTIC system, the zero-state response can be modeled as the [[./convolution|convolution]] of the [[impulse response|unit impulse response]] $h(t)$ and the input $x(t)$:
$$
y_p(t) = h(t) * x(t)
$$
It is usually easier to compute the zero-state response in the [[./time and frequency domain|frequency domain]] using transforms such as the [[Laplace transform|Laplace transform]] or [[Fourier transform|Fourier transform]], because by the [[./convolution theorem|convolution theorem]], convolution in time domain becomes multiplication in the frequency domain.

## Stability
> see [[system stability|system stability]]

## Reference
-  Linear Systems and Signals, 3rd Edition, Chapter 2