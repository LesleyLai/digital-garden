---
parent:
  - "[[computer graphics MOC|computer graphics MOC]]"
tags:
  - computer/graphics/coordinateSystems
created: 2024-09-20
modified: 2024-09-20
publish: true
---
There are various coordinate systems used in computer graphics, each of which can be seen as a [[./vector space|vector space]] with a different [[./basis|basis]]. This allows for operations like vector addition and multiplication as long as the vectors belong to the same coordinate systems. However, mixing vectors from different coordinate systems leads to ill-defined results. [^type] To convert a vector from one space to another, you can apply a transformation using a matrix.

Here are some common coordinate systems (spaces) used in computer graphics applications.
- object space (local space)
- world space
  - applying the [[model matrix|model matrix]] to object space
- view space
  - applying the [[camera and view matrix|view matrix]] to world space
- [[clip space|clip space]]
  - applying the [[./projection matrix|projection matrix]] to view space
- [[./normalized device coordinate|normalized device coordinate]]
  - perspective divide clip space by $w$
- screen space

![[../coordinate_systems.png|coordinate_systems.png]]
[^learnopengl]
## Subsections
- [[coordinate system handedness|coordinate system handedness]]

[^type]: The type system of normal programming languages or shading languages usually won't prevent the kind of "geometry bugs" by using vectors in wrong coordinate systems, but there are [[./geometry type system|active researches]] on how to solve this problem.
[^learnopengl]: Image from [Coordinate Systems | Learn OpenGL](https://learnopengl.com/Getting-started/Coordinate-Systems)
