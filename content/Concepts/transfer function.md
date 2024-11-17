---
parent:
  - "[[systems|systems]]"
tags:
  - math/signal/systems
created: 2024-10-04
modified: 2024-11-17
publish: true
---
The **transfer function** $H(s)$ is a function that models the system's output for each possible input in the [[./complex frequency|complex frequency domain]]. It is defined as the [[./Laplace transform|Laplace transform]] of the [[impulse response|impulse response]].

Due to the [[./convolution theorem|convolution theorem]], the transfer function has the following relation with the input and output of a system:
$$
H(s) = \frac{Y(s)}{X(s)}
$$

The transfer function is defined only for [[./linear time-invariant system|linear time-invariant]] systems.

> [!example] Example: For a system with transfer function
> $$
> H(s) = \frac{2s + 3}{s^2 + 2s + 5}
> $$
> Find the [[./zero-input response and zero-state response|zero-state response]] for input $x(t)$ of $10u(t)$

> [!solution]-
> We don't need to convert transfer function back to the time domain. Instead, we can solve everything in the complex frequency domain and then convert back.
> 
> Our input is $x(t) = 10u(t)$, and $X(s) = \mathcal{L}\{ 10u(t) \} = \frac{10}{s}$.
> Then $Y(s) = X(s) \cdot H(s) = \frac{10(2s + 3)}{(s^2 + 2s + 5)s}$
> This formula does not match anything in the Laplace transform table directly, but we can use [[partial fraction decomposition|partial fraction decomposition]]:
> $$
> Y(s) = \frac{A}{s} + \frac{Bs + C}{s^2 + 2s + 5}
> $$
> After some algebra we get $A = 6,\ B = -6,\text{ and } C = 8$. Thus
> $$
> \begin{align}
> Y(s) &= \frac{6}{s} + \frac{-6s + 8}{s^2 + 2s + 5} \\
> &= \frac{6}{s} - 6\frac{(s + 1)}{(s+1)^2 + 4} + 7 \frac{2}{(s + 1)^2 + 4}
> \end{align}
> $$
> Now we can perform [[./inverse Laplace transform|inverse Laplace transform]] according to the table:
> $$
> \begin{align}
> y(t) &= 6u(t) - 6e^{-t}\cos(2t)u(t) + 7 e^{-t} \sin(2t) u(t) \\
> &= \left[6 - e^{-t}(6\cos(2t) + 7\sin(2t))\right]u(t)
> \end{align}
> $$

> [!example] For the above transfer function, write the differential equation relating the output $y(t)$ to the input $x(t)$ assuming that the systems are controllable and observable

> [!solution]-
> We know that $H(s) = \frac{Y(s)}{X(s)}$, and we can have $(s^2 + 2s + 5)Y(s) = (2s + 3)X(s)$. We can then performing inverse Laplace transform. As the is the zero-state response, each initial conditions will be zero. And thus we have
> $$
> \frac{d^2 y(s)}{dt^2} + 2\frac{d y(s)}{dt} + 5y(t) = 2\frac{dx(t)}{dt} + 2x(t)
> $$

## Related
- [[frequency response|frequency response]] - [[Fourier transform|Fourier transform]] of the [[impulse response|impulse response]]
