---
created: 2023-12-20
modified: 2024-03-14
publish: true
tags:
  - computing/system/DataRepresentaiton
---

# Octahedron Encoding
Using a `vec3` to store **3D unit vectors** isn't ideal because it can represent vectors of any length. Since normalized vectors make up only a small fraction of `vec3`, much of the [[./floating-point number|floating-point numbers]]' bit patterns are wasted.

There are many ways to store 3D unit vectors, like using the [[./spherical coordinates|spherical coordinates]]. Although spherical coordinates reduce the vector representation from 3 floats to 2, they still face issues with floating-point precision being concentrated at the poles. Additionally, manipulating spherical coordinates involves costly trig functions.

While the **octahedron encoding** is not fit for computation, it is overall one of the best methods for in-memory storage of 3D unit vectors.

Mapping from a sphere to octahedron can be viewed as changing from [[./L2 norm|L2 norm]] to [[./Manhattan distance|L1 (Manhattan) norm]]. The process is illustrated by the following diagram:

![[../assets/octahedral.png|octahedral.png]]

## References
- [[A Survey of Efficient Representations for Independent Unit Vectors|A Survey of Efficient Representations for Independent Unit Vectors]]
- [[PBRT V4#3.8.3 Spherical Parameterizations|PBRT V4 > 3.8.3 Spherical Parameterizations]]