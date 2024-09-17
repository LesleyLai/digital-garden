---
created: 2024-02-18
modified: 2024-03-14
parent:
  - "[[chain rule|chain rule]]"
publish: true
tags:
  - math/calculus/differentiation
---
# Multivariable Chain Rule

## Definition
> [!definition]
>  For differentiable functions $f : \mathbb{R}^m \rightarrow \mathbb{R}^p$ and $g : \mathbb{R}^n \rightarrow \mathbb{R}^m$, $f \circ g:  \mathbb{R}^n \rightarrow \mathbb{R}^p$ has derivative
>$$
\left[ D(f \circ g) \right]_{\mathbf{a}} = [Df]_{g(\mathbf{a})} \cdot [Dg]_{\mathbf{a}}
>$$

Since [[./multi-variable derivative|multi-variable derivative]] are matrices, the above multiplication is matrix multiplication.

For example, for $f(\mathbf{x}) = f(x, y)$ and $\mathbf{g}(t) = \langle x(t), y(t)\rangle$, we have
$$
\frac{d }{d t}f(x(t), y(t)) = \frac{\partial f}{\partial x} \frac{dx}{dt} + \frac{\partial f}{\partial y} \frac{dy}{dt} = \nabla f(\mathbf{g}(t)) \cdot \mathbf{g}'(t)
$$
> [!example]- Example f(x, y) and g(u, v) using the matrix multiplication notation
> **Given** $$f(x, y) = \begin{bmatrix}
> x^2 + y^2 \\
> xy
> \end{bmatrix}$$ 
> $$g(u, v) = \begin{bmatrix}
> 2u - v \\
> v - u
> \end{bmatrix}$$
> and the outputs of $f \circ g$ at $u = 1, v = 2$ change at rate of $$\begin{bmatrix}
> -4 \\
> 3
> \end{bmatrix}$$
> find rates of change of inputs $u, v$
> 
> **Solution**
> if $u = 1, v = 2$, then $x = 0, y = 1$
> $$[Df]\biggr\rvert_{x=0, y=1} = \begin{bmatrix}
> 2x & 2y \\
> y & x
> \end{bmatrix}_{x = 0, y= 1}
> = \begin{bmatrix}
> 0 & 2 \\
> 1 & 0
> \end{bmatrix}$$
>  and
> $$[Dg] = \begin{bmatrix}
 2 & -1 \\
 -1 & 1
> \end{bmatrix}$$ 
> (for any $u, v$)
> 
> From chain rule,
> $$
> [D(f \circ g)] = [Df][Dg] = \begin{bmatrix}
> -2 & 2 \\
> 2 & -1
> \end{bmatrix}
> $$
> 
> Now we can solve the [[./system of linear equation|system of linear equation]]
> $$
> \begin{bmatrix}
> -2 & 2 \\
> 2 & -1
> \end{bmatrix}\begin{bmatrix}
> h_u \\
> h_v
> \end{bmatrix}
> =
> \begin{bmatrix}
> -4 \\
> 3
> \end{bmatrix}
> $$
> 
> And we can get final answer
> $$
> \begin{bmatrix}
> h_u \\
> h_v
> \end{bmatrix} =
> \begin{bmatrix}
> 1 \\
> -1
> \end{bmatrix}
> $$

## Tree Diagram

The tree diagram (some people also call it a dependency graph) is an alternative visual tool to help construct chain rule.

In a tree diagram, the dependent variable sit on top, and independent variables sit on bottom, with intermediate variables sit in the middle. 

> [!example]-
For example, to construct chain rule for a function $f(x_1, x_2, \dots, x_n)$ where each $x_i$ is depending on two variables $s$ and $t$, we can have the following diagram:
>![[../HEkGKdy68P-chain1b.gif|300]]

## Chain Rule and Coordinate Transformation

One application of the chain rule is to transform the coordinate system. When a problem has circular symmetry for instance, it doesn't make sense to write $\nabla f$ in Cartesian coordinates; the problem is much easier to solve in [[./polar coordinates|polar coordinates]].

> [!example]- Find the gradient $\nabla f(x, y) = \langle f_x, f_y \rangle$ in polar form. Then express it in unit vectors of polar coordinate ($f_r, f_\theta$)
> $\nabla f = \langle f_r \cos(\theta) - f_{\theta} \frac{\sin{\theta}}{r}, f_r \sin(\theta) - f_{\theta} \frac{\cos{\theta}}{r} \rangle$
> **Solution**: By the chain rule we have
>$$
\begin{align}
\frac{\partial f}{\partial x} = \frac{\partial f}{\partial r}\frac{\partial r}{\partial x} + \frac{\partial f}{\partial \theta}\frac{\partial \theta}{\partial x}
\end{align}
>$$
> We also know that $r = \sqrt{ x^2 + y^2 }$ and $\theta = \tan^{-1}\left( \frac{y}{x} \right)$, and $\frac{d}{du}\tan^{-1}(u) = \frac{1}{1 + u^2}$
> Then
> $$
\begin{aligned}
& \frac{\partial \theta}{\partial x}=\frac{d}{d u} \tan ^{-1}(u) \frac{\partial}{\partial x} \underbrace{\left[\frac{y}{x}\right]}_u \\
& =\frac{1}{1+\left(\frac{y}{x}\right)^2}\left[\frac{-y}{x^2}\right] \\
& =-\frac{y}{x^2+y^2} \\
& =-\frac{r \sin (\theta)}{r^2} \\
& =-\frac{\sin (\theta)}{r} \text {. } \\
\end{aligned}
> $$
> and
> $$
 \begin{aligned}
 \frac{\partial r}{\partial x}&=\frac{d}{d u} \sqrt{u} \frac{\partial}{\partial x} \underbrace{\left[x^2+y^2\right]}_u \\
& =\frac{1}{2 \sqrt{x^2+y^2}}[2 x] \\
& =\frac{x}{\sqrt{x^2+y^2}} \\
& =\frac{r \cos (\theta)}{r} \\
& =\cos (\theta) \text {. } \\
&
\end{aligned}
>$$
>So we have $f_x = f_r \cos(\theta) - f_{\theta} \frac{\sin{\theta}}{r}$
>We can similarly get $f_y = f_r \sin(\theta) - f_{\theta} \frac{\cos{\theta}}{r}$
>Putting together, $\nabla f = \langle f_r \cos(\theta) - f_{\theta} \frac{\sin{\theta}}{r}, f_r \sin(\theta) - f_{\theta} \frac{\cos{\theta}}{r} \rangle$

## Related
- [[./total differential|total differential]] - A lot of problems can be solved by either chain rule or expanding the total differential, though using the chain rule is usually the easier way