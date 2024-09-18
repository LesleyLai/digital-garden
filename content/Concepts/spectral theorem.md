---
aliases:
  - spectral decomposition
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/LinearAlgebra/decomposition
---

# Spectral Theorem

A [[./symmetric matrix|symmetric matrix]] $A = A^T$ with
	- [[./orthonormality|orthonormal]] [[eigenvalues|eigenvectors]], $e_1, \cdots, e_n \in \mathbb{R}^n$
	- real eigenvalues $\lambda_1,\lambda_n \in \mathbb{R}$
	can also written as $AR = RD$, where $$R = [e_1 \cdots e_n] \qquad D=\left[\begin{array}{lll}
\lambda_1 && \\
& \cdots & \\
&& \lambda_n
\end{array}\right]$$
    - Equivalently, $A = RDR^T$
    - Hence, every symmetric matrix performs a non-uniform scaling along some set of orthogonal axis.
    - If $A$ is [[./definite matrix|positive-definite]] ($\lambda_i > 0$) this scaling is positive