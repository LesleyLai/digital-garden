---
aliases:
  - Cycloid
created: 2024-01-08
modified: 2024-04-16
parent:
  - "[[./curve|curve]]"
publish: true
tags:
  - math/geometry/curve
---

# Cycloid
A cycloid is a [[parametric equation|parametric]] [[./curve|curve]] traced from rolling a circle.
![[../Cycloid_f.gif|Cycloid_f.gif]]
It has equation $\langle a\theta - a\sin{\theta}, a - a\cos{\theta} \rangle$ for a circle of radius $a$ rotated for angle $\theta$.

## Derivation
![[../cycloid.png|240]]
Consider the above diagram. We want to find $\overrightarrow{OP}$
$$
\begin{align}
\overrightarrow{OP} &= \overrightarrow{OC} + \overrightarrow{PC} \\
&= \langle a\theta, a\rangle + a \langle -\sin{\theta}, -\cos{\theta}\rangle \\
&= \langle a\theta - a\sin{\theta}, a - a\cos{\theta}
\end{align}
$$