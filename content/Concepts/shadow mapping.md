---
created: 2023-10-18
modified: 2024-03-14
parent: 
publish: true
tags:
  - computer/graphics/Rasterization
  - computer/graphics/shadow
---

# Shadow Mapping
**Shadow mapping** is an image-space two-pass algorithm to generate shadows. The first pass generates depth value from light source to a "depth texture." And the second pass _reproject_ world space position to the depth texture, and compare the depth value to decide whether a point is in shadow.

## Downside of Shadow Mapping
There are several downside of the shadow map.
- You need to have one shadow map per light source
- It is easy to have [[./aliasing|aliasing]] effect (especially for low resolution shadow maps)
- [[./self-occlusion|self-occlusion]] problem can happen

There are several techniques to mitigate those problems:
- [[percentage closer filtering|percentage closer filtering]] (PCF) helps with aliasing

We can employ a depth bias to combat [[./self-occlusion|self-occlusion]], but it can also introduces [[./detached shadow|Peter panning]] effect:
![[../detached shadow.png|400]]

## Extension to Shadow Maps
- [[cascaded shadow mapping|cascaded shadow mapping]] helps with aliasing
- [[percentage closer soft shadow|percentage closer soft shadow]] (PCSS) create soft shadows (based on [[percentage closer filtering|PCF]])
- [[variance shadow mapping|variance shadow mapping]] greatly reduce the texture sampling cost of [[percentage closer filtering|PCF]]
  - [[moment shadow mapping|moment shadow mapping]] solves some problem with VSM