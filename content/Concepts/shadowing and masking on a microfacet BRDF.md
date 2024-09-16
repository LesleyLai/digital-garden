---
aliases:
  - shadowing and masking
created: 2024-02-10
modified: 2024-03-14
parent:
  - "[[./microfacet theory|Microfacet BRDFs]]"
publish: true
tags:
  - computer/graphics/pbr/microfacet
---

# Shadowing and Masking
[[./microfacet theory|Microfacet BRDFs]] need to incorporate the shadowing and masking effects found on rough surfaces, which result in the blocking of some light.

![[../shadowing and masking.png|500]]

In reality, when light is blocked, it continues to bounce and some of it will eventually contribute back to the BRDF. However, the microfacet theory simplifies this by assuming that the blocked light is lost.