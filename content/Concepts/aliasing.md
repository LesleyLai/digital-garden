---
created: 2023-05-30
modified: 2024-08-07
publish: true
tags:
  - math/signal/sampling
  - computing/graphics/AntiAliasing
---
**Aliasing** is the high frequencies in original [[./signal|signal]] masquerade as low frequencies after [[./sample reconstruction|reconstruction]] (due to [[undersampling|undersampling]]). 

The name "aliasing" comes from the fact that the high-frequency signal becomes indistinguishable from low frequency signals (they become _aliases_).

![[../assets/aliasing.png|600]]

> [!example]- Example: Image
> Images can be decomposed into "frequencies." And thus is also subject to aliasing.
![[../assets/decompose image into frequencies.png|decompose image into frequencies.png]]

> [!example]- Spatial Aliasing Example
> Here is an example of spatial aliasing on the function $\sin(x^2 + y^2)$:
![[../assets/spatial aliasing.png|spatial aliasing.png]]

> [!example]- Temporal Aliasing example
> An example is the "[[wagon-wheel effect|wagon-wheel effect]]":
> ![[../assets/wagon wheel effect.png|wagon wheel effect.png]]

The [[./Nyquist-Shannon theorem|Nyquist-Shannon theorem]] states that any frequency above the Nyquist frequency (half the sampling rate) can produce an alias.