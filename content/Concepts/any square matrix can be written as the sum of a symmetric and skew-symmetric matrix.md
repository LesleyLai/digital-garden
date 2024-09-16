---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#math/LinearAlgebra"
---

Any [[square matrix|square matrix]] can be **[[uniqueness|uniquely expressed]]** as the sum of a [[./symmetric matrix|symmetric]] and [[./skew-symmetric matrix|skew-symmetric matrix]].

> [!note]- Proof
> 
> Let $A$ be a square matrix. Then
> $$
> A = \frac{1}{2} (A + A^T) + \frac{1}{2} (A - A^T)
> $$
> Then
> $$
> (A + A^T)^T = A + A^T
> $$
> Thus $\frac{1}{2}(A + A^T)$ is symmetric.
> And
> $$
> (A - A^T)^T = A^T - A = -(A - A^T)
> $$
> Thus, $\frac{1}{2}(A - A^T)$ is skew-symmetric.