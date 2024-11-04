---
parent:
  - "[[convolution|convolution]]"
tags:
  - math/convolution
created: 2024-11-04
modified: 2024-11-04
publish: true
---
The **Time scaling properties of convolution** states that if we [[./signal operations|time scale]] both the inputs of the convolutions by $a$, the convolution result we get is also time scaled by $a$ (and multiplied by $|1/a|$). 

In other word, if $f(t) * g(t) = c(t)$, then
$$f(at) * g(at) = \left|\frac{1}{a}\right|\ c(at)$$
## Proof
First we apply the definition of convolution
$$
f(t) * g(t) = \int_{\tau = -\infty}^{\infty} f(\tau) g(t - \tau) \, d\tau 
$$
If we put in $at$ instead of $t$ as input, we get
$$
f(at) * g(at) = \int_{\tau = -\infty}^{\infty} f(a\tau) g(at - a\tau) \, d\tau 
$$
Then we can [[integration by substitution|substitute]] in $u = a \tau$ ($du = a d\tau$). We have two cases for $a > 0$ and $a < 0$.

When $a > 0$, $u = at \to \infty$ when $\tau \to \infty$, and
$$
\begin{align}
f(at) * g(at) &= \frac{1}{a}\int_{u = -\infty}^{\infty} f(u) g(at - u) \, du \\
&= \frac{1}{a} c(at)
\end{align}
$$

When $a < 0$, $u = at \to -\infty$ when $\tau \to \infty$, and
$$
\begin{align}
f(at) * g(at) &= \frac{1}{a}\int_{u = \infty}^{-\infty} f(u) g(at - u) \, du \\
&= \frac{1}{a} (-c(at)) \\
&= -\frac{1}{a} c(at)
\end{align}
$$

Combine the results, we get that in both cases:
$$f(at) * g(at) = \left|\frac{1}{a}\right|\ c(at)$$