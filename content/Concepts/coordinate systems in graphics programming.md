---
parent:
  - "[[computer graphics MOC|computer graphics MOC]]"
tags:
  - computing/graphics/coordinateSystems
created: 2024-09-20
modified: 2024-09-22
publish: true
---
In computer graphics, there are various objects such as points, vectors, and normal vectors in space. These values are meaningless without a **coordinate system** that defines the _origin of the space_ and gives _[[./basis|basis vectors]]_ that define $x$, $y$, and $z$ axis. Together, the origin and those basis vectors are called [[reference frame|frame]] that defines the coordinate system.

In the general $n$-dimensional case, a frame's origin $p_0$ and its $n$ linearly independent basis vectors define an n-dimensional [[affine space|affine space]]. All vectors $\mathbf{v}$ in the space can be represented as a [[./linear combination|linear combination]] of the basis vectors. Given a vector $\mathbf{v}$ and the basis vectors $\mathbf{v}_i$, there is a unique set of scalar values $s_i$ such that
$$
\mathbf{v} = \sum_{i = 0}^n s_i \mathbf{v}_i
$$
We can represent points in a similar way:
$$
p = p_0 + \sum_{i = 0}^n s_i \mathbf{v}_i
$$
Defining points and vectors in terms of coordinate systems introduces a paradox: to establish a frame, we need a point and a set of vectors, yet points and vectors can only be meaningfully described relative to an existing frame. To resolve this, we rely on a _standard frame_ with an origin at $(0,0,0)$ and unit vectors as the basis. This standard frame is referred to as the _world space_, and all other frames are defined relative to this canonical coordinate system.  [^pbrt]

## Subsections
- [[./coordinate system handedness|handedness]]
- [[./coordinate system conventions across graphics applications|conventions across graphics applications]]

## Different Coordinate Systems
There are various coordinate systems used in computer graphics. We can perform operations such as vector addition and multiplication as long as the vectors are within the same coordinate system. However, mixing vectors from different coordinate systems leads to ill-defined results. [^type] To convert a vector from one space to another, you can apply a transformation using a matrix.

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

![[../assets/coordinate_systems.png|coordinate_systems.png]]
[^learnopengl]

[^type]: The type system of normal programming languages or shading languages usually won't prevent the kind of "geometry bugs" by using vectors in wrong coordinate systems, but there are [[./geometry type system|active researches]] on how to solve this problem.
[^learnopengl]: Image from [Coordinate Systems | Learn OpenGL](https://learnopengl.com/Getting-started/Coordinate-Systems)
[^pbrt]: [Coordinate Systems](https://pbr-book.org/4ed/Geometry_and_Transformations/Coordinate_Systems)