---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/sequences_and_series
  - math/analysis
---
Suppose that $(x^{(n)})^\infty_{n=m}$ is a [[./sequences|sequence]] of points in some space, and suppose $n_1, n_2, \cdots$ is an increasing sequence of integers which are at least as large as $m$ ($m \le n_1 < n_2 < n_3 < \cdots$), we call the sequence $(x^{(n_j)})^\infty_{j=1}$ a subsequence of the original sequence $(x^{(n)})^\infty_{n=m}$.

e.g. The sequence $((\frac{1}{j^2}, \frac{1}{j^2}))_{j=1}^n$ in $\mathbb{R}^2$ is a subsequence of $((\frac{1}{n}, \frac{1}{n}))_{n=1}^n$

> [!info] Lemma
> If a sequence $(x^{(n)})^\infty_{n=m}$ converges to $x_0$, then every subsequence $(x^{(n_j)})^\infty_{j=1}$ of that sequence converges to $x_0$.