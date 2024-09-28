---
aliases:
  - eigenvectors
  - eigenvalues and eigenvectors
  - 特征值
tags:
  - math/LinearAlgebra
  - math/definitions
created: 2023-05-30
modified: 2024-06-15
publish: true
---
# Eigenvalues and Eigenvectors
> [!definition]
>For a [[square matrix|square matrix]] $A$, **eigenvalues** are scalars $\lambda$ that satisfies the equation
> $$
\lambda \mathbf{u} = A \mathbf{u}
> $$
> and those $\mathbf{u}$ are **eigenvectors**.

Geometrically, a vector $v$ is an eigenvector of the linear transformation $T$ with eigenvalue $\lambda$ if $T$ stretches $v$ by a factor of $\lambda$.
![[../assets/eigen vector transformation.png|200]]

## Solutions to Eigenvalues
To find solution for eigenvalues, we can rewrite the equation in the form of
$$(\lambda I - A)\mathbf{u} = \mathbf{0}$$
It follows that the matrix $(\lambda I - A)\mathbf{u}$ must be [[./matrix inverse|singular]], and its determinant must be 0.

In other word, a number $\lambda$ will be an eigenvalue of a square matrix $A$ if and only if $\lambda$ is a root of the [[characteristic polynomial|characteristic polynomial]]
$$
P(t) = \det(tI - A)
$$

>[!example]- Example: Find the eigenvalues for the  matrix $A = \begin{bmatrix}  2 & 1\\  1 & 2  \end{bmatrix}$
>$$
\begin{align}
\det(A - \lambda I)
&= \left|\begin{bmatrix}  
2 & 1 \\  
1 & 2  
\end{bmatrix} - \lambda\begin{bmatrix}  
1 & 0 \\  
0 & 1  
\end{bmatrix}\right| = \begin{vmatrix}  
2 - \lambda & 1 \\  
1 & 2 - \lambda  
\end{vmatrix} \\[6pt]  
&= 3 - 4\lambda + \lambda^2 \\[6pt]  
&= (\lambda - 3)(\lambda - 1).  
\end{align}
>$$
Thus we have eigen values $\lambda = 3$ and $\lambda = 1$.

## Eigenvalues and Similar Matrices
> [!theorem] Let $A$ and $B$ be [[matrix similarity|similar matrices]]. Then the [[characteristic polynomial|characteristic polynomial]] of $A$ is equal to the characteristic polynomial of $B$.

**Proof**: For $A$ and $B$ to be similar, there must be a matrix $C$ such that $A = C^{-1}BC$. Then
$$
\begin{align}
\det{(tI - A)} &= \det{(tI - C^{-1}BC)} \\
&= \det(tC^{-1}C - C^{-1}BC) \\
&= \det(C^{-1})\det{(tI - B)}\det{(C)} \\
&= \det{(tI - B)} & (\text{since } \det(C^{-1})\det{(C)} = 1 )
\end{align}
$$
Since the characteristic polynomials for similar matrices are the same, the eigenvalues must also be the same.
> [!corollary] Corollary: The eigenvalues for similar matrices are equal

However, having equal eigenvalues does not force matrices to be similar.
## Eigenvalues and Determinant
> [!theorem]
> Let $\lambda_1, \dots, \lambda_n$ be the eigenvalues, count with multiplicity, of a matrix $A$. Then
> $$
\det(A) = \lambda_1 \dots \lambda_n
> $$

We need to "count with multiplicity" because a polynomial can have a root that must be counted more than once (i.e. $(x - 2)^2$ has the single root $2$ which we want to count twice)

## Eigenvectors Forms a Vector Space
Eigenvectors forms a [[./subspaces|subspace]] because $\lambda \mathbf{u} = A \mathbf{u} = \lambda \mathbf{v} = A \mathbf{v} \implies \lambda (\mathbf{u} + \mathbf{v}) = A(\mathbf{u} + \mathbf{v})$

## Eigenvalues for Matrix Polynomials
For a [[matrix polynomial|matrix polynomial]] $f(A) = c_k A^k + c_{k - 1} A^{k - 1} + \cdots + c_1A + c_0 I$
- if $\lambda$ is an eigenvalue of $A$, then $f(\lambda)$ must be an eigenvalue of $f(A)$
- there is a [[./injection|one-to-one]] mapping between $A$'s eigenvalue $\{ \lambda_1, \lambda_2, \dots, \lambda_n \}$ and $f(A)$'s eigenvalue  $\{ f(\lambda_1), f(\lambda_2), \dots, f(\lambda_n) \}$

An important application of this is the [[spectral radius|spectral radius]] (maximum of the absolute values of the eigenvalues of a matrix). (Spectral radius is useful to see whether an algorithm converges)