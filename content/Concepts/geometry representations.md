---
created: 2024-01-25
modified: 2024-10-03
parent:
  - "[[geometry processing|geometry processing]]"
publish: true
tags:
  - computing/graphics/geometry
---
There are many different representations of geometries. We can divide them into two large categories: _explicit_ and _implicit_, and another way to categorize geometry representation is on whether they represent [[surface|surfaces]] or [[volumn|volumes]]. 

## Implicit Representations Vs Explicit Representation
_[[implicit equation|Implicit representations]]_ means that points aren't known directly, but satisfy some relationship. implicit surfaces make some tasks hard (like finding points on a surface), but some other tasks easy (for example: finding if a point is inside $x^2 + y^2 + z^2 = 0$)

On the other hand, all points are given directly in an _explicit representation_. For example. we can say all points on sphere are $(\cos(u)\sin(v), \sin(u)\sin(v), \cos(v))$

## Surface Vs Volume Representations

Surface representation is currently more prevalent in computer graphics [[polygon mesh|Polygon mesh]], in particular triangle mesh, is the most widely used 3D format because of its properties and efficiency in rendering.

However, using a volume representation also has its advantages. Volumes is a better source of truth since all volumes can be convert to surfaces, but only [[watertight mesh|watertight]] surfaces can be converted to volumes. [^1]

Surface and volume representation can be converted between each other using various algorithms. These conversions work in both directions:
1. volume to surface: [[./isosurface extraction|isosurface extraction]] methods, such as [[marching cubes|marching cubes]] or [[dual contouring|dual contouring]], can generate a surface representation from volumetric data
2. surface to volume: techniques like [[voxelization|voxelization]] can transform surface models into volumetric representations

## Representations
### Explicit
#### Surfaces
- [[polygon mesh|polygon mesh]]
  - [[triangle mesh|triangle mesh]]
- [[surfels|surfels]]
- [[splats|splats]]
- [[height map|height map]]

#### Volumes
- [[./voxel MOC|voxel]]
- [[point clouds|point clouds]]

### Implicit
#### Surfaces
- [[./level sets|level set]] methods
- [[./NURBS|NURBS]]

#### Volumes
- implicit functions
- [[SDF|signed distance field]] (SDF)
- [[./constructive solid geometry|constructive solid geometry]] (CSG)
- [[BSP tree|BSP tree]]

#### Others
- [[L-system|L-systems]]
- [[fractal|fractals]]


[^1]: [Claire Blackshaw: Surface vs Volume Formats in Tools](http://claire-blackshaw.com/blog/2024/09/volume_vs_surface/)