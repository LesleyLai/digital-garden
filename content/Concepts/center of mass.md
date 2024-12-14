---
parent:
  - "[[classical mechanics|classical mechanics]]"
tags:
  - physics/mechanics
publish: true
created: 2024-12-11
modified: 2024-12-12
---
For discrete point masses, the **center of mass** is the [[weighted average|weighted average]] of their positions:
$$
\mathbf{x}_{cm} = \frac{\sum_i m_i \mathbf{x}_i}{\sum_i m_i}
$$

For a continuous volume $Q$ with density $\rho(\mathbf{x})$, the **center of mass** is at defined as the [[triple integral|triple integral]]:
$$
\mathbf{x}_{cm} = \frac{1}{M} \iiint_{Q} \rho(\mathbf{x}) \mathbf{x} \, dV
$$
where 
- $\mathbf{x}$ is a point inside the volume
- $\rho(\mathbf{x})$ is the volumetric mass density of the mass at $\mathbf{x}$
- $M$ is the [[mass|total mass]] of the volume ($M = \iiint_{Q} \rho(\mathbf{x})\, dV$).

For a continuous area $R$ in 2D, we can define the center of mass analogously with a [[./double integrals|double integral]]:
$$
\mathbf{x}_{cm} = \frac{1}{M} \iint_{R} \rho(\mathbf{x}) \mathbf{x} \, dA
$$