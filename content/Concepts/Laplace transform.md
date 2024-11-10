---
parent:
  - "[[./ordinary differential equation|ODE]]"
  - "[[signal processing|signal processing]]"
tags:
  - math/DifferentialEquations
  - math/LaplaceTransform
created: 2024-09-09
modified: 2024-11-10
generalizations:
  - "[[linear transformation|linear operator]]"
  - "[[integral transform|integral transform]]"
aliases:
  - unilateral Laplace transform
  - one-sided Laplace transform
publish: true
---
The **Laplace transform** is an [[integral transform|integral transform]] widely used to solve various physical problems. It is particular useful to solve [[./linear differential equation|linear]] [[./ordinary differential equation|ordinary differential equations]], such as those encountered in the analysis of e [[./electric circuit|electronic circuits]].

Denoted as $\mathcal{L}\{f(t)\}$, the Laplace transform transforms a function from [[./time and frequency domain|time domain to complex frequency domain]]. A common notation for the Laplace transform is to represent the transformed function as the uppercase version of the original time-domain function:
$$
\mathcal{L}\{f(t)\} \longrightarrow F(s)
$$
Where $f(t)$ is the original function in the time domain, and $F(s)$ is the transformed function in the complex frequency domain, with $s$ being a complex variable.

> [!tip] not to be confused with the [[Lie derivative|Lie derivative]], which is also commonly denoted $\mathcal{L}$

Note that the result of a Laplace transform includes not only the algebraic expression but also the [[./region of convergence for Laplace transform|region of convergence]] (ROC).
## Subtopics
- [[bilateral Laplace transform|bilateral Laplace transform]]
- [[./region of convergence for Laplace transform|region of convergence]]
- [[./inverse Laplace transform|inverse Laplace transform]]

## Definition

The **unilateral Laplace transform** $\mathcal{L}$ is the most commonly used form of the Laplace transform and is typically what people refer to as "the" Laplace transform.
$$
F(s) = \mathcal{L}\{f(t)\} = \int_{t=\color{red} 0^-}^\infty e^{-st} f(t) \, dt
$$
where
- $s = \sigma + i\omega$ is a complex variable (see [[./complex frequency|complex frequency]])
- lower limit of integration is $0^-$ to ensure inclusion of [[./Dirac delta|impulse function]] at origin

The unilateral Laplace transform is only appropriate for analyzing [[./causal signal|causal signals]]. There is also a **[[bilateral Laplace transform|bilateral Laplace transform]]** defined as the following:
$$
F(s) = \mathcal{L}\{f(t)\} = \int_{t=\color{red} -\infty}^\infty e^{-st} f(t) \, dt
$$
## Properties
Below are some of the properties of the _unilateral Laplace transform_. The properties of _[[bilateral Laplace transform|bilateral Laplace transform]]_ are similar, but there are some important differences.

