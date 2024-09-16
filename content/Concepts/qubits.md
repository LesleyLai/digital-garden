---
aliases:
  - quantum bit
  - quantum bits
  - qubit
created: 2024-04-15
modified: 2024-05-20
parent:
  - "[[quantum computing|quantum computing]]"
publish: true
tags:
  - computer/quantum
---
**Qubit** is a short-hand for **quantum bit**.

Unlike classical bits  [^1], which has the state space of $\{ 0, 1 \}$, qubits' state is a subset of a *two-dimensional vector space*. For instance, a possible state of qubits is $\begin{bmatrix}1 \\ 0 \end{bmatrix}$.

## The Computational Basis States
There are two special quantum states which correspond to the 0 and 1 states of a classical bit: the unit basis vectors. People like to write them in the special [[./bra-ket notation|bra-ket notation]]:
$$
|0\rangle := \begin{bmatrix}1 \\ 0 \end{bmatrix} \qquad |1\rangle := \begin{bmatrix}0 \\ 1 \end{bmatrix}
$$
We call those special states $|0\rangle$ and $|1\rangle$ "computational basis state."

## States of a Qubit
A general quantum state the entries can be complex numbers.
$$
\frac{1+i}{2}|0\rangle+\frac{i}{\sqrt{2}}|1\rangle
$$
Also, quantum states have the _normalization constraint_: the sum of the squares of the amplitudes constraint to $1$. i.e. for $\alpha|0\rangle + \beta|1\rangle$, $|\alpha|^2 + |\beta|^2 = 1$

![[../cbs_redux.png|300]]

In summary, the quantum state of a qubit is a vector of unit length in a two-dimensional complex vector space known as state space.

## Measuring a Qubit
See: [[./measuring a qubit|measuring a qubit]]

# References
- [Quantum computing for the very curious](https://quantum.country/qcvc)

[^1]: "classical" in "classical bits" comes from "classical mechanics"