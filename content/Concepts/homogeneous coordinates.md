---
created: 2023-05-30
modified: 2024-09-16
parent:
  - "[[geometry|geometry]]"
  - "[[computer graphics MOC|computer graphics MOC]]"
publish: true
sr-due: 2024-04-29
tags:
  - math/geometry/HomogeneousCoordinates
  - computing/graphics
---

# Homogeneous Coordinates

**Homogeneous coordinates** came from efforts of study [[perspective projection|perspective]], but it shows up all over the places. It is invented by [[August Ferdinand Möbius|Möbius]].

## Basic Ideas

Consider a 2D plane that does not pass through the origin $\mathbf{o}$ in 3D. Then any line $L$ passing through the origin in 3D correspond to a point $\mathbf{p}$ on that 2D plane.
![[../assets/homogenous_coordinate_basic_idea_2d.jpg|homogenous_coordinate_basic_idea_2d.jpg]]
The idea is that any point $\widehat{\mathbf{p}}$ on the line $L$ can represent the point $\mathbf{p}$.

The idea should naturally remind you of [[perspective projection|perspective]].

More explicitly, consider a point $\mathbf{p} = (x, y)$ and the plane $z = 1$ in 3D, then any $\widehat{\mathbf{p}} = (a, b, c)$ is the **homogeneous coordinate** of $\mathbf{p}$ if $(a/c, b/c) = (x, y)$. 

For example, $(cx, cy, c)$ is the homogenous coordinates of $(x, y)$ for $c \neq 0$.

## Translation in Homogeneous Coordinate
2D [[./translation|translation]] becomes a 3D [[./sheering|sheering]] (which is linear) in the homogenous coordinate. We can verify that 2D translation is indeed linear in 3D space.

> To write as a matrix, recall that a shear in the direction $\mathbf{u}=\left(u_1, u_2\right)$ according to the distance along a direction $\mathbf{v}$ is
$$
f_{\mathbf{u}, \mathbf{v}}(\mathbf{x})=\mathbf{x}+\langle\mathbf{v}, \mathbf{x}\rangle \mathbf{u}
$$
  In matrix form:
$$
f_{\mathbf{u}, \mathbf{v}}(\mathbf{x})=\left(I+\mathbf{u v}^{\top}\right) \mathbf{x}
$$
  In our case, $\mathbf{v} = (0, 0, 1)$ and so we get a matrix

## Other Transformations in Homogeneous Coordinate
Homogeneous coordinate won't impact linear transformations such as scaling and rotation.

## 3D Transformations in Homogeneous Coordinate
- Not much changes algebraically

## Points Vs Vectors in Homogeneous Coordinate
 Homogeneous coordinates has a clear distinction between point and vectors.
 - w = 0 for vector
 - w = 1 for points

 We can consider a vector an infinitely far-away point.

## Perspective Projection in Homogeneous Coordinate
See: [[perspective projection|perspective]]
  - pinhole camera (divide by z)
  - we can build a matrix that copy the z-coordinate into the homogeneous coordinate
$$
\left[\begin{array}{llll}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 1 & 0
\end{array}\right]\left[\begin{array}{l}
x \\
y \\
z \\
1
\end{array}\right]=\left[\begin{array}{l}
x \\
y \\
z \\
z
\end{array}\right]
$$
## References
- [[CMU 15462 Lecture 05 Spatial Transformations|CMU 15462 Lecture 05 Spatial Transformations]]
- [Math for Game Programmers: Understanding Homogeneous Coordinates - YouTube](https://youtu.be/o1n02xKP138)