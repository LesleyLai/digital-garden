---
aliases:
  - matrix-vector products
parent:
  - "[[linear algebra|linear algebra]]"
publish: true
tags:
  - math/LinearAlgebra/matrices
created: 2024-04-06
modified: 2024-04-06
---
There are multiple ways to look at matrix vector multiplication $A\mathbf{x}$
[[./matrix|matrix]]:

As [[./dot product|dot product]] of row vectors and the vector:
$$
y=A \mathbf{x}=\left[\begin{array}{ccc}
- & a_1^T & - \\
- & a_2^T & - \\
& \vdots & \\
- & a_m^T & -
\end{array}\right] x=\left[\begin{array}{c}
\mathbf{a_1^T} \mathbf{x} \\
\mathbf{a_2^T}  \mathbf{x} \\
\vdots \\
\mathbf{a_m^T}  \mathbf{x}
\end{array}\right]
$$

As [[./linear combination|linear combination]] of column vectors:
$$
y=A \mathbf{x}=\left[\begin{array}{cccc}
\mid & \mid & & \mid \\
a^1 & a^2 & \ldots & a^n \\
\mid & \mid & & \mid
\end{array}\right]\left[\begin{array}{c}
x_1 \\
x_2 \\
\vdots \\
x_n
\end{array}\right]=\left[\begin{array}{c}
\mid \\
a^1  \\
\mid
\end{array}\right] x_1
+\left[\begin{array}{c}
\mid \\
a^2  \\
\mid
\end{array}\right] x_2
+\ldots
+\left[\begin{array}{c}
\mid \\
a^n  \\
\mid
\end{array}\right] x_n
$$

## Related
- [[./matrix multiplication|matrix multiplication]]