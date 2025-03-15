---
parent:
  - "[[multiple integrals|multiple integrals]]"
  - "[[change of variables|change of variables]]"
tags:
  - math/calculus/integration
created: 2025-03-03
modified: 2025-03-11
publish: true
---
[[./double integrals|Double integrals]] in $x, y$ coordinates which are taken over circular regions or have integrands involving $x^2 + y^2$ are often better [[./double integrals in polar coordinates|done in polar coordinates]]:
$$
\iint_{R} f(x, y) \, dx dy = \iint_{R} g(r, \theta) r \,  dr d\theta 
$$
where
$$
\begin{align}
r &= \sqrt{ x^2 + y^2 } \\
\theta &= \tan^{-1}\left( \frac{y}{x} \right) \\
x &= r \cos(\theta) \\
y &= r \sin(\theta)
\end{align}
$$

More generally, double integrals can sometimes be simplified by changing variables from $(x, y)$ to a new coordinate system $(u, v)$ that is better adapted to the region or integrand.
$$
\begin{align}
u = u(x, y)&, \quad v = v(x, y) \\
x = x(u, v)&, \quad y = y(u, v)
\end{align}
$$
When we change variables, the area of the integration changes. The scaling factor for this change is given by the [[./Jacobian|Jacobian determinant]]:
$$
\det J = \frac{\partial(x, y)}{\partial(u, v)} = \det \begin{bmatrix}
\frac{\partial{x}}{\partial{u}} & \frac{\partial{x}}{\partial{v}} \\
\frac{\partial{y}}{\partial{u}} & \frac{\partial{y}}{\partial{v}}
\end{bmatrix}
$$
Using the determinant, the formula for the area element in the $u, v$-system is given by
$$
dA = \left|\det J \right| \, du \, dv
$$
This leads to the change of variables formula:
> [!definition] Change of variable formula
> $$
> \int \int_{R} f(x, y)  \, dx  \, dy = \int \int_{R} g(u, v) |\det J| \, du  \, dv 
> $$
> While determinant can be negative, we always use the positive value here

> [!info] Alternative Jacobian convention
> Some sources compute the Jacobian
> $$
> \frac{\partial(u, v)}{\partial(x, y)} = \det \begin{bmatrix}
> \frac{\partial{u}}{\partial{x}} & \frac{\partial{u}}{\partial{y}} \\
> \frac{\partial{v}}{\partial{x}} & \frac{\partial{v}}{\partial{y}}
> \end{bmatrix}
> $$
> However, $\frac{\partial(u, v)}{\partial(x, y)} = \frac{1}{\frac{\partial(x, y)}{\partial(u, v)}}$, so so either convention is valid.

## Example: Polar Coordinate
See: [[./double integrals in polar coordinates|done in polar coordinates]]

We can verify the power-coordinate transformation using the above formula
$$
\det J = \frac{\partial(x, y)}{\partial(r, \theta)} = \det \begin{bmatrix}
x_{r} & x_{\theta} \\
y_{r} & y_{\theta}
\end{bmatrix} = \det \begin{bmatrix}
\cos{\theta} & -r \sin{\theta} \\
\sin{\theta} & r \cos{\theta}
\end{bmatrix} =
r (\cos^2 \theta + \sin^2 \theta) = r
$$

## Example: Diagonal Region
> [!example]- Compute $\iint_{R} \left( \frac{x + y}{2 - x + y} \right)^4 dx \, dy$, where $R$ is the square with vertices at $(1, 0), (0, 1), (-1, 0), (0, -1)$
> Since the region is bounded by the lines $x + y = \pm 1$ and $x - y = \pm 1$, we make a change of variables:
> $$
> u = x + y \quad v = x - y
> $$
> ![[../assets/change variables in multiple integrals example 2.webp|558]]
> Notice that the area of integration changes from 2 to 4. We can verify that by computing the Jacobian: $\frac{\partial(u, v)}{\partial(x, y)}=-2 \Rightarrow \frac{\partial(x, y)}{\partial(u, v)}=-1 / 2$.
> Thus, $dx \ dy=\frac{1}{2} du \ dv$.
> Using either method 1 or method 2 we see the boundaries are given by $u= \pm 1, v= \pm 1 \Rightarrow$ the integral is $\iint_R\left(\frac{x+y}{w-x+y}\right)^4 \, dx d y=\int_{-1}^1 \int_{-1}^1\left(\frac{u}{2-v}\right)^4 \frac{1}{2} \, du dv$.
> $$
> \text { Inner integral }=\left.\frac{u^5}{10(2-v)^4}\right|_{u=-1} ^{u=1}=\frac{1}{5(2-v)^4} 
> $$
> $$\text { Outer integral }==\left.\frac{1}{15(2-v)^3}\right|_{-1} ^1=\frac{26}{405}$$

## Reference
- [Session 53: Change of Variables | Multivariable Calculus | Mathematics | MIT OpenCourseWare](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/pages/3.-double-integrals-and-line-integrals-in-the-plane/part-a-double-integrals/session-53-change-of-variables/)