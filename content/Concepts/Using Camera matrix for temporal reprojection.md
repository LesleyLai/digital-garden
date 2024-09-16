---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

#computer/graphics/RayTracing #computer/graphics/AntiAliasing/TAA 
This "poor man's approach" of temporal reprojection 
- multiply the camera space intersection point by [[./View matrix|inverse camera matrix]] of the current frame
- multiply the result by camera matrix of the previous frame

This approach assumes a static scene since it doesn't keep track motion of the objects, but it is useful enough to be implemented in Jacco Bikker's [Lighthouse 2](https://github.com/jbikker/lighthouse2) and [Voxel Template Engine](https://jacco.ompf2.com/voxel-world-template/).

## Reference
- [ShaderToy: Temporal Reprojection shader](https://www.shadertoy.com/view/ldtGWl)