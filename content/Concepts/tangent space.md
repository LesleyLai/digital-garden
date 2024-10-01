---
aliases:
  - tangent line
  - tangent plane
created: 2024-01-30
modified: 2024-09-29
parent:
  - "[[calculus|calculus]]"
publish: true
tags:
  - math/calculus/differentiation
  - math/geometry
---
## Tangent Space for a Function
The tangent space for a function $f(\mathbf{x})$ at $\mathbf{x_0}$ is
$$
\begin{align}
f(\mathbf{x}_0) + \nabla f(\mathbf{x}_0)(\mathbf{x} - \mathbf{x}_0)
\end{align}
$$
The equation represents a first-order [[./Taylor series|Taylor approximation]] of the function around $\mathbf{x}_0$.

### One-Dimensional Case
For a one-dimensional function $f(x)$, the tangent space reduces to a **tangent line**. The equation of the tangent line at a point $x_0$ is:
$$y(x) = f(x_{0})+'(x_{0})(x-x_{0})$$
![[../assets/tangent line.png|400]]
### Two-Dimensional Case
For a two-dimensional function $f(x, y)$, the tangent space becomes a **tangent plane**. The equation of the tangent plane at a point $(x_0, y_0)$ is:
$$z(x, y) = f(x_{0}, y_{0})+f_x(x_{0}, y_{0})(x-x_{0})+f_y(x_{0}, y_{0})(y-y_{0})$$
![[../assets/tangent_plane.png|tangent_plane.png]]
> [!example]- Example: find the tangent plane to $z = f(x, y) = x^2 + y^3$ at $(-1, 2)$
> ![[../assets/tangent-plane.png|200]]
> $$
> \begin{align}
> z &= f(-1, 2) + f_{x}(-1, 2)(x + 1) + f_{y}(-1, 2)(y - 2) \\
> &= 9 + \left(2x)\right|_{x = -1}(x + 1) + \left(3y^2)\right|_{y = 2}(y - 2) \\
> &= 9 - 2(x + 1) + 12(y - 2) \\
> &= -17 - 2x + 2y
> \end{align}
> $$

## Tangent Space for Implicitly Surface
See: [[implicit differentiation|implicit differentiation]]

For an implicit defined surface  $f(\mathbf{x}) = 0$ at a point $\mathbf{x}_0$, the tangent is
$$
{\nabla f}(\mathbf{x_0}) \cdot (\mathbf{x} - \mathbf{x}_0) = 0
$$
The intuition for the above equation is that the gradient is the [[./tangential normal and binormal vectors|normal]] for implicit surfaces:
![[../assets/gradient 3d implicit surface.jpg|360]]

### Three-Dimensional Case
In 3D, The tangent plane of surface $f(\mathbf{x}) = f(x, y, z) = 0$ at a point $\mathbf{x}_0 = (a, b, c)$ is
$$
f_x (x - a) + f_y (y - b) + f_z (z - c) = 0
$$

![[../assets/tangent plane 1.png|300]]   ![[../assets/tangent plane 2.png|333]]

> [!example]- find the tangent plane of the surface $x^3 - yz + \sin(x) = \pi - 20$ at $(\pi, 4, 5)$
> Find all the first order partials
> $$
> \begin{aligned}
> &F_x=3 x^2+\cos (x)=3 \pi^2-1\\
> &F_y=-z=-5\\
> &F_z=-y=-4
> \end{aligned}
> $$
> Putting together, we get
> $$(3 \pi^2-1)(x- \pi) - 5(y - 4) -4(z - 5) = 0$$

## See also
- [[./linearization|linear approximation]]
- [[./equation of lines|equation of lines]]
- [[./equation of planes|equation of planes]]
- [[./gradient|gradient]]