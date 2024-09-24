---
aliases:
  - vector reflection
created: 2024-07-08
modified: 2024-07-09
parent:
  - "[[Euclidean vector space|Euclidean vectors]]"
publish: true
tags:
  - math/LinearAlgebra
---

# Vector Reflection
If we have a unit vector $\mathbf{a}$ and a vector $\mathbf{v}$, we can reflect the vector $\mathbf{v}$ by a plane perpendicular to $\mathbf{a}$.

![[../assets/vector reflection.png|vector reflection.png]]

This can be done by decomposing $\mathbf{v}$ into the perpendicular component $\mathbf{v}_\perp = (\mathbf{v} \cdot \mathbf{a}) \mathbf{a}$ and the parallel component $\mathbf{v}_\parallel = \mathbf{v} - \mathbf{v}_\perp = \mathbf{v} - (\mathbf{v} \cdot \mathbf{a})\mathbf{a}$.

$$
\begin{eqnarray}R_{\mathbf{a}}(\mathbf{v}) &=& \mathbf{v}_\parallel - \mathbf{v}_\perp \\ 
 &=& ( \mathbf{v} - (\mathbf{v} \cdot \mathbf{a})\mathbf{a} ) - ((\mathbf{v} \cdot \mathbf{a}) \mathbf{a}) \\
 &=&\mathbf{v} - 2 (\mathbf{v} \cdot \mathbf{a}) \mathbf{a}\end{eqnarray}
$$

## See Also
- [[./two reflections gives a rotation|two reflections gives a rotation]]