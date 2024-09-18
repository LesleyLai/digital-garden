---
aliases:
  - half vector
created: 2024-02-10
modified: 2024-03-14
parent:
  - "[[microfacet theory|microfacet theory]]"
publish: true
tags:
  - computer/graphics/pbr/microfacet
---

The half-vector $\mathbf{h}$ in a microfacet BRDF precisely indicates the direction in which the microfacets need to point. This is due to our treatment of microfacets as ideal mirror surfaces; consequently, only those microfacets with their surface normals oriented exactly halfway between the light direction $l$ and the viewing direction $v$ will reflect visible light.
![[../half vector in microfacets.png|600]]