---
aliases:
  - rotations as 2 reflections
  - rotation as a double reflection
  - translation as 2 reflections
created: 2024-07-09
modified: 2024-10-11
publish: true
tags:
  - math/geometry
  - math/LinearAlgebra/orthogonality
---
If we apply two successive [[./reflection|reflections]] to a vector $\mathbf{v}$ (using vector $\mathbf{a}$ and vector $\mathbf{b}$), we get **a [[./rotation|rotation]] by twice the angle between the vectors $\mathbf{a}$ and $\mathbf{b}$**:

![[../assets/two reflection gives a rotation.png|two reflection gives a rotation.png]]

The angle of this rotation is **twice** the angle between the reflection vectors $\mathbf{a}$ and $\mathbf{b}$.

## Intuition
One way to think about this property is the following: both reflection and rotations are [[./orthogonal transformation|orthogonal transformations]]. The difference is that rotation preserve orientation while reflection flip it. If we apply the reflection twice, the first reflection flip the orientation and the second reflection flip it back. Also, if we apply multiple orthogonal transformation, the combined transformation is still orthogonal. Thus, at the end we get an orthogonal transformation that is orientation-preserving, which is a rotation.
![[../assets/rotation as two reflection orientation.png|rotation as two reflection orientation.png]]

## Exception
For two reflections around two parallel lines, we get a [[./translation|translation]] instead:
![[../assets/translation as two reflections.png|400]]

## Related
- both [[quaternions|quaternion]] or [[./rotors|rotors]] construct rotation with this property (and that's why they use half the angle!)
- The [[quantum search algorithm|quantum search algorithm]] is based on this property

## References
- [Rotation as Product of Two Reflections - Wolfram Demonstrations Project](https://demonstrations.wolfram.com/RotationAsProductOfTwoReflections/)