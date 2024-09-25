---
aliases:
  - compact sets
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/analysis
  - math/topology
---
There are multiple definition on whether a [[./metric space|metric space]] is compact.

## Sequentially Compact
A metric space is **sequential compact** iff every sequence in $(X, d)$ has at least one convergent [[./subsequence|subsequence]]. A subset $Y$ of a metric space $X$ is **sequential compact** if the [[./subspaces|subspace]] $(Y, d|_{Y \times Y})$ is sequentially compact.

With sequentially compact set, we can get [[./Heine-Borel theorem|Heine-Borel theorem]] to work under metric space.

## Topological Compact
A metric space is compact $(X, d)$ if every [[./open cover|open cover]] of $X$ has a finite subcover.

## Continuous Maps Preserve Compactness
Let $f : X \rightarrow Y$ be a [[./continuous functions|continuous maps]] from one metric space $(X, d_X)$ to $(Y, d_Y)$.
Let $K \in X$ be any compact subset $X$. Then the image $f(K) := \{ f(x) : x \in K \}$ of $K$ is also compact.