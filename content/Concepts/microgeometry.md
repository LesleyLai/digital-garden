---
aliases:
  - microfacet
created: 2024-02-10
modified: 2024-03-14
publish: true
tags:
  - Geometrical_optics
  - computer/graphics/pbr/microfacet
---

# Microgeometry
Microgeometry is the minute geometric irregularities found on a surface. It shares similarities with [[./nanogeometry|nanogeometry]], albeit on a larger scale—larger than the wavelength of light but still smaller than a pixel.

Microgeometry tilt the surface in various directions. We can view it as changing of local normal.

Typically, we model microgeometry as a statistical aggregate, providing the foundation for the [[./microfacet theory|microfacet theory]] employed in physically-based rendering.