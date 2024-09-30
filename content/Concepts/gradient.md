---
aliases:
  - gradients
created: 2023-05-30
modified: 2024-09-29
parent:
  - "[[calculus|calculus]]"
publish: true
tags:
  - math/calculus/vector
---
Given a multivariable function $f(\mathbf{x}) : \mathbb{R}^N \rightarrow \mathbb{R}$, *gradient* $\nabla f(\mathbf{x})$ assigns a vector at each point:

![[../assets/gradient.png|400]]

The $\nabla$ operation is call "[[./Del operator|Del]]" and can be written as `\nabla` symbol in Latex.

Intuitively, gradient measures the direction of "fastest increase" through a vector field.
## Gradient in Coordinates

The most familiar definition is a list of [[./partial derivative|partial derivative]]:
 $$
   \nabla f=\left[\begin{array}{c}
   \partial f / \partial x_{1} \\
   \vdots \\
   \partial f / \partial x_{n}
   \end{array}\right]
$$

We can also understand it as a list of [[./directional derivative|directional derivative]] across the coordinate axis.

This definition has two potential problems:
- Role of [[./inner product|inner product]] is not clear
- No way to differentiate [[./L2 Gradient|functions of functions F(f)]] since we don't have a finite list of coordinates $\mathbf{x}_1, ..., \mathbf{x}_n$

## Gradient As Fastest Increase
For an function $f(\mathbf{x})$, the gradient $\nabla f(\mathbf{x})$ at a point $\mathbf{x}_0$ represents the direction of steepest increase of the function at that point. It also plays a crucial role in the [[./linearization|linear approximation]] of the function:
$$
   f(\mathbf{x}) \approx f(\mathbf{x}_0) + \langle\nabla f(\mathbf{x}_0),\, \mathbf{x} - \mathbf{x_0}\rangle
$$
![[../assets/Gradient as Best Linear Approximation.png|400]]

This interpretation of gradient leads naturally to the [[gradient descent|gradient descent]] algorithm, a fundamental [[./mathematical optimization|optimization]] technique.

## Gradient For Implicit Surface
For an implicitly defined surfaces $f(\mathbf{x}) = \text{constant}$, the gradient $\nabla f(\mathbf{x}_0)$ will always be perpendicular ([[./tangential normal and binormal vectors|normal]]) to the [[./level sets|level set]] and is directed towards the direction of maximum increase in value.

![[../assets/gradient and level sets.jpg|200]]   ![[../assets/gradient 3d implicit surface.jpg|360]]

## Relation with Multi-dimensional Derivative and Gradient
See: [[./Multi-dimensional derivative, gradient, and directional Derivative|Multi-dimensional derivative, gradient, and directional Derivative]]
