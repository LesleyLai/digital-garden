---
aliases:
  - "#computing/quantum/gates"
created: 2024-04-18
modified: 2024-05-20
parent:
  - "[[quantum computing|quantum computing]]"
publish: true
tags:
  - computing/quantum/gates
---
Many quantum logic gates are based on classic [[logic gate|logic gates]], but there are some differences.

## Single-Qubit Gates
A single-qubit gate is represented as a $2 \times 2$ [[./unitary matrix|unitary matrix]]. Examples:
- [[Pauli matrices|Pauli matrices]]
  - [[./The Quantum NOT Gate|The Quantum NOT Gate]] $X = \begin{bmatrix}0 & 1 \\1 & 0\end{bmatrix}$
  - $Y$ gate:  $Y = \begin{bmatrix} 0 & -i \\ i & 0\end{bmatrix}$
  - $Z$ gate: $Z = \begin{bmatrix} 1 & 0 \\ 0 & -1\end{bmatrix}$
- [[./The Hadamard Gate|The Hadamard Gate]] $H = \frac{1}{\sqrt{ 2 }}\begin{bmatrix}1 & 1  \\1 & -1\end{bmatrix}$
- Rotation: $\begin{bmatrix} \cos{\theta} & -\sin{\theta} \\ \sin{\theta} & \cos{\theta} \end{bmatrix}$
## Measuring a Qubit
See: [[./measuring a qubit|measuring a qubit]]

## Multi-Qubit Gates
- [[The Controlled-NOT Gate|The Controlled-NOT Gate]] $CNot$
- [[Toffoli gate|Toffoli gate]]

## References
- [Quantum computing for the very curious](https://quantum.country/qcvc#part-II)