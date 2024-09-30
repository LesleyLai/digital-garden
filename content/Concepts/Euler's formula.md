---
aliases:
  - complex exponential
created: 2023-05-30
modified: 2024-09-08
parent:
  - "[[complex numbers|complex numbers]]"
publish: true
tags:
  - math/complex
---
> [!definition] Definition: Euler's formula
> For any real $\theta$
> $$
e^{i\theta} = \cos{\theta} + i \sin{\theta}
> $$

The **Euler's formula** can be seen as a definition of the **complex exponential**.

## Trig Functions to Exponential Functions
We can derive $e^{-i\theta} = \cos{\theta} - i \sin{\theta}$. Adding or subtracting it with the original Euler's formula:
$$
\begin{aligned}
& \cos (\theta)=\frac{\left(e^{i \theta}+e^{-i \theta}\right)}{2} \\
& \sin (\theta)=\frac{\left(e^{i \theta}-e^{-i \theta}\right)}{2i}
\end{aligned}
$$

> [!example]- Example: Use the Euler's formula to compute $\int \sin^2(t) \ dt$
> $$
\begin{align}
\int \sin^2(t) \ dt  &= \int \left( \frac{e^{it} - e^{-it}}{2i} \right)^2 \, dt  \\
&= -\frac{1}{4} \int e^{2it} + e^{-2it} - 2 \, dt  \\
&= -\frac{1}{4}\left( \frac{e^{2it}}{2i} - \frac{e^{-2it}}{2i} + 2t \right) + C \\
&= -\frac{1}{4} \left( \frac{\cos(2t) + i\sin(2t)}{2i} + \frac{\cos(-2t) + i\sin(-2t)}{-2i} \right) - \frac{1}{2}t + C \\
&= -\frac{1}{4} \left( \frac{\cos(2t) + i\sin(2t)}{2i} -\frac{\cos(2t) - i\sin(2t)}{2i} \right) + \frac{1}{2}t + C \\
&= -\frac{1}{4} \sin(2t) + \frac{1}{2}t + C
\end{align}
> $$

## Some Intuition
There are two ways to represent complex numbers:
- Cartesian form: $z = x + iy$
- Polar form: $z = polar(r, \theta)$
![[../assets/complex-cartesian-polar.png|complex-cartesian-polar.png]]
From $z = x + iy$, if we substitute $x$ and $y$ with $r$ and $\theta$, we get
$$
z = r(\cos{\theta} + i\sin{\theta})
$$
If we multiply two complex numbers, their *magnitude multiply but their angle adds*:
$$
\begin{align}
z_1 &= r_1(\cos{\theta_1} + i\sin{\theta_1}) \\
z_2 &= r_2(\cos{\theta_2} + i\sin{\theta_2}) \\
z_1 z_2 &= r_1 r_2 (\cos{\theta_1} + i\sin{\theta_1}) (\cos{\theta_2} + i\sin{\theta_2}) \\
&= r_1 r_2 \left((\cos{\theta_1}\cos{\theta_2} - \sin{\theta_1}\sin{\theta_2}) + i(\cos{\theta_1}\sin{\theta_2} - \cos{\theta_2}\sin{\theta_1})\right) \\
&= r_1 r_2 (\cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2))
\end{align}
$$
And a function with this property is the exponential function: $r_1e^{\theta_1} * r_2e^{\theta_2} = r_1r_2 e^{\theta_1 \theta_2}$, which is a clue that complex number can behave like exponential functions. [^1] And indeed, defining $z = re^{i\theta}$ works well.

## Derivation

We can derive the Euler's formula using the [[Maclaurin series|Maclaurin series]]
$$
\begin{align}
e^{i\theta} &= 1 + i\theta + \frac{(i\theta)^2}{2!} + \frac{(i\theta)^3}{3!} + \frac{(i\theta)^4}{4!} + \frac{(i\theta)^5}{5!} +\dots  \\
&= 1 + i\theta - \frac{\theta^2}{2!} - i\frac{\theta^3}{3!} + \frac{\theta^4}{4!} + i\frac{\theta^5}{5!} + \dots \\
&= \underbrace{\left( 1 - \frac{\theta^2}{2!} + \frac{\theta^4}{4!}  + \dots \right)}_{\cos{\theta}} + i \ \underbrace{\left( \theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!} + \dots \right)}_{\sin{\theta}}  \\
&= \cos{\theta} + i \sin{\theta}
\end{align}
$$

## De Moivre's Formula
Main: [[De Moivre's formula|De Moivre's formula]]

An application of the Euler's formula is the De Moivre's formula:
$$
(\cos{x} + i \sin{x})^n = \cos{(nx)} + i \sin{(nx)}
$$
We can derive it with the following
$$
\begin{align}
(\cos{x} + i \sin{x})^n &= (e^{ix})^n \\
&= e^{inx} \\
&= \cos{(nx)} + i \sin{(nx)}
\end{align}
$$

[^1]: [Notes on the Euler formula - Eli Bendersky's website](https://eli.thegreenplace.net/2024/notes-on-the-euler-formula/)