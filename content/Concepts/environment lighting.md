---
aliases:
  - image-based lighting
  - IBL
  - environment mapping
  - reflection mapping
created: 2024-01-15
modified: 2024-03-14
publish: true
tags:
  - "#computer/graphics/pbr"
---

# Environment Lighting
An **environment lighting** is a technique to simulate distant lighting from all directions.

Two main storage format for environment lighting are [[spherical mapping|spherical mapping]] and [[cube mapping|cube mapping]].

[[./the split sum approximation|The split sum approximation]] is a great way to avoid expensive sampling of environment lighting in real-time by using pre-filtering.