| Operations                                    | Time Domain                            | Complex Frequency Domain                        | Comments              |
| --------------------------------------------- | -------------------------------------- | ----------------------------------------------- | --------------------- |
| [[./linear combination|linear combination]]                        | $c_1 f_1(t) + c_2 f_2(t)$              | $c_1 F_1(s) + c_2 F_2(s)$                       |                       |
| time differentiation                          | $f'(t)$                                | $sF(s) - f(0^-)$                                |                       |
|                                               | $f''(t)$                               | $s^2F(s) - sf(0^-) - f'(0^-)$                   |                       |
|                                               | $f^{(n)}(t)$                           | $s^nF(s) - \sum_{k=1}^n s^{n-k} f^{(k-1)}(0^-)$ |                       |
| frequency differentiation                     | $-tf(t)$                               | $\frac{d}{ds}X(s)$                              |                       |
| time integration                              | $\int_{\tau = 0^-}^t f(\tau) \, d\tau$ | $\frac{1}{s}F(s)$                               |                       |
| frequency integration                         | $\frac{1}{t}f(t)$                      | $\int_{x = s}^\infty F(x) \, dx$                |                       |
| [[./signal operations#Shifting\|time shifting]] | $u(t - c)f(t- c)$                      | $e^{-cs}F(s)$                                   | $c > 0$               |
| frequency shifting                            | $e^{at}f(t)$                           | $F(s - a)$                                      |                       |
| [[./signal operations#Scaling\|time scaling]]   | $f(at)$                                | $\frac{1}{a}F\left( \frac{s}{a} \right)$        | $a > 0$               |
| [[./convolution theorem\|time convolution]]     | $f(t) * g(t)$                          | $F(s)\ G(s)$                                    |                       |
| multiplication                                | $f(t)\ g(t)$                           | $\frac{1}{2\pi i} [F(s) * G(s)]$                | frequency convolution |

> [!proof]- Proof of linearity
> $$
> \begin{align}
> \mathcal{L}\{ c_1f(t) + c_2 g(t) \}
> &= \int_{t=0}^\infty e^{-st} (c_1f(t) + c_2 g(t)) \, dt \\
> &= c_1 \int_{t=0}^\infty e^{-st} f(t) \, dt + c_2 \int_{t=0}^\infty e^{-st} g(t) \, dt \\
> &= c_1 \mathcal{L}\{ f(t) \} + c_2\mathcal{L}\{ g(t) \}
> \end{align}
> $$

> [!proof]- Laplace transform of derivatives
> This can be proved by [[./integration by parts|integration by parts]],
> $$
> \begin{aligned}
> \mathcal{L}\{f^{\prime}(t)\}(s) & =\lim _{a \rightarrow \infty} \int_0^a e^{-s t} f^{\prime}(t) d t \\
> & =\lim _{a \rightarrow \infty}\left\{\left[e^{-s t} f(t)\right]_0^a+s \int_0^a e^{-s t} f(t) d t\right\} \\
> & =\lim _{a \rightarrow \infty}\left[e^{-s a} f(a)-f(0)+s \int_0^a e^{-s t} f(t) d t\right] \\
> & =s \mathcal{L}\{f(t)\}-f(0) .
> \end{aligned}
> $$
> The Laplace transform of higher-order derivatives can be derived similarly.

> [!example]- Example: Compute $y(t) = e^{at}u(t) * e^{bt}u(t)$
> $$
> \begin{align}
> \mathcal{L}\{ e^{at}u(t) * e^{bt}u(t) \} &= \frac{1}{s - a} \frac{1}{s - b} \\
> &= \frac{1}{a - b} \left( \frac{1}{s - a} - \frac{1}{s - b} \right) \\
> e^{at}u(t) * e^{bt}u(t) &= \frac{1}{a - b} \mathcal{L}^{-1} \left( \frac{1}{s - a} - \frac{1}{s - b} \right) \\
> &= \frac{1}{a - b}(e^{at} - e^{bt}) u(t)
> \end{align}
> $$

## Tables
A table of several important unilateral Laplace transforms is given below.

| Function                      | $f(t)$               | $F(s) = \mathcal{L}\{f(t)\}(s)$ | [[./region of convergence for Laplace transform\|Region of convergence]] |
| :---------------------------- | -------------------- | ------------------------------- | ---------------------------------------------------------------------- |
| constant                      | 1                    | $\frac{1}{s}$                   | $Re(s) > 0$                                                            |
| linear                        | $t$                  | $\frac{1}{s^2}$                 | $Re(s) > 0$                                                            |
| n-th power                    | $t^n \cdot u(t)$     | $\frac{n!}{s^{n+1}}$            | $Re(s) > 0$                                                            |
| exponential                   | $e^{at} \cdot u(t)$  | $\frac{1}{s-a}$                 | $Re(s) > a$                                                            |
| sine                          | $\sin{(at)}u(t)$     | $\frac{a}{s^2 + a^2}$           | $Re(s) > 0$                                                            |
| cosine                        | $\cos{(at)}u(t)$     | $\frac{s}{s^2 + a^2}$           | $Re(s) > 0$                                                            |
| [[./Dirac delta\|unit impulse]] | $\delta(t)$          | $1$                             | all s                                                                  |
|                               | $\delta(t - c) f(t)$ | $e^{-sc} f(c)$                  | $Re(s) > 0$                                                            |
| unit step                     | $u(t)$               | $\frac{1}{s}$                   | $Re(s) > 0$                                                            |

> [!example]- Derive $\mathcal{L}\{1\}$
> $$
> \mathcal{L}\{1\} = \int_{t=0}^\infty e^{-st} \, dt = \lim_{ n \to \infty } \left( \frac{1}{s} e^{-sn} + \frac{1}{s} \right) = \frac{1}{s}
> $$

> [!example]- Derive $\mathcal{L}\{e^{at}\}$
> $$
> \begin{align}
> \mathcal{L}\{e^{at}\} &= \int_{t=0}^\infty e^{-st} e^{at} \, dt \\
> &= \int_{t=0}^\infty e^{(a - s)t} \, dt \\
> &= \frac{1}{a - s} [e^{(a - s)t}]\biggr\rvert_{t=0}^{\infty} \\
> &= \frac{1}{a - s} (0 - 1) & (\text{if } a < s) \\
> &= \frac{1}{s - a}
> \end{align}
> $$
>Insight: we can view $\mathcal{L}\{1\}$ as $\mathcal{L}\{e^{0t}\}$, and indeed they get the consistent result.

> [!example]- Derive $\mathcal{L}\{ \delta{(t - c)} f(t) \} = e^{-sc}f(c)$
> Note that $\int_{-\infty}^{\infty} \delta(t) \, dt = 1$
> $$
> \begin{align}
> \mathcal{L}\{\delta(t - c) f(t)\} &= \int_{t=0}^\infty e^{-st} \delta(t - c) f(t) \, dt & \text{(Assuming $c > 0$)} \\
> &= \int_{t=0}^\infty e^{-sc} f(c) \delta(t - c) \, dt \\
> &= e^{-sc} f(c) \int_{t=0}^\infty \delta(t - c) \, dt \\
> &= e^{-sc} f(c)
> \end{align}
> $$
## Laplace Transform to Solve Differential Equation
The Laplace transform is a powerful tool for solving differential equations. When applied to a differential equation, it typically converts the problem into an algebraic equation that we can readily solve with algebra.

> [!example]- Example: solve $y'' + y = \sin{2t},\ y(0) = 2,\ y'(0) = 1$
> $$
> \begin{align}
> \mathcal{L}\{y''\} &= s^2\mathcal{L}\{y\} - sy(0) - y'(0) = s^2Y(s) - sy(0) - y'(0) \\
> &= s^2Y(s) - 2s - 1 \\
> \mathcal{L}\{y'' + y - \sin{2t}\} &= s^2Y(s) - 2s - 1 + Y(s) - \frac{2}{s^2 + 4} = 0 \\
> (s^2 + 1) Y(s) &= \frac{2}{s^2 + 4} + 2s + 1 \\
> Y(s) &= \frac{2}{(s^2 + 4)(s^2 + 1)}  + \frac{2s}{s^2 + 1} + \frac{1}{s^2 + 1} \\
> \frac{2}{(s^2 + 4)(s^2 + 1)} &= \frac{As + B}{s^2 + 4} + \frac{Cs + D}{s^2 + 1} \quad \text{(partial fraction decomposition)}
> \end{align}
> $$
> $$
> \begin{align}
> As^3 + As + Bs^2 + B + Cs^2 + 4Cs + Ds^2 + 4D &= 2 \\
> (A + C)s^3 + (B + D)s^2 + (A + 4C)s + (B + 4D) &= 2 \\
> A + C = 0 \\
> B + D = 0 \\
> A + 4C = 0 \\
> B + 4D + 2 \\
> A = 0,\ B = -\frac{2}{3},\ C = 0,\ D = \frac{2}{3}
> \end{align}
> $$
> Go back
> $$
> \begin{align}
> Y(s) &= \frac{2}{(s^2 + 4)(s^2 + 1)}  + \frac{2s}{s^2 + 1} + \frac{1}{s^2 + 1} \\
> &= -\frac{1}{3}\left( \frac{2}{s^2 + 4} \right) + \frac{2}{3}\left( \frac{1}{s^2 + 1} \right) + 2 \frac{s}{s^2 + 1} + \frac{1}{s^2 + 1} \\
> &= -\frac{1}{3}\left( \frac{2}{s^2 + 4} \right) + \frac{5}{3}\left( \frac{1}{s^2 + 1} \right) + 2 \frac{s}{s^2 + 1} \\
> y(s) &= \mathcal{L^{-1}}\{Y\} = -\frac{1}{3}\sin{2t} + \frac{5}{3}\sin{t} + 2\cos{t}
> \end{align}
> $$

## Related
- Solving Laplace transform problem often involves [[partial fraction decomposition|partial fraction decomposition]]

## Reference
- [Laplace Transform -- from Wolfram MathWorld](https://mathworld.wolfram.com/LaplaceTransform.html)