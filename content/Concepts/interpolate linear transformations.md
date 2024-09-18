---
Aliases:
  - interpolate matrices
created: 2023-05-30
modified: 2024-03-14
publish: true
---

#math/LinearAlgebra 

---
## Interpolate Linear Transformations
Ideas
- [[linear interpolation|lerp]]: $A(t) = (1-t)A_0 + tA_1$ (bad animation)
- [[./polar decomposition|polar decomposition]] and separately interpolate
  $$\begin{aligned}
    A_0 &= Q_0P_0 \quad A_1 = Q_1P_1 \\
    P(t) &= (1 - t) P_0 + tP_1 \\
    \widetilde{Q}(t) &= (1 - t) Q_0 + tQ_1
    \end{aligned}
  $$
  - $P(t)$ is always positive definite but $\widetilde{Q}(t)$ is not necessarily a rotation!
    - Can be hack around by decompose $\widetilde{Q}(t)$ into $\widetilde{Q}(t) = Q(t) X(t)$ and throw away $X$

## Applications

One usage of interpolating linear transformations is "[[./linear blend skinning|linear blend skinning]]", where poorly interpolated linear transformation can result in "candy wrapper artifact:"

![[../Candy-wrapper-artefact-caused-by-Linear-Blend-Skinning.png|Candy-wrapper-artefact-caused-by-Linear-Blend-Skinning.png]]