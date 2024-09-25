---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/topology
  - math/analysis
---
In some [[./metric space|metric space]], not every [[./Cauchy sequence|Cauchy sequence]] have a limit (e.g. $(\mathbb{Q}, d)$).

While in some other metric spaces such as $(\mathbb{R}, d)$, every Cauchy sequences converge. This dichotomy motivates the following definition:

A metric space $(X, d)$ is said to be **complete** iff every Cauchy sequence in $(X, d)$ is convergent in $(X, d)$.

Complete metric spaces are *intrinsically closed*: no matter what space one places them in, they are always closed sets.
More precisely:
- Let $(X, d)$ be a metric space, and let $(Y, d\ |_{Y \times Y})$ be a subspace of $(X, d)$. If $(Y, d \ |_{Y \times Y})$ is complete then $Y$ must *be closed under* $X$.
- Conversely, suppose $Y$ is a closed subset of $X$. Then the subspace $(Y, d|_{Y \times Y})$ is complete if $(X, d)$ is complete.