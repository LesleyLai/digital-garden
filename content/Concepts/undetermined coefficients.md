---
created: 2024-09-15
modified: 2024-09-15
parent:
  - "[[ordinary differential equation|ordinary differential equation]]"
publish: true
tags:
  - math/DifferentialEquations
---

# Method of Undetermined Coefficients

**Undetermined coefficients** is a method to solve non-[[homogeneous differential equation|homogeneous]] linear differential equations.

The solution of a nonhomogeneous equation can be expressed as the sum of the solution to its corresponding homogeneous equation and a particular solution. For example, consider the following equation:
$$
Ay'' + By' + Cy = g(x)
$$
Let $y_h$ represent the general solution to the homogeneous equation, i.e.,
$$Ay_h'' + By_h' + Cy_h = 0$$
and let $y_g$ be a particular solution to the nonhomogeneous equation:
$$$Ay_g'' + By_g' + Cy_g = g(x)$$
The sum of  and  will be the general solution to the original nonhomogeneous solution.

We can see why this is true by doing some algebraic manipulation:
$$
\begin{align}
Ay_h'' + By_h' + Cy_h &= 0 \\
Ay_g'' + By_g' + Cy_g &= g(x) \\
A(y_h'' + y_g'') + B(y_h' + y_g') + C(y_h + y_g) &= g(x) & \text{(sum of above equations)}
\end{align}
$$

## Examples
> [!example]+ Example: Solve $y'' - 3y' - 4y = 3 e^{2x}$
> First we solve the homogeneous equation $y'' - 3y' - 4 = 0$
> $$
\begin{align}
r^2 - 3r - 4 &= 0 \\
(r - 4)(r + 1) &= 0
\end{align}
> $$
> Thus, $y_h = C_1 e^{4x} + C_2 e^{-x}$
> Then we guess the particular solution as $y_p = Ae^{2x}$, and $y'_{p} = 2Ae^{2x}$,  $y''_{p} = 4Ae^{2x}$, substitute back to the original equation
> $$
\begin{align}
4Ae^{2x} - 6Ae^{2x} - 4Ae^{2x} &= 3e^{2x} \\
A &= -\frac{1}{2} \\
y_p &= -\frac{1}{2}e^{2x}
\end{align}
> $$
> The general solution is $y_h + y_p$:
> $$
y = C_1 e^{4x} + C_2 e^{-x} - \frac{1}{2}e^{2x}
> $$

> [!example]+ Example: solve $y'' - 3y' - 4y = 4x^2$
> From the above example, $y_h = C_1 e^{4x} + C_2 e^{-x}$
> Let $y_p = Ax^2 + Bx + C$, then
> $$
\begin{align}
y_p' &= 2Ax + B \\
y_p'' &= 2A \\
\end{align}
> $$
> Substitute back:
> $$
\begin{align}
2A - 3(2Ax + B) - 4(Ax^2 + Bx + C) &= 4x^2 \\
-4Ax^2 + (-6A - 4B)x + 2A - 3B - 4C &= 4x^2 \\
A = -1, B = \frac{3}{2}, C = -\frac{13}{8}
\end{align}
> $$
> Thus,
> $$
y = C_1 e^{4x} + C_2 e^{-x} -x^2 + \frac{3}{2}x - \frac{13}{8}
> $$