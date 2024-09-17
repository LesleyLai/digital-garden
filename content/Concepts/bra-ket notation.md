---
aliases:
  - ket notation
  - ket
  - Dirac notation
  - kets
created: 2024-04-15
modified: 2024-05-30
parent:
  - "[[quantum mechanics|quantum mechanics]]"
publish: true
tags:
  - math/notations
---
# Bra-ket Notation
**Bra-ket notation**, or the **Dirac notation**, is a notation for complex vector spaces together with their dual space.

Looks like this:
$$\langle \text{bra} | \text{ket} \rangle$$
The name comes from the English word "Bracket".

A *ket* is of the form $|x\rangle$ that represents a column vector. For example:
$$
|0\rangle := \begin{bmatrix}1 \\ 0 \end{bmatrix} \qquad |1\rangle := \begin{bmatrix}0 \\ 1 \end{bmatrix}
$$
> [!warning]
> Don't confuse $|0\rangle$ with the $\mathbf{0}$ vector. It is instead a unit vector.

A *bra* is of the form $\langle \psi|$ represent a row vector. It is the [[conjugate transpose|conjugate transpose]] of $|\psi\rangle$.

> [!example] Example
> If $|\psi\rangle=\left[\begin{array}{c}1+i \\ 2-3 i\end{array}\right]$ then $\langle\psi|=\left[\begin{array}{cc}1-i & 2+3 i\end{array}\right]$

This notation is used ubiquitously in [[quantum mechanics|quantum mechanics]].

We sometimes combine the bra and ket: the notation $\langle \phi \, | \, \psi  \rangle$ means the [[./inner product|inner product]] $(\phi^*, \psi)$.

## Usage
We can write the length of the vector $|\psi\rangle$ as following:
$$
\||\psi\rangle \|=\sqrt{\langle\psi \mid \psi\rangle}
$$

We can also use the bra-ket notation to write the $jk$th component of the matrix $M$ in terms of unit vectors $e_j$ and $e_k$
$$
M_{j k}=\left\langle e_j|M| e_k\right\rangle
$$

## References
- [Bra–ket notation - Wikipedia](https://en.wikipedia.org/wiki/Bra%E2%80%93ket_notation)
- [DIRAC’s BRA AND KET Notation](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/4de6d044fa9d7e5b8998c5f8ca984a42_MIT8_05F13_Chap_04.pdf)
- [Bra-Ket Notation](https://www.mathsisfun.com/physics/bra-ket-notation.html)