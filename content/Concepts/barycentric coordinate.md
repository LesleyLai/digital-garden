---
aliases:
  - barycentric interpolation
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#math/geometry"
  - computer/graphics
---

**Barycentric coordinate** expresses the location of any point coplanar with a triangle in three scale $w$, $u$, and $v$. The position of that point is at $P = wA + uB + vC$ where $A, B, C$ are the coordinates of the three vertices of the triangle.

The three coordinates satisfy the relationship $w + u + v = 1$ and if a point is inside a triangle, $w, u, v \in [0, 1]$. Notice that from two of the coordinates we can find the third one $w = 1 - u - v$.

Barycentric coordinates are proportion to area of sub-triangles. For example, $u = \frac{AREA_{CAP}}{AREA_{ABC}}$. Below is a visualization:
![[../barycentric.png|barycentric.png]]

Barycentric coordinates are useful in both [[./rasterization|rasterization]] and [[ray-triangle intersection|ray-triangle intersection]].

## References
- [Scratchapixel: Barycentric Coordinates](https://www.scratchapixel.com/lessons/3d-basic-rendering/ray-tracing-rendering-a-triangle/barycentric-coordinates)