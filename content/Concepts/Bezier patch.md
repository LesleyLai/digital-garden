---
aliases:
  - Bézier patch
created: 2024-02-20
modified: 2024-03-14
publish: true
tags:
  - math/geometry/curve/bezier
---
# Bézier Patch
A **Bézier patch** is the sum of (tensor) products of [[Bernstein bases|Bernstein bases]].

Just as we connected [[./Bezier curve|Bézier curve]], we can connect Bézier patches to get a surface.

Bézier patch can be too limited in practice and there are many alternatives such as [[./NURBS|NURBS]].

All the patch schemes have different tradeoffs on
- degrees of freedom
- continuity
- difficulty of editing
- cost of evaluation
- generality