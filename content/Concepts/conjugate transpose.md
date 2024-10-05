---
tags:
  - math/LinearAlgebra/matrices
  - math/complex
created: 2024-04-21
modified: 2024-10-05
publish: true
aliases:
  - Hermitian transpose
---
The **conjugate transpose**, also known as **Hermitian transpose**, performs [[complex conjugate|complex conjugate]] on each element of a complex matrix and then [[./transpose|transpose]] it. There are several notations, such as $A^*$, $A^H$, $A'$, and (often in physics) $A^{\dagger}$. [^1]

For example, the conjugate transpose of a 2x2 matrix is
$$\begin{bmatrix} a & b \\ c & d\end{bmatrix}^* = \begin{bmatrix} a^* & c^* \\ b^* & d^*\end{bmatrix}$$
Where $a^*$, $b^*$, $c^*$, $d^*$ represent the complex conjugates of each elements.

For a real matrix, the conjugate transpose is just the transpose: $A^* = A^T$. [^1]

## Related
- A complex square matrix $A$ is [[./unitary matrix|unitary]] is $A^* = A^{-1}$

[^1]: [Conjugate transpose - Wikipedia](https://en.wikipedia.org/wiki/Conjugate_transpose)