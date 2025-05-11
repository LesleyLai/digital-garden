---
created: 2023-10-28
modified: 2025-05-11
parent:
  - "[[computer graphics MOC|computer graphics MOC]]"
tags:
  - computing/graphics
  - stub
aliases:
  - mip-chain
publish: true
---
**Mipmapping** is a technique to prevent texture [[./aliasing|aliasing]] by precalculating and storing a chain of textures in progressively lower resolution. Modern graphics APIs has native mipmapping support, so programmers usually don't need to modify shaders to achieve this effect.

When sampling textures, the ratio of texels to pixels is not constant. As the viewing distance increases or the viewing angle becomes more oblique, a single pixel tends to cover multiple texels. If we only sample a single texel for the texel, the contribution of other texels toward that pixel is lost!
![[../assets/Mipmap_Aliasing_Comparison.webp|Mipmap_Aliasing_Comparison.webp]]

Mipmaps effectively applying a series of [[low-pass filter|low-pass filters]] to the image. It enables _fast_, _approxated_, and _square_ range queries to the original texture. We typically name mipmaps with numbers, with 0 being the original, full-width image.

The total storage requirement of a mip-chain is a [[./geometric series|geometric series]] $1 + \frac{1}{4} + \frac{1}{16} + \dots = \frac{4}{3}$

## Related
- [[bilinear interpolation|bilinear interpolation]] and [[trilinear interpolation|trilinear interpolation]]
- [[anisotropic filtering|anisotropic filtering]]

## Resources
- [Pyramidal Parametrics](https://www.cs.cmu.edu/afs/cs.cmu.edu/academic/class/15869-f11/www/readings/williams83_mipmap.pdf) - The original Mipmapping paper