---
aliases:
  - image of matrices
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[four fundamental subspaces|four fundamental subspaces]]"
publish: true
tags:
  - math/LinearAlgebra/VectorSpace
  - math/definitions
---

# Column Space

> [!definition] The **Column Space** $Col(A)$ of a matrix $A$ is the [[./linear span|span]] (set of all possible [[./linear combination|linear combinations]]) of its column vectors.

The column space is also called the **image**.

The [[row space|row space]] is defined similarly.

>[!example]+
>If $A=\left[\begin{array}{ll}1 & 3 \\ 2 & 3 \\ 4 & 1\end{array}\right]$, the column space of $A$ is a [[./subspaces|subspace]] (a plane through the origin) of $\mathbb{R}^3$ containing $\left[\begin{array}{l}1 \\ 2 \\ 4\end{array}\right]$ and $\left[\begin{array}{l}3 \\ 3 \\ 1\end{array}\right]$

Column space is crucial in linear algebra since **to solve $A\mathbf{x} = \mathbf{b}$ is the same as to express $\mathbf{b}$ as a linear combination of columns of $A$.**

> [!info] The system $A\mathbf{x} = \mathbf{b}$ is solvable if and only if $\mathbf{b}$ is in the column space of $A$

## References
- [Row and column spaces - Wikipedia](https://en.wikipedia.org/wiki/Row_and_column_spaces)
- [[Introduction to Linear Algebra|Introduction to Linear Algebra]] 3.1, 3.2