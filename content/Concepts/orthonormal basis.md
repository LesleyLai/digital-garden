---
aliases:
  - ONB
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[linear algebra|linear algebra]]"
publish: true
tags:
  - "#math/LinearAlgebra/orthogonality"
---

# Orthonormal Basis

An **orthonormal basis** is a [[./basis|basis]] where each vector is [[./orthonormality|orthonormal]] (a.k.a. they are unit vectors and orthogonal to each other).

In other word, if $\mathbf{e}_1, \cdots, \mathbf{e}_n$ are basis vectors, then the [[./inner product|inner product]] is
$$
\begin{equation*}
\langle \mathbf{e}_i,\, \mathbf{e}_j\rangle = \begin{cases}
1 & x\leq i = j \\
0 & \text{otherwise}  \end{cases}
\end{equation*}
$$
We can use the [[./Gram-Schmidt process|Gram-Schmidt process]] to find the orthonormal basis from arbitrary basis. For 3 dimensional basis, we can also use the [[./cross product|cross product]].