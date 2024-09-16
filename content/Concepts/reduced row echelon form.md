---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/LinearAlgebra
  - math/definitions
---

# Reduced Row Echelon Form
Compare to [[./row echelon form|row echelon form]], we not only eliminate numbers below the pivot, but also eliminate those above the pivot. We gets **reduced row echelon form** from [[./Gauss–Jordan elimination|Gauss–Jordan elimination]].

>[!example]- Example and counter-example
> The following matrix is in reduced row echelon form
>$$
\left(\begin{array}{llll}
1 & 2 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{array}\right)
>$$
> The following matrix is *not* in reduced row echelon form
>$$
\left(\begin{array}{llll}
1 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 1
\end{array}\right)
>$$

In reduced row echelon form, all pivots are 1 with 0 above and below. Columns with pivots are called "pivot columns."