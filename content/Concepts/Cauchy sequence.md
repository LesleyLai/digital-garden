---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#math/analysis"
  - "#math/sequences_and_series"
parent:
  - "[[real analysis|real analysis]]"
---
# Cauchy Sequence

## In Metric Space
Let $(x^{(n)})^\infty_{n=m}$ be a sequence of points in the [[./metric space|metric space]] $(X, d)$. We say that this sequence is a **Cauchy sequence** iff for every $\epsilon > 0$, there exists an $N \ge m$ such that $d(x^{(j)}, x^{(k)}) < \epsilon$ for all $j, k \ge N$.

## Convergent Sequences Are Cauchy Sequences
Let $(x^{(n)})^\infty_{n=m}$ be a sequence which [[./convergence of sequences|converges]] to some limit $x_0$, then  $(x^{(n)})^\infty_{n=m}$ is also a Cauchy sequence.

The opposite is not true.

In certain spaces, Cauchy sequences do not necessarily converge. For example, consider the Cauchy sequence $3, 3.1, 3.14, 3.141, \cdots$ in $\mathbb{Q}$ While the sequence is convergent in $\mathbb{R}$, it does not converge in $\mathbb{Q}$.

A metric space where all Cauchy sequences converges is called a [[./complete metric spaces|complete space]].

## Relationship with Subsequence and Convergent
Let  $(x^{(n)})^\infty_{n=m}$ be a Cauchy sequence. Suppose that there is some [[./subsequence|subsequence]]  $(x^{(n_j)})^\infty_{j=1}$ of this sequence which converges to a limit $x_0$, then the original sequence $(x^{(n)})^\infty_{n=m}$ also converges to $x_0$.
