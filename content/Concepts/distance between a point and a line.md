---
aliases:
  - distance from a point to a line
parent:
  - "[[geometry|geometry]]"
publish: true
tags:
  - geometry/distance
created: 2024-03-30
modified: 2024-03-30
---
The distance between point $\mathbf{p}$ and [[./equation of lines|line]] $\mathbf{x} = \mathbf{o} + t\mathbf{d}$ is
$$
h = \frac{\|(\mathbf{p} - \mathbf{o})  \times \mathbf{d}\|}{\|\mathbf{d}\|}
$$
## Intuition
See the following diagram
![[../point-line distance.png|500]]
Note that $\|(\mathbf{p} - \mathbf{o})  \times \mathbf{d}\|$ is the 2x area $A$ of the above triangle, and by the area of triangle, we know that $A = \frac{1}{2} h \|\mathbf{d}\|$.