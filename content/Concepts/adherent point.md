---
aliases:
  - closure (topology)
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/topology
  - math/analysis
---

# Adherent Point
## On Real Line
$x$ is adherent to $S \in \mathbb{R}$ if  $\forall \; \epsilon > 0 \ \exists \; y \in S$ s.t. $|x-y| \leq \epsilon$. 

> [!example] e.g.
>  - $x \in S \implies  x \text{ is adherent to } S$
 > - $\sqrt{2}$ is adherent to  $\mathbb{Q}$
 > - The [[./least upper bound property|supremum]] $\sup(S)$ is adherent to $S$

## In Metric Space
Let $(X, d)$ be a metric space, let $E \subseteq X$, and let $x_0$ be a point in $X$.
We say that $x_0$ is an adherent point of $E$ if for every radius $r > 0$ the [[./ball (topology)|ball]] $B(x_0, r)$ has a non-empty intersection with $E$.
The set of all adherent points of $E$ is called the *closure* of $E$ and is denoted as $\bar{E}$.

The following statements are logically equivalent:
- $x_0$ is an **adherent point** in $E$
- $x_0$ is either an [[./interior point|interior point]] or a [[./interior point|boundary point]] of $E$
- There exists a sequence $(x_n)^\infty_{n=1}$ in $E$ which converges to $x_0$ with respect to the metric $d$