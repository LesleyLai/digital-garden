---
created: 2024-04-27
modified: 2024-04-27
parent:
  - "[[quantum logic gates|quantum logic gates]]"
publish: true
tags:
  - computing/quantum/gates
---
For historical reasons, people usually use $X$ to represent the quantum Not gate (see [[Pauli matrices|Pauli matrices]]).

When taking  $|0\rangle$ and $|1\rangle$ states, the quantum Not gate does the same thing as the classic NOT gate:
$$
\begin{align}
X|0\rangle &= |1\rangle \\
X|1\rangle &= |0\rangle
\end{align}
$$
When the quantum Not gate act on a superposition state $\alpha|0\rangle + \beta|1\rangle$, it interchange the roles of $|0\rangle$ and $|1\rangle$:
$$
X(\alpha|0\rangle + \beta|1\rangle) = \alpha|1\rangle + \beta|0\rangle
$$
There’s an alternate representation, the _quantum circuit_ representation. In a quantum circuit we depict an $X$ gate as follows:
![[../assets/X_gate.png|X_gate.png]]
The line from left to right is what’s called a _quantum wire_. A quantum wire represents a single [[./qubits|qubit]].

A third representation of the $X$ gate is the matrix notation:
$$
X = \begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}
$$

[[./involutory matrix|The inverse of the Not Gate is itself]].