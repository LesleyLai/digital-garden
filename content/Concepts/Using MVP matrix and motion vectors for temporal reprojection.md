---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

#computing/graphics/RayTracing #computing/graphics/AntiAliasing/TAA 
We also call this approach the "Rasterization" approach. The idea is that in vertex shader, transform vertices with two matrices
- The current [[./Model-View-Projection Matrix|MVP]]
- The previous MVP
The difference is the (linear) [[Motion Vectors|motion vectors]] for each vertex. We can [[./barycentric coordinate|interpolate them over triangles]] to get the motion vector per fragment.