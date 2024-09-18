---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[linear algebra|linear algebra]]"
publish: true
tags:
  - math/LinearAlgebra/orthogonality
---

# Orthogonal Projection

> [!info] Don't be confused with [[orthographic projection|orthographic projection]] 
> orthographic are perspective projection are ways to transform 3d scene into a 2d surface.

> [!definition]
> Given an n-dimensional [[./vector space|vector space]] $V$ and a p-dimensional [[./subspaces|subspace]] $W$ of $V$, and $\{ \mathbf{s}_{1}, \mathbf{s}_{2}, \cdots, \mathbf{s}_{p} \}$ being an [[./orthonormal basis|orthonormal basis]] for $W$.
> Let $\mathbf{v}$ be a vector in $V$, the **orthogonal projection** of $\mathbf{v}$ onto $W$ is given by
> $$
 v_{\text{proj}_{W}} = (v^T \mathbf{s}_{1}) \, \mathbf{s}_{1} + (v^T \mathbf{s}_{2}) \, \mathbf{s}_{2} + \cdots + (v^T \mathbf{s}_{p}) \, \mathbf{s}_{p}
> $$

When we are doing orthogonal projection, we throw away the part of the vector that are not part of the subspace. Say if $\{ \mathbf{s}_{1}, \mathbf{s}_{2}, \cdots, \mathbf{s}_{p}, \mathbf{n}_{1}, \mathbf{n}_{2}, \cdots, \mathbf{n}_{n-p} \}$ is an orthonormal basis for $v$ and $\mathbf{v} = a_{1}\, \mathbf{s}_{1} + a_{2} \,\mathbf{s}_{2} + \cdots + a_{p}\,\mathbf{s}_{p} + \cdots + a_{n}\,\mathbf{n}_{n-p}$, then the projection will drop all the terms with vectors not part of orthonormal basis of $W$ ($v_{\text{proj}_{W}} = a_{1}\, \mathbf{s}_{1} + a_{2} \,\mathbf{s}_{2} + \cdots + a_{p}\,\mathbf{s}_{p}$)