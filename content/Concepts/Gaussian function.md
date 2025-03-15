---
parent:
  - "[[special functions|special functions]]"
tags:
  - math/functions
created: 2025-03-11
modified: 2025-03-11
publish: true
---
A Gaussian function is a function of the base form
$$
f(x) = \exp(-x^2)
$$
and with parametric extension
$$
f(x) = a \exp \left( -\frac{(x - b)^2}{2c^2} \right)
$$
for arbitrary real constants $a$, $b$, and non-zero $c$.

The graph of a Gaussian function is a [[./normal distribution|bell curve]] shape, commonly associated with the Gaussian distribution.

## Integral of the Gaussian Function
Integrate the Gaussian function directly is hard, but we can use a trick. [^1] Let $I = \int_{-\infty}^{\infty} e^{x^2} \, dx$,
$$
\begin{align}
I^2 &= \left( \int_{x = -\infty}^\infty e^{-x^2} \, dx  \right) \cdot \left( \int_{y =-\infty}^\infty e^{-y^2} \, dy  \right) \\
&= \int_{y = -\infty}^\infty \int_{x = -\infty}^\infty e^{-(x^2 + y^2)} \, dx \, dy
\end{align}
$$
We can now [[./double integrals in polar coordinates|integrate the above integral in polar coordinates]]: $x^2 + y^2 = r^2$, $dx \, dy = r \ d\theta \, dr$. Therefore
$$
\begin{align}
I^2 &= \iint e^{-r^2}r\,d\theta\,dr \\
&=\int_0^{2\pi}\left(\int_0^\infty re^{-r^2}dr\right)d\theta \\
&=2\pi\int_0^\infty re^{-r^2}dr
\end{align}
$$
Next, we [[integration by substitution|change variables]] so that $u = r^2$, $du = 2r \ dr$, then
$$
\begin{align}
2I^2 &=2\pi\int_{r=0}^\infty 2re^{-r^2}dr \\
&= 2\pi \int_{u=0}^\infty e^{-u} du \\
&= 2\pi \left(-e^{-\infty}+e^0\right) \\
&= 2\pi \left(-0+1\right) \\
&= 2\pi
\end{align}
$$
Therefore, $I = \sqrt{ \pi }$.

## See Also
- [[./normal distribution|Gaussian distribution]]

[^1]: [calculus - Is there really no way to integrate $e^{-x^2}$? - Mathematics Stack Exchange](https://math.stackexchange.com/questions/154968/is-there-really-no-way-to-integrate-e-x2)