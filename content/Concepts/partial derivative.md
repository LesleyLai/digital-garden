---
tags:
  - math/calculus/differentiation
parent:
  - "[[derivative|derivative]]"
aliases:
  - partial derivatives
created: 2023-05-30
modified: 2024-06-15
publish: true
---
**Partial derivative** can be calculated by pretending other variables in a multi-input functions as constant. It is often denoted as $\frac{\partial f}{\partial x}$ or $f_{x}$.

> [!example]-
> For example, if we have a function
> 
> $$
> f (x, y, z) = x^3 y - 5 x y z^2
> $$
> 
> we will have
> 
> $$
> \begin{aligned}
> \frac{\partial f}{\partial x} &= 3x^2y - 5yz^2 \\
> \frac{\partial f}{\partial y} &= 3x^3 - 5xz^2 \\
> \frac{\partial f}{\partial z} &= -10xyz
> \end{aligned}
> $$

## Higher Order Partial Derivatives
$f_{xy} = f_{yx}$ [[./symmetry of second derivatives|if both exists and are continuous]].

## With Dependent Variables
When the variables in a function are not independent, an expression like $\frac{\partial w}{\partial x}$ *has no definite meaning*. And we need notations like 
$$\left(\frac{\partial f}{\partial x}\right)_{y, t}$$
to explicitly hold variables constant (in this case, $y$ and $t$ are hold constant)

> [!example]- Example: Say $f(x, y) = x + y$
> then $\frac{\partial f}{\partial x} = 1$.
> Let's set $x = u$ and $y = u + v$, then $f(u, v) = 2u + y$, and $\frac{\partial f}{\partial u} = 2$.So $x = u$, but $\frac{\partial f}{\partial u} \neq \frac{\partial f}{\partial x}$.
> This is because 
> - when we are writing  $\frac{\partial f}{\partial x}$, it means we are varying $x$ while keeping $y$ constant.
> - when we are writing $\frac{\partial f}{\partial u}$, it means we are varying $u = x$ while keeping $v = y - x$ constant
> We can use the explicit notation instead:
> $$
\left(\frac{\partial f}{\partial x}\right)_y= 1 \text{ and } \left(\frac{\partial f}{\partial u}\right)_v= 2
> $$

> [!example]- Example: Find $\left(\frac{\partial w}{\partial y}\right)_{x, t}, \quad$ where $w=x^3 y-z^2 t \quad$ and $\quad x y=z t$.
> Solution 1. Using the [[./chain rule|chain rule]] and the two equations in the problem, we have
> $$
\left(\frac{\partial w}{\partial y}\right)_{x, t}=x^3-2 z t\left(\frac{\partial z}{\partial y}\right)_{x, t}=x^3-2 z t \frac{x}{t}=x^3-2 z x .
>$$
> Solution 2. We take the [[./total differential|differentials]] of both sides of the two equations in the problem:
>$$
d w=3 x^2 y d x+x^3 d[](total%20differential.md)d y=z d t+t d z .
>$$
>Since the problem indicates that $x, y, t$ are the independent variables, we eliminate $d z$ from the equations in (4) by multiplying the second equation by $2 z$, adding it to the first, then grouping the terms, which gives
>$$
d w=\left(3 x^2 y-2 z y\right) d x+\left(x^3-2 z x\right) d y+z^2 d t
>$$
>The differential of a function $w = f(x, y, z)$ is $dw = f_xdx + f_y dy + f_z dz$, after replacing $z$ by $t$ — we see that
>$$
\left(\frac{\partial w}{\partial x}\right)_{y, t}=3 x^2 y-2 z y, \quad\left(\frac{\partial w}{\partial y}\right)_{x, t}=x^3-2 z x, \quad\left(\frac{\partial w}{\partial t}\right)_{x, y}=z^2
> $$


## Related
- [[./gradient|gradient]] - vector of partial derivatives of each dimension
- [[./directional derivative|directional derivative]]