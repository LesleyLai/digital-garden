---
parent:
  - "[[triangle mesh|triangle mesh]]"
tags:
  - computing/graphics/geometry
created: 2024-10-06
modified: 2024-10-08
publish: true
---
A mesh is **Delaunay** if no other vertices are in the circumcircle of of any triangles.

![[../assets/2021-08-24_19-45-51_Delaunay_circumcircles_vectorial.svg|200]]
Delaunay meshes has several advantages:
- often helps with [[numerical stability|numerical stability]]
- coincides with *shockingly* many other desirable properties
  - maximizes minimum angle, smoothest interpolation, guarantees maximum principle

## Related
- [[./Voronoi diagram|Voronoi diagram]]