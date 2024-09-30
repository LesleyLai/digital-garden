---
aliases:
  - LU decomposition
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#math/LinearAlgebra/decomposition"
  - "#math/LinearAlgebra/LinearSolver"
---
**LU factorization** decomposes a matrix into a [[./triangular matrix|lower-triangular matrix]] $L$ and an upper-triangular matrix $\mathrm{U}$.

We get the lower-triangular matrix $\mathrm{L}$ by multiplying the inverse of [[./elementary matrix|elementary matrices]] we get from [[./Gaussian elimination|Gaussian elimination]]. And the remaining matrix in [[./row echelon form|row echelon form]] is the upper-triangular matrix $\mathrm{U}$.

>[!example]- Find the LU decomposition of $\left[\begin{array}{ccc}3 & -7 & -2 \\-3 & 5 & 1 \\6 & -4 & 0\end{array}\right]$
> We can perform Gaussian elimination and write down the elementary matrices.
> First, add row 1 to row 2:
> $$\mathrm{A_1}=\left(\begin{array}{rrr}
3 & -7 & -2 \\
0 & -2 & -1 \\
6 & -4 & 0
\end{array}\right),\ \mathrm{E_1}=\left(\begin{array}{rrr}
1 & 0 & 0 \\
1 & 1 & 0 \\
0 & 0 & 1
\end{array}\right)$$
> Then Subtract row 1 multiplied by 2 from row 3
> $$\mathrm{A_2}=\left(\begin{array}{rrr}
3 & -7 & -2 \\
0 & -2 & -1 \\
0 & 10 & 4
\end{array}\right),\ \mathrm{E_2}=\left(\begin{array}{rrr}
1 & 0 & 0 \\
0 & 1 & 0 \\
-2 & 0 & 1
\end{array}\right)$$
> Then add row 2 multiply by 5 from row 3
> $$\mathrm{A_3}=\left(\begin{array}{rrr}
3 & -7 & -2 \\
0 & -2 & -1 \\
0 & 0 & -1
\end{array}\right),\ \mathrm{E_3}=\left(\begin{array}{rrr}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 5 & 1
\end{array}\right)$$
$\mathrm{A}_3$ is in the [[./row echelon form|row echelon form]] so it is $\mathrm{U}$, and
> $$\mathrm{L}=\mathrm{E_3}^{-1}\mathrm{E_2}^{-1}\mathrm{E_1}^{-1}=\left(\begin{array}{rrr}
1 & 0 & 0 \\
-1 & 1 & 0 \\
2 & -5 & 1
\end{array}\right)$$

Compare to Gaussian elimination, LU decomposition can save computation when we solve $\mathrm{A}\mathbf{x} = \mathbf{b}$ repeatedly with different $\mathbf{b}$s. To solve $(\mathrm{LU})\mathbf{x} = \mathbf{b}$, we can let $\mathbf{y} = \mathrm{U}\mathbf{x}$ and then first solve $\mathrm{L}\mathbf{y = b}$ for $\mathbf{y}$ and then $\mathrm{U}\mathbf{x = y}$ for $\mathbf{x}$. Since $\mathrm{L}$ and $\mathrm{U}$ are [[./triangular matrix|triangular matrices]], we can solve the above equation trivially by forward and [[back substitution|back substitution]].

>[!example]- Continue from above example
>Let $\mathrm{L}=\left(\begin{array}{rrr}
1 & 0 & 0 \\
-1 & 1 & 0 \\
2 & -5 & 1
\end{array}\right), \mathrm{U}=\left(\begin{array}{rrr}
3 & -7 & -2 \\
0 & -2 & -1 \\
0 & 0 & -1
\end{array}\right) \text {, and } \mathbf{b}=\left(\begin{array}{r}
1 \\
-1 \\
1
\end{array}\right)$. To solve $\mathbf{x}$ in $(\mathrm{LU})\mathbf{x} = \mathbf{b}$, we can let $\mathbf{y} = \mathrm{U}\mathbf{x}$. Then by forward substitution, $\mathbf{y} = [1 \quad 0 \quad -1]^T$. And then we can do back substitution in $\mathrm{U}\mathbf{x} = \mathbf{y}$ and $\mathbf{x} = [-\frac{1}{6} \quad -\frac{1}{2} \quad 1]^T$.