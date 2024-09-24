---
created: 2024-05-10
modified: 2024-05-10
parent:
  - "[[calculus|calculus]]"
  - "[[./mathematical optimization|optimization problems]]"
publish: true
tags:
  - math/optimization
  - math/calculus/differentiation
---

# Lagrange Multiplier
**Lagrange multipliers** is a way to solve constrained [[./mathematical optimization|optimization problems]] with a form like this:
> [!abstract] Minimize (or maximize) $f(\mathbf{x})$ constrained by $g(\mathbf{x}) = c$

It does that by finding [[./critical point|critical point]] at $\nabla f = \lambda \nabla g$ for some $\lambda$ and $g(\mathbf{x}) = c$ (the variable $\lambda$ is called the multiplier because it multiple [[./gradient|gradients]])

> [!example]- Find the maximum and minimum values of $f(x, y) = x^2 + x + 2y^2$ on the unit circle
> Answer: The objective function is $f(x, y)$. The constraint is $g(x, y)=x^2+y^2=1$.
> Lagrange equations:
>$$
\begin{aligned}
& f_x=\lambda g_x \quad \Leftrightarrow \quad 2 x+1=\lambda 2 x \\
& f_y=\lambda g_y \quad \Leftrightarrow \quad 4 y=\lambda 2 y \\
& x^2+y^2=1
\end{aligned}
>$$
>
>Constraint:
>The second equation shows $y=0$ or $\lambda=2$.
>$$
\begin{aligned}
& \lambda=2 \Rightarrow x=1 / 2, y= \pm \sqrt{3} / 2 . \\
& y=0 \Rightarrow x= \pm 1 .
\end{aligned}
>$$
>
>Thus, the critical points are $(1 / 2, \sqrt{3} / 2),(1 / 2,-\sqrt{3} / 2),(1,0)$, and $(-1,0)$.
>$$
\begin{aligned}
& f(1 / 2, \pm \sqrt{3 / 2})=9 / 4 \text { (maximum) } \\
& f(1,0)=2 \text { (neither min. nor max) } \\
& f(-1,0)=0 \text { (minimum). }
\end{aligned}
>$$

The Lagrange multipliers doesn't tell whether a solution is a maximum, minimum, or a [[saddle point|saddle point]], but we can use the [[./second derivative test|second derivative test]].
## Intuition

Lagrange multiplier is behind the observation that at maximum or minimum, the [[./level sets|level set]] of function $f(\mathbf{x})$ is [[./tangent space|tangent]] to the constraint $g(\mathbf{x})$. In other words, their gradients are parallel: $\nabla f \parallel \nabla g$, and thus $\nabla f = \lambda \nabla g$.
![[../assets/Lagrange example 2.png|300]]

## Proof
Suppose that $f$ has a maximum at $P$ on the constraint surface.

Let $\mathbf{r}(t)$ be an arbitrary parametrized curve which lies on the constraint surface $g(\mathbf{x}(t))$ and has $\mathbf{x}(0) = P$. Also let $h(t) = f(\mathbf{x}(t))$. This setup guarantees that $h(t)$ has a maximum at $t = 0$.

Taking a derivative using the [[./chain rule|chain rule]] gives
$$
h'(t) = \nabla f|_{\mathbf{r}(t)} \cdot \mathbf{r}'(t)
$$
Since $t = 0$ is a local maximum, we have
$$
h'(0) = \nabla f|_P \cdot \mathbf{r}'(0) = 0
$$
Thus, $\nabla f|_P$ is perpendicular to any curve on the constraint surface through $P$, which implies that $\nabla f|_P$ is perpendicular to the constraint surface.

However, since $\nabla g|_P$ is also perpendicular to the surface, $\nabla f|_P$ and $\nabla g|_P$ must be parallel to each other.