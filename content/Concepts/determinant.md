---
tags:
  - math/LinearAlgebra/determinant
  - math/definitions
parent:
  - "[[linear algebra|linear algebra]]"
aliases:
  - "#math/LinearAlgebra/determinant"
  - 行列式
  - Laplace expansion
created: 2023-05-30
modified: 2024-06-15
publish: true
---
## Geometric Intuition
Geometrically, we can view determinant as [[./geometric intuitions of determinant|the signed-volume scaling factor of a linear transformation]]
![[../assets/determinant_volume_change.png|determinant_volume_change.png]]
## Recursive Definition
> [!definition]
> We can define **determinant** by *Laplace expansion:
>$$
\begin{align}  
\det(a) &= a & (\text{for one dimensional matrix $a$}) \\
\det(B)&= \sum_{j=1}^{n} (-1)^{i+j}  B_{i,j} m_{i, j},
\end{align}
> $$
where $B_{i, j}$ is element at the $i$th row and $j$th column of $B$, and $m_{i, j}$ is the determinant of the submatrix obtained by removing the $i$th row and $j$th columns from B.

> [!example]-
>$$
\begin{align}
B &= \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix} \\
\det{B} &= 1 \cdot \begin{vmatrix} 5 & 6 \\ 8 & 9 \end{vmatrix} - 2 \cdot \begin{vmatrix} 4 & 6 \\ 7 & 9 \end{vmatrix} + 3 \cdot \begin{vmatrix} 4 & 5 \\ 7 & 8 \end{vmatrix} \\[5pt]  
& = 1 \cdot (-3) - 2 \cdot (-6) + 3 \cdot (-3) = 0
\end{align}
> $$

## Definition Based on Properties
Denote the $n \times n$ matrix $A$ as $A = (A_1,\, \dots,\, A_n)$, where $A_i$ denotes the $i$th column:
$$
A_i = \begin{bmatrix}
a_{1i} \\ a_{2i} \\ \vdots \\ a_{ni}
\end{bmatrix}
$$

> [!definition]
> The **determinant** of $A$ is defined as the unique real-valued function $\det : \text{Matrix} \rightarrow \mathbb{R}$
> - $\det{A_1,\,\dots,\,\lambda A_k,\,\dots,\,A_n} = \lambda \det(A_1,\,\dots\,A_k)$
> - $\det{A_1,\,\dots,\,A_k + \lambda A_i,\,\dots,\,A_n} = \lambda \det(A_1,\,\dots\,A_k)$ for $k \neq i$
> - $\det(I) = 1$

In order to be able to use this definition, we can prove that such a function that satisfying all the above conditions [[existence|exists]] and is [[uniqueness|unique]].
## Some Other Theorems
- $\det(A^T) = \det(A)$
- $A$ is [[./matrix inverse|invertible]] **iff** $\det(A) \neq 0$
  - In the same vein, if $\det(A) \neq 0$, its rows and columns must be [[./linear independence|linearly independent]]
- $\det(A B) = \det(A) \det(B)$
- If $A$ is invertible, then $\det(A^{-1}) = \frac{1}{\det(A)}$