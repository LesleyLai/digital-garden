---
created: 2024-04-21
generalizations:
  - "[[square matrix|square matrix]]"
modified: 2024-05-20
parent:
  - "[[linear algebra|linear algebra]]"
publish: true
specializations:
  - "[[./orthogonal matrix|orthogonal matrix]]"
tags:
  - math/LinearAlgebra/orthogonality
---

# Unitary Matrix

An invertible complex [[square matrix|square matrix]] $U$ is **unitary** if its [[./matrix inverse|matrix inverse]] $U^{-1}$ equals to its [[conjugate transpose|conjugate transpose]] $U^*$, that is, if $U^*U = UU^* = I$.

In physics, especially in quantum mechanics, the conjugate transpose is denoted by a dagger ($\dagger$), so the above equation become $U^{\dagger}U = UU^{\dagger} = I$.

For real numbers, the analogue of a unitary matrix is an [[./orthogonal matrix|orthogonal matrix]]. Unitary matrices have significant importance in quantum mechanics because they preserve [[./norm|norms]] ($\|U\mathbf{x}\| = \|\mathbf{x}\|$), and thus, probability amplitudes.

## Related
- [[./involutory matrix|involutory matrix]] - square matrix that is its own inverse

## References
- [Unitary matrix - Wikipedia](https://en.m.wikipedia.org/wiki/Unitary_matrix)