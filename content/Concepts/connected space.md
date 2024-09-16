---
aliases:
  - disconnected space
  - path connected
  - path connectivity
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/topology
  - math/analysis
---

# Connected Space
A [[./metric space|metric space]] $X$ is said to be **disconnected** if it is the union of two disjoint non-empty [[./open and closed sets|open set]]. Otherwise, X is said to be **connected**.
  In other word, if  we can find two open sets $U$ and $V$ such that $U \cap V = \emptyset$ and $U \cup V = X$, then $X$ is disconnected.

## Connectness on a Real line
The following statements are equivalent for $X \in \mathbb{R}$
- $X$ is connected
- $\forall x, y$ s.t. $x < y$, $[x, y]$ is contained in X
- $X$ is an [[interval|interval]]

## Continuity Preserves Connectedness
Let $f: X \rightarrow Y$ be a [[./continuous functions|continuous map]] and $E$ be a connected subset of $X$, then the [[./image of a function|image]] $f(E)$ is continuous.

We can use this property to prove the [[./intermediate value theorem|intermediate value theorem]].

## Path Connectivity
A metric space $X$ is path connected
Let $E$ be a subset of the metric space $X$.
We say that $E$ is path connected if for all $x, y \in E$,
there is a function $\gamma:[0, 1] \rightarrow E$ such that $\gamma(0) = x$ and $\gamma(1) = y$.

A path connected set must be connected,
but the converse is not true,
counter examples include "Topologist's sine curve".