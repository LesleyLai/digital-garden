---
parent:
  - "[[Laplace transform|Laplace transform]]"
tags:
  - math/LaplaceTransform
aliases:
  - Bromwich Integral
created: 2024-11-08
modified: 2024-11-10
publish: true
---
The **inverse Laplace transform** is given by the **Bromwich Integral**:
$$
f(t) = \mathcal{L}^{-1}\{F(s)\}(t) = \frac{1}{2 \pi i} \lim_{ n \to \infty } \int_{\gamma - i\infty}^{\gamma + i\infty} e^{st} F(s) \, ds  
$$
where $\gamma$ is a real constant chosen to [[./region of convergence for Laplace transform|ensure convergence of the integral]].

## Solving Inverse Laplace Transform by Pattern Matching
Solving the Bromwich integral requires [[contour integration|integration in complex plane]], which can be complicated. Though we can often evaluating inverse Laplace transform by pattern-matching with the table of inverse Laplace transform.

> [!example]- Example: What is the inverse Laplace transform of $F(s) = \frac{3!}{(s - 2)^4}$
> Let $y(t) = t^3$, we have
> $$
> \mathcal{L}\{y\} = Y(s) = \frac{3!}{s^4}
> $$
> And we can have $Y(s - 2) = F(s) = \frac{3!}{(s - 2)^4}$
> Applying the frequency shifting property,
> $$
> \mathcal{L^{-1}}\left( \frac{3!}{(s - 2)^4} \right) = \mathcal{L^{-1}}(F(s)) = \mathcal{L^{-1}}(Y(s - 2)) = e^{2t}y(t) = e^{2t} t^3
> $$

> [!example]- Example: What is the inverse Laplace transform of $F(s) = \frac{2(s-1)e^{-2s}}{s^2 - 2s + 2}$?
> $$
> \begin{align}
> F(s) &= \frac{2(s-1)e^{-2s}}{s^2 - 2s + 2} \\
> &= \frac{2(s-1)e^{-2s}}{(s - 1)^2 + 1}
> \end{align}
> $$
> We know that
> $$
> \begin{align}
> \mathcal{L}\{\cos{t}\} &= \frac{s}{s^2 + 1} \\
> \mathcal{L}\{e^{1t}\cos{t}\} &= \frac{(s - 1)}{(s - 1)^2 + 1}
> \end{align}
> $$
> Let $g(t) = e^t \cos(t)$ => $G(s) = \frac{(s - 1)}{(s - 1)^2 + 1}$, and $F(s) = 2 e^{-2s}  G(s)$
> Which means
> $$
> \mathcal{L}^{-1}\{2 e^{-2s} F(s)\} = 2 \mathcal{L}^{-1}\{e^{-2s} F(s)\} = 2 u_2(t) g(t - 2)
> $$
> Thus
> $$
> \mathcal{L}^{-1}\left( \frac{2(s-1)e^{-2s}}{s^2 - 2s + 2} \right) =  2 u_2(t) e^{t - 2}\cos{(t - 2)}
> $$

## Inverse Laplace Transforms and ROCs
Given an function in the [[./complex frequency|s-plane]], the inverse Laplace transform of the **unilateral Laplace transform** is **unique**. This uniqueness is due to the implicit assumption of [[./causal signal|causality]] in the unilateral transform, which restricts the [[./region of convergence for Laplace transform|region of convergence]] to a right-half plane in the s-plane.

By contrast, for a **bilateral Laplace transform**, the inverse Laplace transform is **not unique** and depend on the region of convergence.

> [!example]- Example: what is the inverse (bilateral) Laplace transform of $\frac{2s}{s^2 - 4}$?
> Expand with partial fractions:
> $$
> \frac{2 s}{s^2-4}=\underbrace{\frac{1}{s+2}}_{\text {pole at $-2$}}+\underbrace{\frac{1}{s-2}}_{\text {pole at } 2}
> $$
> For the pole at $-2$, we either have a function $e^{-2t}u(t)$ if $Re(s) > -2$ or $-e^{-2t} u(-t)$ otherwise.
> For the pole at $2$, we either have a function $e^{2t}u(t)$ if $Re(s) > 2$ or $-e^{2t} u(-t)$ otherwise.
>
> Thus, we have three possible functions
> - $e^{-2t}u(t) + e^{2t}u(t)$ if $Re{s} > 2$
> - $e^{-2t}u(t) - e^{2t}u(-t)$ if $-2 < Re{s} < 2$
> - $-e^{-2t}u(-t) - e^{2t}u(-t)$ if $Re{s} < -2$
