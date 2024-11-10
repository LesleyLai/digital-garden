---
parent:
  - "[[radius of convergence|radius of convergence]]"
  - "[[./Laplace transform|unilateral Laplace transform]]"
tags:
  - math/LaplaceTransform
created: 2024-10-13
modified: 2024-11-10
aliases:
  - abscissa of convergence for Laplace transform
publish: true
---
The **region of convergence (ROC)** is the range of complex variable $s$ in s-plane for which Laplace transform is finite or converge.

Both [[./Laplace transform|unilateral Laplace transform]] and [[bilateral Laplace transform|bilateral Laplace transform]] have the concept of ROC, though the bilateral Laplace transform requirements for convergence are harder to achieve than the unilateral version.

## ROCs of Unilateral and Bilateral Laplace Transforms
For [[./causal signal|causal signals]], performing unilateral Laplace transform and bilateral Laplace transform will get the same result. This equivalence occurs because all values of a causal signal are zero for negative time, which means the integration from negative infinity to zero (present in the bilateral transform) contributes nothing to the result.

In this case, the radius of convergence is always in the form of $\operatorname{Re}(s)> \sigma$ (the constant $\sigma$ is often referred to as the **abscissa of convergence**).

> [!example]- Example: Find the Laplace transform of $x(t) = e^{-t}u(t)$
> $$
> X(s)=\int_0^{\infty} x(t) e^{-s t} d t=\int_0^{\infty} e^{-t} e^{-s t} d t=\left.\frac{e^{-(s+1) t}}{-(s+1)}\right|_{t = 0} ^{\infty}=\frac{1}{s+1}
> $$
> Note that $\lim_{ t \to \infty } e^{-(s+1) t}$ will only converge if $\operatorname{Re}(s+1)>0$, which implies that $\operatorname{Re}(s)>-1$.
> 
> ![[../assets/ROC example 1.webp|186]]

> [!example]- Example: Find the Laplace transform of $x(t) = (e^{-t} - e^{-2t})\ u(t)$
> ![[../assets/ROC example 2 function.webp|246]]
> $$
> \begin{align}
> X(s) & =\int_0^{\infty}\left(e^{-t}-e^{-2 t}\right) e^{-s t} d t \\
> & =\int_0^{\infty} e^{-t} e^{-s t} d t-\int_0^{\infty} e^{-2 t} e^{-s t} d t \\
> & =\left.\frac{e^{-(s+1) t}}{-(s+1)}\right|_{t = 0} ^{\infty} - \left.\frac{e^{-(s+2) t}}{-(s+2)}\right|_{t = 0} ^{\infty} \\
> & =\frac{1}{s+1}-\frac{1}{s+2} =\frac{1}{(s+1)(s+2)}
> \end{align}
> $$
> These equations converge if $\operatorname{Re}(s+1)>0$ and $\operatorname{Re}(s+2)>0$, thus $\operatorname{Re}(s)>-1$.
> 
> ![[../assets/ROC example 2.webp|161]]

For non-casual signals, we must use bilateral Laplace transform, and the ROC can be more complicated.

> [!example]- Example: Find the bilateral Laplace transform of $-e^{-t}\ u(-t)$
> ![[../assets/Laplace ROC example 3 function.webp|239]]
> $$
> X(s) = \int_{-\infty}^\infty x(t)e^{-st}\, dt = \int_{-\infty}^0 -e^{-t}e^{-st} \, dt = \left.\frac{-e^{-(s+1) t}}{-(s+1)}\right|_{t = -\infty} ^{0} = \frac{1}{s + 1} 
> $$
> provided $\operatorname{Re}(s) < -1$.
> 
> ![[../assets/Laplace ROC example 3.webp|145]]

> [!example]- Example: Find the bilateral Laplace transform of $x(t) = e^{-|t|}$
> ![[../assets/Laplace ROC example 4 function.webp|237]]
> $$
> \begin{align}
> X(s) &= \int_{-\infty}^\infty e^{-|t|} e^{-st} \, dt \\
> &= \int_{-\infty}^0 e^{t} e^{-st} \, dt + \int_{0}^\infty e^{-t} e^{-st} \, dt \\
> &= \left.\frac{e^{-(s-1) t}}{-(s-1)}\right|_{t = -\infty} ^{0} + \left.\frac{e^{-(s +1) t}}{-(s+1)}\right|_{t = 0} ^{\infty} \\
> & =-\underbrace{\frac{1}{s - 1}}_{\operatorname{Re}(s)<1}+\underbrace{\frac{1}{s + 1}}_{\operatorname{Re}(s)>-1} \\
> & =\frac{2}{1-s^2} ; \qquad-1<\operatorname{Re}(s)<1
> \end{align}
> $$
> ![[../assets/Pasted image 20241110173550.webp|169]]

## Relationship with Poles
see also: [[poles and zeros in the S-Plane|poles and zeros in the S-Plane]]

Laplace transforms are often represented as rational functions:
$$
X(s) = \frac{P(s)}{Q(s)}
$$
- The roots of the numerator are the zeros of the Laplace transform.  
- The roots of the denominator are the poles of the Laplace transform

Poles play a crucial role in determining the convergence of Laplace transforms. When $s$ is at a a pole, $Q(s)$ approaches $0$, so $X(s)$ approaches infinity. Thus, the Laplace transform never converge at its poles. And as a result, the ROC of a Laplace transform never includes any of its poles!

Further, poles segregate the s-plane into multiple sections. If a rational Laplace transform has $n$ distinct poles, there can be up to $n + 1$ different possible regions of convergence. As a result, there are $n + 1$ possible [[./inverse Laplace transform|inverse Laplace transform]], with each ROC as a strip or region in the [[./complex frequency|complex frequency domain]] bounded by poles and/or extending to infinity.

## Reference
- [Laplace Transform Region of Convergence Explained - YouTube](https://www.youtube.com/watch?v=SexBL1OlhhU)