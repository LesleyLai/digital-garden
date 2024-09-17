---
parent:
  - "[[quantum logic gates|quantum logic gates]]"
publish: true
tags:
  - computer/quantum/gates
created: 2024-04-27
modified: 2024-04-27
---
# The Hadamard Gate
See also: [[Hadamard matrix|Hadamard matrix]]

Denoting by $H$, the Hadamard gate does the following to the computational basis state:
$$
\begin{align}
H|0\rangle &= \frac{|0\rangle + |1\rangle}{\sqrt{ 2 }} \\
H|1\rangle &= \frac{|0\rangle - |1\rangle}{\sqrt{ 2 }}
\end{align}
$$ 
In general, the Hadamard gate takes a superposition $\alpha|0\rangle + \beta|1\rangle$ to
$$
\begin{align}
H(\alpha|0\rangle + \beta|1\rangle)  &= \alpha\left(\frac{|0\rangle + |1\rangle}{\sqrt{ 2 }}\right) + \beta\left(\frac{|0\rangle - |1\rangle}{\sqrt{ 2 }}\right) \\
&= \frac{\alpha + \beta}{\sqrt{ 2 }}|0\rangle + \frac{\alpha - \beta}{\sqrt{ 2 }}|1\rangle
\end{align}
$$

The matrix representation of the $H$ gate is
$$
H = \frac{1}{\sqrt{ 2 }}\begin{bmatrix}
1 & 1  \\
1 & -1
\end{bmatrix}
$$

Just like the [[./The Quantum NOT Gate|X Gate]], [[./involutory matrix|the inverse of the Hadamard Gate is itself]], which means the two Hadamard Gate cancel each other:
![[../H_H_identity.png|500]]
This can be counterintuitive since one Hadamard Gate "spread out" in basis states to states like $\frac{|0\rangle + |1\rangle}{\sqrt{ 2 }}$, but the second Hadamard Gate does not further "spread out" the states but instead restore the original basis states.