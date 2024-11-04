---
created: 2023-05-30
modified: 2024-03-29
publish: true
specializations:
  - "[[normed vector space|normed vector space]]"
tags:
  - math/analysis
  - math/topology
  - math/definitions
---
A **metric space** $(X, d)$ is a space $X$ of objects (called points) together with a distance function or metric $d : X \times X \rightarrow [0, \infty)$:

which associates to each pair $x, y$ of points in $X$ a non-negative real number $d(x, y) \ge 0$.

Further more, the metric must satisfy the following properties:
  - For any $x \in X$, we have $d(x, x) = 0$
  - (Positivity) For any _distinct_ $x, y \in X$, we have $d(x, y) > 0$
  - (Symmetry) For any $x, y \in X$, we have $d(x, y) = d(y, x)$
  - ([[triangle inequality|triangle inequality]]) For any $x, y, z \in X$, we have $d(x, z) \le d(x, y) + d(y, z)$

> [!example]+ Example: Euclidean Space
> see: [[./Euclidean vector space|Euclidean vector space]]
> 
> $(\mathbf{R}^n, d_{l^2})$, the Euclidean space of dimension, use Euclidean distance as the metric.

> [!example]+ Example: Taxicab Space
> $(\mathbf{R}^n, d_{l^1})$ uses [[./manhattan distance|manhattan distance]] as the metric (taxicab metric).
>
> The metric satisfy the inequality
> $$
> d_{l^2}(x, y) \le d _{l^1} \le \sqrt{n} d_{l^2}
> $$

> [!example]+ Example: Sup norm metric
> see also: [[./infinity norm|infinity norm]]
> 
> We can have metric space $(\mathbf{R}^n, d_{l^\infty})$ where 
>$$ d_{l^\infty}( \mathbf{x}, \mathbf{y} ) = \sup\{ \left| x_1 - y_1 \right| : 1 \le i \le n \}$$
>
> The metric satisfy the inequality 
> $$\frac{1}{\sqrt{n}} d_{l^2}(x, y) \le d_{l^\infty} \le d_{l^2}$$

> [!info]+ $l^p$ space
> see also: [[./p-norm|p-norm]]
> 
> The above $l^1$, $l^2$, and $l^\infty$ metric spaces are special case of the $l^p$ metrics, where $p \in [1, +\infty]$