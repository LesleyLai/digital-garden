---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#math/calculus/vector"
  - "#math/geometry/curve"
---

# Curvature

Given a parametrized [[./curve|curve]] $\gamma: \mathbb{R} \rightarrow \mathbb{R}^n$, the **curvature** $\kappa(t)$ is the angular rate of change of the [[./tangential normal and binormal vectors|tangent vector]] with respect to [[./arc length|arc length]].

$$
\kappa(t) = \left| \frac{d}{dl} \mathbf{T}(l) \right| = \left| \frac{d}{dt} \mathbf{T}(t) \right| / \frac{dl}{dt}
$$
where $l$ is the arclength and $\mathbf{T}$ is the tangent vector

Intuitively, the curvature measures how much the curve "bends".
A.k.a, a small curvature means the curve is flat, and a large curvature means the curve is tighter.

## Curvature in 3D
The general definition of curvature is not that easy to use in practice. But in 3D, the formula can be simplified:
$$
\kappa(t) = \frac{|\mathbf{v} \times \mathbf{a}|}{|\mathbf{v}^3|} = \frac{\mathbf{a} \cdot \mathbf{N}}{\mathbf{v} \cdot \mathbf{v}}
$$
where $\mathbf{N}$ is the normal vector at $t$.

## Reference
 -  [Calculus Blue Chapter 8](https://www.youtube.com/watch?v=rq4kxVFnOUA&index=48&list=PL8erL0pXF3JYm7VaTdKDaWc8Q3FuP8Sa7)