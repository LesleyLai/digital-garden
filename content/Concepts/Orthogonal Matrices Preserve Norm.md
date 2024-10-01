---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#math/LinearAlgebra/orthogonality"
---
Another property is that [[./orthogonal matrix|orthogonal matrices]] preserve [[./norm|norm]] of a vector ($||Q\mathbf{x}|| = ||\mathbf{x}||$). This is why it represents either [[./rotation|rotation]] or [[./reflection|reflection]] geometrically.
### Proof
$$
||(Q\mathbf{x})^t (Q\mathbf{x})|| = ||Q\mathbf{x}||^2
$$
$$
\begin{aligned}
(Q\mathbf{x})^t (Q\mathbf{x})
&= \mathbf{x}^t Q^t Q \mathbf{x} \\
&= \mathbf{x}^t (Q^t Q) \mathbf{x} \\
&= \mathbf{x}^t \mathbf{x}
\end{aligned}
$$
Thus, $||\mathbf{x}^t\mathbf{x}|| = ||\mathbf{x}||^2 = ||Q\mathbf{x}||^2$, $||\mathbf{x}|| = ||Q\mathbf{x}||$.