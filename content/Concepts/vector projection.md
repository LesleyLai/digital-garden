---
created: 2023-05-30
modified: 2024-11-07
parent:
  - "[[./Euclidean vector space|Euclidean vectors]]"
publish: true
tags:
  - math/LinearAlgebra
---
A projection of the [[./Euclidean vector space|oriented length]] $\mathbf{v}$ on the oriented length $\mathbf{u}$ can be defined using [[./inner product|dot product]]:
$$
P_\mathbf{u}(\mathbf{v}) = \frac{ \mathbf{u} \cdot \mathbf{v} }{|\mathbf{u}|^2} \mathbf{u}
$$
Note that
- $\frac{ \mathbf{u} \cdot \mathbf{v} }{|\mathbf{u}|}$ is the length of the projected vector. This follows from the property that $\mathbf{u} \cdot \mathbf{v} = |P_\mathbf{u}(\mathbf{v})| \ |\mathbf{u}|$
- $\frac{ \mathbf{u} }{|\mathbf{u}|}$ is the normalized direction of the projected vector

## Related
- The [[./Gram-Schmidt process|Gram-Schmidt process]] uses projection to extract parts of vector that are orthogonal and parallel to another vector