---
aliases:
  - barycentric interpolation
  - areal coordinates
created: 2023-05-30
modified: 2025-05-07
publish: true
tags:
  - math/geometry
  - computing/graphics
---
**Barycentric coordinate** is a [[coordinate systems|coordinate system]] in which the location of a point is specified by reference to points on a [[simplex|simplex]] (i.e., a line, triangle, [[tetrahedron|tetrahedron]], etc.) rather than with respect to global coordinates.

We can view Barycentric coordinates as normalized [[weighted average|weighted average]] of vertices. [^1] Another way to view Barycentric coordinates is to view the coordinates as masses assigned to vertices. In this case, the point is at the [[centroid|geometric centroid]] of the shape. [^3]

> [!info] Aside: affine combination and convex combination
> A [[./linear combination|linear combination]] that expresses multiple points as a normalized weighted sum (where sum of weight is equal to $1$) is an [[affine combination|affine combination]] if the weights can be any value and and a [[convex combination|convex combination]] if they are limited between $[0, 1]$.

Barycentric coordinates are useful in both [[./rasterization|rasterization]] and [[ray-triangle intersection|ray-triangle intersection]], and can be used for [[interpolation|interpolation]] during shading.

## Lines
See also: [[./lerp|lerp]] and [[./inverse lerp|inverse lerp]]

Barycentric coordinate can be seen as a generalization of linear interpolation (lerp). With lerp, we represent a point $\mathbf{P}$ between two points $\mathbf{A}$ and $\mathbf{B}$ as
$$
\mathbf{P} = (1 - t) \mathbf{A} + t \mathbf{B}
$$
If we let $u = 1 - t$ and $v = t$, we will have a barycentric coordinates $(u, v)$ of $t$. [^1]

## Triangles
For triangles, barycentric coordinate expresses the location of any point coplanar with a triangle in three scale $u$, $v$, and $w$. The position of that point is at $\mathbf{P} = u\mathbf{A} + v\mathbf{B} + w\mathbf{C}$ where $\mathbf{A}, \mathbf{B}, \mathbf{C}$ are the coordinates of the three vertices of the triangle.

The three coordinates satisfy the relationship $w + u + v = 1$ and if a point is inside a triangle, $w, u, v \in [0, 1]$. Notice that from two of the coordinates we can find the third one $w = 1 - u - v$.

Barycentric coordinates are proportion to area of sub-triangles.For this reason, it is also known as **areal coordinates**: [^2]
$$
\begin{array}{l}
u = {\dfrac{\text{Area}_{\bigtriangleup BCP}}{\text{Area}_{\bigtriangleup ABC}}}\\
v = {\dfrac{\text{Area}_{\bigtriangleup CAP}}{\text{Area}_{\bigtriangleup ABC}}}\\
w = {\dfrac{\text{Area}_{\bigtriangleup ABP}}{\text{Area}_{\bigtriangleup ABC}}}\\
\end{array}
$$
![[../assets/barycentric.webp|500]]

To find barycentric coordinate of a point, we can calculate the area of the triangle and sub-triangles. The area of triangle is the area of the [[parallelogram|parallelogram]] formed by two edges divided by 2. In 3D, we can use [[./cross product|cross product]] for this purpose:
$$
\text{Area}_{\bigtriangleup ABC} = \frac{\| (\mathbf{B} - \mathbf{A}) \times (\mathbf{C} - \mathbf{A}) \|}{2}
$$
We can similarly compute the area of a sub-triangles, and use this information for barycentric coordinates:
$$
\begin{align}
\text{Area}_{\bigtriangleup BCP} &= \frac{\| (\mathbf{P} - \mathbf{B}) \times (\mathbf{C} - \mathbf{B}) \|}{2} \\
u &= {\dfrac{\text{Area}_{\bigtriangleup BCP}}{\text{Area}_{\bigtriangleup ABC}}}
\end{align}
$$

## Tetrahedra
Barycentric coordinates for Tetrahedra and higher dimension is analogous to it for triangles and lines. [^1][^4]

## See Also
- the [[Möller–Trumbore algorithm|Möller–Trumbore algorithm]] use Barycentric coordinates to check whether a ray-plane intersection lies in triangle

[^1]: [Barycentric Coordinates / T.J. Jankun-Kelly | Observable](https://observablehq.com/@infowantstobeseen/barycentric-coordinates)
[^2]: [Scratchapixel: Barycentric Coordinates](https://www.scratchapixel.com/lessons/3d-basic-rendering/ray-tracing-rendering-a-triangle/barycentric-coordinates)
[^3]: [Geometric Centroid -- from Wolfram MathWorld](https://mathworld.wolfram.com/GeometricCentroid.html)
[^4]: [4.2.2 Tetrahedron Barycentric Coordinates](https://www.iue.tuwien.ac.at/phd/nentchev/node31.html)