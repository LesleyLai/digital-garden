---
parent:
  - "[[geometry representations|geometry representations]]"
tags:
  - computing/graphics/geometry
created: 2021-08-24
modified: 2024-10-06
publish: true
---
**Triangle meshes** are the most widely used representation of 3D geometry. Modern GPUs have dedicated hardware optimized for to support triangle rasterization and [[ray-triangle intersection|ray tracing]].

## Advantages of Triangles
Some of the advantages of triangles including that
- you will always have a valid triangle given any three points as long as they are not in a line
- We can interpolate on a triangle easily with the [[./barycentric coordinate|barycentric coordinate]]
- Triangles are always [[convex polygon|convex]] and coplanar, which simplifies many algorithms

## What Makes a "good" Triangle Mesh
### Triangle Shapes
See also: [[./degenerate triangle|degenerate triangle]]

The shape of triangles are important. Long and thin triangles, often called "slivers," can cause [[numerical stability|numerical instability]] in various computational applications.

A more sophisticated condition is called [[Delaunay triangulation|Delaunay]] (empty circumcircles). A mesh is Delaunay if no other vertices are in the circumcircle of of any triangles.
### Degree of Mesh
Having regular [[degree (graph theory)|vertex degree]] also makes a mesh "good."
- For triangle meshes, a degree of 6 is considered optimal for interior vertices
- For quad meshes, a degree of 4 is ideal


![[../assets/degree of mesh.png|degree of mesh.png]]