---
aliases:
  - binormal vector
  - normal vector
  - tangent vector
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# Tangential and Normal Components of Acceleration Vectors
Given a parametrized [[./curve|curve]] $\gamma: \mathbb{R} \rightarrow \mathbb{R}^n$, the velocity $\mathbf{v}(t)$ and acceleration $\mathbf{a}({t})$ are often expressed as a combination of two [[./orthonormality|orthogonal unit vectors]] for each time $t$.

We have 
- $\mathbf{T}(t)$ as the **unit tangent vector** which is tangent to $\mathbf{v}$ at time $t$, 
- and $\mathbf{N}(t)$ as the **unit normal vector** to which is orthogonal $\mathbf{v}$ at time $t$,
By definition, the  [[./dot product|dot product]] $\mathbf{N} \cdot \mathbf{T} = 0$.

More precisely,
- $\mathbf{T}(t)$ is defined as $\text{normalize}(\mathbf{v}(t))$
- $\mathbf{N}(t)$ is defined as $\text{normalize}(\mathbf{T}'(t))$

Fact:
$$
  \begin{aligned}
    a &= a_T \mathbf{T} + a_n \mathbf{N} \\
       &= (\frac{d}{dt} |\mathbf{v}|) \mathbf{T} + \left( \kappa |\mathbf{v}|^2 \right) \mathbf{N}
  \end{aligned}
$$

Where $\frac{d}{dt} |\mathbf{v}|$ is the derivative of the speed, and $\kappa$ is a constant coefficient that we called [[./curvature|curvature]] (which measures how much a curve "bends")

## Binormal Vector
In 3d, the binormal vector is defined as the cross product of tangent and normal vector
$$
\mathbf{B} = \mathbf{T} \times \mathbf{N}
$$

## Reference
 -  [Calculus Blue Chapter 8](https://www.youtube.com/watch?v=rq4kxVFnOUA&index=48&list=PL8erL0pXF3JYm7VaTdKDaWc8Q3FuP8Sa7)

---
tags: #math/calculus/vector  #math/geometry/curve #math/definitions