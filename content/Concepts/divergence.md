---
created: 2023-05-30
modified: 2024-04-19
publish: true
tags:
  - math/calculus/vector
  - math/definitions
---

# Divergence

**Divergence** is a [[vector operator|vector operator]] that represents the volume density of the outward [[flux|flux]] of a [[./vector field|vector field]]. 

Divergence takes in a vector-valued function $\mathbf{f}(\mathbf{x}: \mathbb{R}^n): \mathbb{R}^n$ defining this vector field, and outputs a scalar-valued function $\nabla \cdot \mathbf{f}(\mathbf{x}: \mathbb{R}^n): \mathbb{R}$, where the $\nabla$ is the [[./Del operator|Del operator]] ($\left(\frac{\partial}{\partial u_{1}}, \frac{\partial}{\partial u_{2}}, \frac{\partial}{\partial u_{3}}\right)$) and $\mathbf{F}(\mathbf{X})$ is the vector field.

![[../divergence.png|divergence.png]]

> [!definition] Divergence
> For a vector function $\overrightarrow{\mathbf{v}}(\mathbf{x})=\left[\begin{smallmatrix}v_1(\mathbf{x}) \\v_2(\mathbf{x}) \\\cdots\end{smallmatrix}\right]$, its divergence is
> $$
\nabla \cdot \overrightarrow{\mathbf{v}}=\frac{\partial v_1}{\partial x}+\frac{\partial v_2}{\partial y} + \cdots
> $$

## Intuition of Divergence
Intuitively, the divergence measures "how much a vector field is a source or a sink." For example, in the below diagram, the divergence is $1$ for the "source point" and $-1$ for the "sink point".
![[../divergence 3.svg|300]]

The divergence would also be positive if the vector field passing through it is speeding up:

![[../divergence_2.jpg|400]]

## Linking Divergence Definition to Intuition
How does the divergence definition leads to change of volume density? Say we have a 2D function
$$
\overrightarrow{\mathbf{v}}(x, y)=\left[\begin{array}{l}
v_1(x, y) \\
v_2(x, y)
\end{array}\right]
$$
And the formula for its divergence is the following:
$$
\nabla \cdot \overrightarrow{\mathbf{v}}=\frac{\partial v_1}{\partial x}+\frac{\partial v_2}{\partial y}
$$
Let's focus on the $v_1$ component only. Suppose $v_1 = 0$ and $\frac{\partial v_1}{\partial x} > 0$, we have an outward fluid flow
![[../divergence intuition 1.svg|300]]

Suppose $v_1 = 0$ and $\frac{\partial v_1}{\partial x} < 0$, we have an inward fluid flow
![[../divergence intuition 2.svg|300]]

The observation can also generalized to $v_1 \neq 0$, where $\frac{\partial v_1}{\partial x} > 0$ means more is leaving than is coming in.
![[../divergence intuition 3.svg|300]]

And divergence adds contributions of all the axis together:
$$
\nabla \cdot \overrightarrow{\mathbf{v}}=\overbrace{\frac{\partial v_1}{\partial x}}^{\begin{array}{c}
\text{Change in density}\\\text{in the x- direction}
\end{array}}+\underbrace{\frac{\partial v_2}{\partial y}}_{\begin{array}{c}
\text { Change in density } \\
\text { in the } y \text {-direction }
\end{array}}
$$

## References
- [Divergence and curl: The language of Maxwell's equations, fluid flow, and more - YouTube](https://www.youtube.com/watch?v=rB83DpBJQsE)
- [Intuition for divergence formula (article) | Khan Academy](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/divergence-and-curl-articles/a/intuition-for-divergence-formula)
- [Divergence (article) | Khan Academy](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/divergence-and-curl-articles/a/divergence)