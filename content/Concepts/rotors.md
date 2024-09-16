---
aliases:
  - rotor
created: 2023-05-30
modified: 2024-07-09
parent:
  - "[[./rotation|rotation]]"
publish: true
tags:
  - math/geometric_algebra
  - math/definitions
---

# Rotors

**Rotors** are construct in geometric algebra to represent [[./rotation|rotation]]. It generalizes [[./complex numbers|complex numbers]] and [[quaternions|quaternion]] but can even works on higher dimensions. Even though 3D rotors and quaternions are [[./isomorphism|isomorphic]], rotors are easier to visualize and does not require a fourth dimension or [[stereographic projection|stereographic projection]].

A rotor $\mathbf{a} \mathbf{b}$ is created by [[./geometric product|geometric product]] between two vectors $\mathbf{a}$ and $\mathbf{b}$: $\mathbf{a}\mathbf{b} = \mathbf{a} \cdot \mathbf{b} + \mathbf{a} \wedge \mathbf{b}$. It represents a rotation **by twice the angle** between vector $\mathbf{a}$ to vector $\mathbf{b}$. To perform rotation with this rotor $\mathbf{a} \mathbf{b}$, we need to multiply it on both sides of the vector we perform a rotation ($\mathbf{b} \mathbf{a}$ is same as $\mathbf{a} \mathbf{b}$ except with the bivector part flipped) [^1]:
$$
\text{rotate}(\mathbf{a} \mathbf{b})(\mathbf{v}) =
\mathbf{b} \mathbf{a} \ \mathbf{v} \ \mathbf{a} \mathbf{b}
$$
> [!info] View the note on [[./geometric product#Rotation|geometric product]] for more information.

This is analogous to the [[quaternions#Quaternion and Rotation|quaternion]], where to perform a rotation we need to apply a quaternion and its conjugate: $q \mathbf{v} q^*$


[^1]: [Let's remove Quaternions from every 3D Engine (An Interactive Introduction to Rotors from Geometric Algebra) - Marc ten Bosch](https://marctenbosch.com/quaternions/#h_17)

## Related
- [[./complex numbers|complex numbers]] and [[quaternions|quaternion]]
- [[Lie group|Lie group]]