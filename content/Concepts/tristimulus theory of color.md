---
aliases:
  - trichromacy
  - tristimulus system
  - tristimulus values
created: 2024-05-04
modified: 2024-05-04
parent:
  - "[[color theory|color theory]]"
publish: true
tags:
  - color
---

The _tristimulus theory_ of color perception says that all visible [[./spectral power distribution|spectral distributions]] can be accurately represented for human observers using three scalar values (three [[primary colors|primary colors]]). 

Integrating the product of a spectral distribution $S(\lambda)$ with three tristimulus matching functions $m_{\{1, 2, 3\}}(\lambda)$ gives three *tristimulus values* $v_i$:
$$
v_i = \int S(\lambda) m_i(\lambda) \, d\lambda
$$
Those three matching functions define a [[./color space and color model|color space]]. 

> [!note] Note
> the tristimulus values for the product of two spectral distributions are *not* given by the product of their tristimulus values. This is why using tristimulus color like RGB for rendering may not give accurate results.

## Related
- [[./XYZ color space|XYZ color space]]

## References
- [Pbrt v4 - 4.6 Color](https://pbr-book.org/4ed/Radiometry,_Spectra,_and_Color/Color) ([[PBRT V4#4.6 Color|Note]])
- [tristimulus system](https://www.britannica.com/science/tristimulus-system)