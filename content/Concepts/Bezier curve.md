---
aliases:
  - Bézier curve
created: 2024-01-08
modified: 2024-09-16
parent:
  - "[[curve|curve]]"
publish: true
tags:
  - math/geometry/curve/bezier
title: Bézier Curve
---
A **Bézier curve** is a curve expressed in the [[Bernstein basis|Bernstein basis]]:
$$
\gamma(s) := \sum_{k = 0}^{n} B_{n, k}(s) p_k
$$

Those points $p_k$ are called *control points*.

For n = 1, we just get a line segment. But for n = 3, we get "**cubic Bézier**":
![[../cubic bezier.svg|400]]

There are some nice features about the cubic Bézier curve:
1. endpoints are interpolated
2. The curves are tangent to end segments
3. The curves are contained in [[convex hull|convex hull]] (nice for rasterization)

The 3D version of a Bézier curve is a [[bézier patch|bézier patch]].
## Piecewise Bézier
Since high-degree Bernstein polynomials don't interpolate well, we usually piece together many low-order Bézier curves. To get _seamless_ curves, we need _points_ and _tangents_ to line up:
![[../piecewise bezier.png|400]]

## Related
- [[./spline|spline]]
- [[./NURBS|NURBS]]