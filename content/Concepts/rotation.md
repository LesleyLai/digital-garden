---
aliases:
  - "#math/geometry/transformation/rotation"
  - rotation matrices
  - rotation matrix
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/LinearAlgebra/orthogonality
  - math/geometry/transformation/rotation
---

# Rotation
[[rotation|Rotation]] holds three invariants:
- Keeps origin fixed
- preserves distances between points: $(f(\mathbf{x}) - f(\mathbf{y})) = \mathbf{x} - \mathbf{y}$
- preserves orientation ($det(f) > 0$)
The first two implies that rotation is a [[./linear transformation|linear transformation]].

Rotation matrix is [[./orthogonal matrix|orthogonal]], which means [[./Inverse of a orthogonal matrix is its transpose|its transpose is equal to its inverse]] ($R^T = R^{-1}$).

Rotation maps the [[standard basis|standard basis]] to [[./orthonormal basis|ONB]] $e_1,\, e_2,\, e_3$.


## Ways to Specify Rotations
- [[Euler angles|Euler angles]]
- rotation matrix
  - [[./2D rotation matrix|2D]]
  - [[Rodrigues' rotation formula|axis-angle rotation]]
- [[./complex numbers|complex numbers]]/[[quaternions|quaternions]]
- [[./rotors|rotors]]