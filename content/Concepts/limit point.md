---
aliases:
  - isolated point
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/analysis
  - math/calculus/limits
---
## Limit point of Sets
$x \in \mathbb{R}$ is a *limit point* of $S \in \mathbb{R}$ if it is [[./adherent point|adhere to]] $S - \{x\}$.

E.g.
- $S = (0, 2)$, $x = 1$, $x$ is adherent to $S - \{ x \} = (0, 1) \cup (1, 2)$, so $x = 1$ is a limit point
- $S = (0, 2) \cup \{ 3 \}$, $x = 3$, $x$ is _not_ adherent to $S - \{ x \} = (0, 2)$, so $x = 3$ is a _not_ limit point. We call $x$ an *isolated point* in this case.

### Isolated point
$x$ is an isolated point of $S$ if $x \in S$ but is not an [[./adherent point|adhere to]] of $S$.

### Remark of Limit Points
Can be used for [[./L'Hospital's rule|L'Hospital's rule]] when we need to remove point $x$.

## Limit point of Sequence
### Relationship with Subspaces
  The following two statements are equivalent:
    - $L$ is a limit point of [[./sequences|sequence]] $(x^{(n)})^\infty_{n=m}$
    - There exists a [[./subsequence|subsequence]] $(x^{(n_j)})^\infty_{j=1}$ of the original sequence $(x^{(n)})^\infty_{n=m}$ which converges to $L$

### In Metric Space
Suppose $(x^{(n)})^\infty_{n=m}$ is a sequence of points in [[./metric space|metric space]] $(X, d)$, and let $L \in X$, we say that $L$ is a *limit point* of $(x^{(n)})^\infty_{n=m}$ iff for every $N \ge m$ and $\epsilon > 0$ there exists an $n \ge N$ such that $d(x^{(n)}, L) \le \epsilon$