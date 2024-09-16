---
created: 2024-02-29
modified: 2024-03-14
parent:
  - "[[rotation|rotation]]"
publish: true
tags:
  - "#math/geometry/transformation/rotation"
---

A 2D rotation can be represented by the following rotation matrix:
$$
\begin{equation}
\left[\begin{array}{l}
x^{\prime} \\
y^{\prime}
\end{array}\right]=\left[\begin{array}{cc}
\cos \theta & -\sin \theta \\
\sin \theta & \cos \theta
\end{array}\right]\left[\begin{array}{l}
x \\
y
\end{array}\right]
\end{equation}
$$

## Verify of Orthogonality
The matrix is orthogonal as we can verify $R^TR = I$:
$$
\left[\begin{array}{cc}
\cos \theta & -\sin \theta \\
\sin \theta & \cos \theta
\end{array}\right]
\left[\begin{array}{cc}
\cos \theta & \sin \theta \\
-\sin \theta & \cos \theta
\end{array}\right]
=
\left[\begin{array}{cc}
\cos^2 \theta + \sin^2 \theta & 0 \\
0 & + \sin^2 \theta + \cos^2 \theta 
\end{array}\right]
 = I
$$

## See Also
- [[Rodrigues' rotation formula|Rodrigues' rotation formula]]