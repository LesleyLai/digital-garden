---
created: 2023-05-30
modified: 2024-08-07
publish: true
tags:
  - math/sampling
  - computer/graphics/AntiAliasing
---

# Aliasing

**Aliasing** is the high frequencies in original [[./signal|signal]] masquerade as low frequencies after [[./sample reconstruction|reconstruction]]. (due to undersampling)

![[../aliasing.png|600]]

> [!example]- Example: Image
> Images can also be decomposed into "frequencies." And thus is also subject to aliasing.
![[../decompose image into frequencies.png|decompose image into frequencies.png]]

> [!example]- Spatial Aliasing Example
> Here is an example of spatial aliasing on the function $\sin(x^2 + y^2)$:
![[../spatial aliasing.png|spatial aliasing.png]]

> [!example]- Temporal Aliasing example
> An example is the "[[wagon-wheel effect|wagon-wheel effect]]":
> ![[../wagon wheel effect.png|wagon wheel effect.png]]

When can be more precise about when aliasing occurs by the [[./Nyquist-Shannon theorem|Nyquist-Shannon theorem]].