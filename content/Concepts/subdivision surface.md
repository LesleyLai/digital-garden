---
created: 2024-02-20
modified: 2024-03-14
parent: 
publish: true
tags:
  - computer/graphics/geometry/subdivision
---

# Subdivision Surface
Subdivision repeatedly splits each element of a surface into smaller pieces and replaces vertex positions with weighted average of neighbors.

Main considerations:
- interpolating vs. approximating
- limit surface continuity (C^1, C^2, ...) (derivative)
- behavior at irregular vertices

There are a lot of subdivision schemes. For quad meshes, the most common scheme is [[Catmull-Clark|Catmull-Clark]]. And for triangle meshes, there are several popular schemes such as [[./loop subdivision|Loop]], Butterfly, or Sqrt(3).