---
aliases:
  - open set
  - closed set
  - open sets
  - closed sets
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#math/set_theory"
---

# Open and Closed Sets

## In Metric Space
Let $(X, d)$ be a metric space and let $E$ be a subset of $X$
- $E$ is **closed** if it contains all of its [[./interior point|boundary points]], i.e., $\partial E \subseteq E$.
- $E$ is **open** if it contains *none* of its boundary points, i.e., $\partial E \cap E = \emptyset$.
- If $E$ contains some of its boundary points but not others, it is *neither open nor closed*.

For example, in the real line with metric $d(x, y) = |x - y|$, $(1, 2)$ is open, $[1, 2]$ is closed, and $[1, 2)$ is neither open nor closed.

It is possible for a set to be simultaneously open and closed, if it has no boundary (when every point in $X$ is an interior point).
Under many metrics, the empty set $\emptyset$ is the only such example, but there are exceptions.

Notice that the definition of open and closed set depends on the choice of metric.
For instance, on $\mathbf{R}$ with metric $d(x, y) = |x - y|$, $\{ 1 \}$ is not open.
However, if we uses the discrete metric $d_{disc}$, then $\{ 1 \}$ is now an open set.