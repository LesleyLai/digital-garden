---
created: 2024-01-08
modified: 2024-03-14
parent:
  - "[[Geometrical optics|Geometrical optics]]"
publish: true
tags:
  - Geometrical_optics
---

# Total Internal Reflection
Consider the [[./Snell's Law|Snell's Law]] $n_1 \sin_{\theta_1} = n_2 \sin_{\theta_2}$, when light is moving from a more optically dense medium to a less optically dense medium ($\frac{n_1}{n_2} > 1$), light incident on boundary from large enough angle will not exit medium.

We can show this fact If we work through the $\cos$ of the angle by Snell's law:
$$
 \begin{aligned}
  \cos(\theta_t)
  &= \sqrt{1 - \sin^2{\theta_t}} \\
  &= \sqrt{1 - (\frac{n_i}{n_t})^2 \sin^2{\theta_i}} \\
  &= \sqrt{1 - (\frac{n_i}{n_t})^2 (1 - \cos^2{\theta_i})}
 \end{aligned}
$$
if $1 - (\frac{n_i}{n_t})^2 (1 - \cos^2{\theta_i}) < 0$, then we doesn't have a solution.