---
created: 2024-05-20
modified: 2024-05-20
parent:
  - "[[qubits|qubit]]"
  - "[[quantum logic gates|quantum logic gates]]"
publish: true
tags:
  - computer/quantum/gates
---

# Measuring a Qubit
The quantum state of any state is not directly observable.

For a qubit in the state $\alpha|0\rangle + \beta|1\rangle$, when we measure this qubit in the computational basis, it gives outcome 0 with probability $|\alpha|^2$ and outcome 1 with probability $|\beta|^2$.

Note that after we measure a state $\alpha|0\rangle + \beta|1\rangle$ in the computational basis, it is no longer in the superposition state. Instead, if we get outcome 0, the quantum state will be $|0\rangle$. And same for 1.

The following circuit denoting measurements in the quantum circuit model. Note that we use the double wire at right to indicate that the measurement outputs a classical bit (either 0 or 1).
![[../quantum_measure.png|400]]