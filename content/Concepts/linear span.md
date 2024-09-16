---
aliases:
  - span of a set of vectors
created: 2023-05-30
modified: 2024-04-17
parent:
  - "[[./vector space|vector space]]"
publish: true
tags:
  - math/LinearAlgebra/VectorSpace
  - math/definitions
---

# Linear Span
Let $S = \{ \mathbf{v}_1, \cdots, \mathbf{v}_n \}$ be a set of vectors in a [[./vector space|vector space]]. The *span* of $S$, $\text{span}(S)$, is the set of all [[./linear combination|linear combination]] of vectors from $S$:
  $$
  \{ a_1 \mathbf{v}_1 \cdots a_n \mathbf{v}_n | \mathbf{v}_1, \cdots, \mathbf{v}_n \in S \land a_1, \cdots, a_n \in \mathbb{R} \}
  $$

## Span and Vector Space

If $S$ is a nonempty set of vectors in a vector space $\mathbf{V}$, then $\text{span}(S)$ is a [[./subspaces|subspaces]] of $\mathbf{V}$.