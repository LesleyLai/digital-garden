---
parent:
  - "[[computer graphics MOC|computer graphics MOC]]"
tags:
  - computing/graphics/RayMarching
created: 2024-11-06
modified: 2024-11-06
publish: true
---
**Ray marching** is the umbrella term for a bunch of algorithms to "march" a ray [[iterative methods|iteratively]]. This technique is used to compute intersections with [[implicit surface|implicit surfaces]] (usually a [[SDF|signed distance field]]), where an analytical solution may be difficult or even impossible to obtain.

The simplest ray marching algorithm have a fixed step size, but **Distance-aided ray marching** algorithms like [[sphere tracing|sphere tracing]] usually takes much fewer steps and have higher resolution near the surface.

| Naive Ray Marching               | Sphere Tracing               |
| -------------------------------- | ---------------------------- |
| ![[../assets/naive ray marching.png\|320]] | ![[../assets/sphere tracing.png\|237]] |

## Common Strategies
- [[sphere tracing|sphere tracing]]
  - [[relaxed sphere tracing|relaxed sphere tracing]]
- [[DDA algorithm|DDA]] (for voxels)

## See Also
- [[./ray tracing|ray tracing]]
- [[./object intersections|object intersections]]