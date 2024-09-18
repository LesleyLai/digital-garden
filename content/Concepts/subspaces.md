---
aliases:
  - subspace
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/LinearAlgebra/VectorSpace
  - math/definitions
---

# Subspaces
Let $U$ be a set of vectors in the [[./vector space|vector space]] $V$ and inherit $V$'s scalar multiplication and addition operations, and if $U$ and those operations themselves form a vector space, we say that $U$ is a *subspace* of $V$.

The [[set intersection|intersection]] of two subspace is another subspace.
> [!proof]- Proof
> Say we have two subspaces $S$ and $T$ for a vector space $V$. 
> Let $v_1$ and $v_2$ be two arbituary vectors in $S \cap T$.
> The [[./linear combination|linear combination]] of $v_1$ and $v_2$ is still in $S$ because $S$ is a subspace. Similarly, the linear combination is also in $T$.
> Thus, the linear combination of $v_1$ and $v_2$ is in $S \cap T$, so we can say that $S \cap T$ is also a vector space and a subspace of $V$.

Four often used [[./four fundamental subspaces|fundamental subspaces]] are [[./column space|column space]], [[row space|row space]], [[./null space|nullspace]], and [[left null space|left null space]].