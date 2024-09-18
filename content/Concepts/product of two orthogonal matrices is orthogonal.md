---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

#math/LinearAlgebra/orthogonality 
## Product of Two Orthogonal Matrices is Orthogonal

The product of two orthogonal matrices is orthogonal.

### Proof
Let $Q_1$ and $Q_2$ be two orthogonal matrices. Then
$$
\begin{align}
(Q_1 Q_2)^T
&= Q_2^T Q_1^T \\
&= Q_2^{-1} Q_1^{-1} \\
&= (Q_1 Q_2)^{-1}
\end{align}
$$