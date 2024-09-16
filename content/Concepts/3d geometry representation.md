---
created: 2024-01-25
modified: 2024-03-14
parent:
  - "[[geometry processing|geometry processing]]"
publish: true
tags:
  - computer/graphics/geometry
---

# 3D Geometry Representation
There are many different representations of geometries. But we can divide them into two categories: _explicit_ and _implicit_.
## Implicit Representations
Implicit representations means that points aren't known directly, but satisfy some relationship

There are many implicit representations of geometries in graphics:
- level set methods
- algebraic surfaces
- [[./constructive solid geometry|constructive solid geometry]]
- [[L-system|L-systems]]
- [[fractal|fractals]]

Observation:
- implicit surfaces make some tasks hard (like finding points on a surface), but some other tasks easy (for example: finding if a point is inside $x^2 + y^2 + z^2 = 0$)

## Explicit Representations
All points are given directly in an explicit representation. For example. we can say all points on sphere are $(\cos(u)\sin(v), \sin(u)\sin(v), \cos(v))$

There are many of explicit representations for a surface too:
- point cloud
- [[polygon mesh|polygon mesh]]
- subdivision
- [[./NURBS|NURBS]]