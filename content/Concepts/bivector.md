---
created: 2023-05-30
modified: 2024-07-09
tags:
  - math/geometric_algebra
aliases:
  - 2-vector
  - oriented area
parent:
  - "[[geometric algebra|geometric algebra]]"
publish: true
---
A **bivector**, or an *oriented area* $\mathbf{B}$, is an oriented segment of a plane.

The area of a bivector $\mathbf{B}$ is called its *norm*, and is denoted by $|\mathbf{B}|$. [^2]

 A bivector $\mathbf{B}$ can be created from the [[./exterior product|wedge product]] $\mathbf{a} \wedge \mathbf{b}$. Geometrically, such a bivector $\mathbf{B} = \mathbf{a} \wedge \mathbf{b}$ represents the parallelogram formed by the the vectors  $\mathbf{a}$  and $\mathbf{b}$ , in the plane they span together. [^1]

Just like vectors that shares the same line, coplanar bivectors with the same norm are equal. In other word, a bivector has no information of its location. [^2]

## Bivector Vector Space

Just like the [[./Euclidean vector space|Euclidean vectors]] $\mathbb{R}^n$, Bivectors forms a [[./vector space|vector space]], with the scalar multiplication multiplies their area. 

For parallel bivectors, vector addition just sum their areas. For non-parallel bivectors, vector addition gives back the result of something like following
![[../assets/bivector_addition.png|bivector_addition.png]]

## In 2D
In 2D, there is only one plane, the $\mathbf{x}\mathbf{y}$ plane. So a 2D bivector only has one component $\mathbf{x} \wedge \mathbf{y}$. The norm $\|\mathbf{a} \wedge \mathbf{b}\|$ is the the signed area of the parallelogram the two vectors form together.

![[../assets/2D bivector basis.png|2D bivector basis.png]]

## In 3D
In 3D, a bivector contains 3 orthogonal basis planes: $\mathbf{x} \wedge \mathbf{y}$, $\mathbf{x} \wedge \mathbf{z}$, $\mathbf{y} \wedge \mathbf{z}$.

![[../assets/3D bivector basis.png|3D bivector basis.png]]

Just like the coordinates of a vector $\mathbf{v}$ can be view as the [[./vector projection|projections]] of the vector onto the three orthogonal basis axes, the coordinates of a bivector $\mathbf{B}$ can be thought of as **projections** of the bivector plane onto the three orthogonal basis planes:

![[../assets/3D bivector components.png|400]]

## Related
- [[./Euclidean vector space|Euclidean vectors]] - Represents oriented lengths
- [[trivector|trivector]] - Represents oriented volumes


[^1]: [Let's remove Quaternions from every 3D Engine (An Interactive Introduction to Rotors from Geometric Algebra) - Marc ten Bosch](https://marctenbosch.com/quaternions)
[^2]: [Linear and Geometric Algebra](http://www.faculty.luther.edu/~macdonal/laga/) 5.1