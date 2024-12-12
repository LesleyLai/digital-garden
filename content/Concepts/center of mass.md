---
parent:
  - "[[classical mechanics|classical mechanics]]"
tags:
  - physics/mechanics
publish: true
created: 2024-12-11
modified: 2024-12-11
---
For discrete point masses, the **center of mass** is the [[weighted average|weighted average]] of their positions:
$$
\frac{\sum_i m_i \mathbf{x}_i}{\sum_i m_i}
$$

For a continuous volume $Q$ with density $\rho(\mathbf{x})$, the **center of mass** is at defined as the [[triple integral|triple integral]]:
$$
\bar{\mathbf{x}} = \frac{1}{M} \iiint_{Q} \rho(\mathbf{x}) \mathbf{x} \, dV
$$
where $M$ is the [[mass|total mass]] of the volume ($M = \iiint_{Q} \rho(\mathbf{x})\, dV$).

For a continuous area in 2D, we can define the center of mass analogously with a [[./double integrals|double integral]].