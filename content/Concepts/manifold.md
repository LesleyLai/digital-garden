---
created: 2024-01-07
modified: 2024-03-14
parent:
  - "[[geometry|geometry]]"
publish: true
tags:
  - "#math/geometry"
---

# Manifold
Intuitively, surfaces are **manifold** if you can draw a regular coordinate grid when zooming in far enough. For example, earth looks flat when near the ground.

Not all shapes are manifold.
![[../assets/2021-08-16_12-34-53_Capture.png|600]]

## Polygon Meshes
A manifold [[polygon mesh|polygon mesh]] has fans, but not fins.

There are two conditions to check:
1. Every edge is contained in only two polygons (no "fins")
2. The polygons containing each vertex make a single "fan"
![[../assets/2021-08-16_12-40-21_Capture.png|600]]

## Related
- [[watertight mesh|watertight mesh]]