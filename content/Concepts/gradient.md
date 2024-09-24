---
aliases:
  - gradients
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[calculus|calculus]]"
publish: true
tags:
  - math/calculus/vector
---

# Gradient

Given a multivariable function $f(\mathbf{x}) : \mathbb{R}^N \rightarrow \mathbb{R}$, *gradient* $\nabla f(\mathbf{x})$ assigns a vector at each point:

![[../assets/gradient.png|400]]

The $\nabla$ operation is call "[[./Del operator|Del]]" and can be written as `\nabla` symbol in Latex.

Intuitively, gradient measures the direction of "fastest increase" through a vector field.
## Gradient in Coordinates

The most familiar definition is a list of [[partial derivative|partial derivative]]:
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

## Gradient as Best Linear Approximation
See: [[linearization|linear approximation]]
Another way to think about gradient is that: at each point $x_0$, gradient is the vector that leads to the best possible approximation:
$$
   f(\mathbf{x}) \approx f(\mathbf{x}_0) + \langle\nabla f(\mathbf{x}_0),\, \mathbf{x} - \mathbf{x_0}\rangle
$$
![[../assets/Gradient as Best Linear Approximation.png|400]]

## Gradient as Steepest Ascent

The view of a Gradient as steepest ascent give to the [[gradient descent|gradient descent]] algorithm.

## Relation with Multi-dimensional Derivative and Gradient
See: [[./Multi-dimensional derivative, gradient, and directional Derivative|Multi-dimensional derivative, gradient, and directional Derivative]]

## Relation with Level-sets
At each point, the gradient is perpendicular to the [[./level sets|level set]] of that point and is directed towards the direction of maximum increase in value.
![[../assets/gradient and level sets.jpg|200]]