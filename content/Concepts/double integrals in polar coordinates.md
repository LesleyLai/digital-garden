---
parent:
  - "[[double integrals|double integral]]"
tags:
  - math/calculus/integration
created: 2024-12-08
modified: 2024-12-08
publish: true
---
Sometimes it is more convenient to evaluate a double integral in [[./polar coordinates|polar coordinates]]. To do that, we can perform the substitutions
$$
\begin{align}
x &= r\cos{\theta} \\
y &= r\sin{\theta}
\end{align}
$$

A caveat is that the area element $dA \neq dr d\theta$ in polar coordinates, and is instead given by
$$
dA = r\,dr\,d\theta
$$

The geometric justification for that is shown in the following figure:

![[../assets/double integrals as polar coordinates.webp|159]]

The area of the small sector is approximately that of a rectangle with width $dr$ and arc length $r d\theta$, hence the area $r,dr,d\theta$.

After finding the area element in the polar coordinate, we can evaluate the integral as an [[iterated integral|iterated integral]] with $r$ and $\theta$ as variables.

**Example** Integrate $z = 1 - x^2 - y^2$ where
$$
\begin{align}
R = \text{quarter disk} \\
x^2 + y^2 \le 1 \\
x \ge 0,\ y \ge 0
\end{align}
$$

We can set this up as an iterated integral of $x$ and $y$, but the result is cumbersome

> [!solution]- Cartesian coordinate approach
> $$
> \begin{align}
> \iint_R 1 - x^2 - y^2 \, dA
> &=\int_{x=0}^1 \int_{y=0}^{\sqrt{ 1 - x^2 }} 1 - x^2 - y^2 \, dy \, dx  \\
> &= \int_{x=0}^1 \left[ y - x^2y - \frac{y^3}{3} \right]^{\sqrt{ 1 - x^2 }}_{y=0} dx \\
> &= \int_{x=0}^1  \sqrt{ 1 - x^2 } - x^2 \sqrt{ 1 - x^2 } - \frac{(1 - x^2)^{3/2}}{3} \, dx \\
> &= \frac{2}{3} \int_{x=0}^1 (1 - x^2)^{3/2} \, dx
\end{align}
> $$
> Now we performs [[trigonometric substitution|trig substitution]]. Let $x = \sin(\theta)$, $dx = \cos(\theta)\, d\theta$, then
> $$
> \begin{align}
> & \frac{2}{3} \int_{x=0}^1 (1 - x^2)^{3/2} \, dx \\
> &= \frac{2}{3} \int_{\theta=0}^{\pi/2} (1 - \sin^2 \theta)^{3/2} \cos(\theta) \,d\theta \\
> &= \frac{2}{3} \int_{\theta=0}^{\pi/2} (\cos(\theta))^3 \cos(\theta) \,d\theta \\
> &= \frac{2}{3} \int_{\theta=0}^{\pi/2} \cos^4 \theta \,d\theta \\
> &= \frac{2}{3} \int_{\theta=0}^{\pi/2} \left( \frac{1 + \cos{2\theta}}{2} \right)^2 \, d\theta \\
> &= \frac{2}{3} \int_{\theta=0}^{\pi/2} \left( \frac{1}{4} + \frac{1}{2} \cos{2\theta} + \frac{1}{4}\cos^2 2\theta \right) \, d\theta \\
> &= \frac{2}{3} \int_{\theta=0}^{\pi/2} \left( \frac{1}{4} + \frac{1}{2} \cos{2\theta} + \frac{1}{4}\left(\frac{1 + \cos{2\theta}}{2} \right) \right) \, d\theta \\
> &= \dots \\
> &= \frac{\pi}{8}
> \end{align}
> $$

If we use polar coordinates, the program become much simpler:

> [!solution]- The polar coordinate way
> $$
> \begin{align}
> &\iint_R 1 - x^2 - y^2 \, dA \\
> &= \int_{r = 0}^1 \int_{\theta = 0}^{\pi/2} (1 - r^2)r \, d\theta  \, dr  \\
> &= \frac{\pi}{2} \int_{r = 0}^1 r - r^3 \, dr \\
> &= \frac{\pi}{8}
> \end{align}
> $$