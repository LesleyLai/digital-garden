---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/LinearAlgebra/inverse
---

**Gauss-Jordan elimination** is an algorithm to solve a system of linear equation and find the [[./matrix inverse|inverse]] of an invertible matrix.

It first [[augmented matrix|augments]] a [[square matrix|square matrix]] $A$ with identity matrix, and reduces the augmented matrix to to [[./reduced row echelon form|reduced row echelon form]]:
$$
[ \; A \ I \; ] \rightarrow [ \; I \ A^{-1} \; ]
$$

> [!example]-
> $$
\begin{aligned}
&\begin{array}{cc|cc}
1 & 0 & 7 & -3 \\
0 & 1 & -2 & 1
\end{array} \\
=\quad &\begin{array}{cc|cc}
1 & 3 & 1 & 0 \\
0 & 1 & -2 & 1
\end{array} \\
=\quad &\begin{array}{cc|cc}
1 & 3 & 1 & 0 \\
2 & 7 & 0 & 1
\end{array}
\end{aligned}
>$$

The algorithm can be seen as an extension to the [[./Gaussian elimination|Gaussian elimination]].