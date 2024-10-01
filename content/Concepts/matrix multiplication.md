---
aliases:
  - matrix-matrix products
created: 2024-04-16
modified: 2024-05-12
parent:
  - "[[linear algebra|linear algebra]]"
publish: true
tags:
  - math/linearalgebra/matrices
---
Similar to [[./matrix-vector multiplication|matrix-vector multiplication]], there are multiple ways to interpret matrix-matrix multiplication. The most common one (and by definition) is the [[./inner product|inner product]] interpretation:
$$
C=A B=\left[\begin{array}{ccc}
- & a_1^T & - \\
- & a_2^T & - \\
& \vdots & \\
- & a_m^T & -
\end{array}\right]\left[\begin{array}{cccc}
\mid & \mid & & \mid \\
b^1 & b^2 & \cdots & b^p \\
\mid & \mid & & \mid
\end{array}\right]=\left[\begin{array}{cccc}
a_1^T b^1 & a_1^T b^2 & \cdots & a_1^T b^p \\
a_2^T b^1 & a_2^T b^2 & \cdots & a_2^T b^p \\
\vdots & \vdots & \ddots & \vdots \\
a_m^T b^1 & a_m^T b^2 & \cdots & a_m^T b^p
\end{array}\right]
$$

![[../assets/matrix multiplication as inner products.png|300]]

## Interpret Matrix Multiplication as a Set of Matrix-vector Multiplications

For matrix vector multiplication $C = AB$, if we view $B$ as columns, we can view the columns of $C$ as matrix-vector products between $A$ and the columns of $B$
$$
C=A B=A\left[\begin{array}{cccc}
\mid & \mid & & \mid \\
b^1 & b^2 & \cdots & b^p \\
\mid & \mid & & \mid
\end{array}\right]=\left[\begin{array}{cccc}
\mid & \mid & & \mid \\
A b^1 & A b^2 & \cdots & A b^p \\
\mid & \mid & & \mid
\end{array}\right]
$$

Analogously, if we represent $A$ by rows, we can view the rows of $C$ as the matrix-vector product between the rows of $A$ and $B$
$$
C=A B=\left[\begin{array}{ccc}
- & a_1^T & - \\
- & a_2^T & - \\
& \vdots & \\
- & a_m^T & -
\end{array}\right] B=\left[\begin{array}{ccc}
- & a_1^T B & - \\
- & a_2^T B & - \\
& \vdots & \\
- & a_m^T B & -
\end{array}\right]
$$