---
Aliases:
  - convergent sequence
  - divergent sequence
created: 2023-05-30
modified: 2024-03-14
publish: true
---

parent: [[./sequences|sequences]]
tags: #math/sequences_and_series 

---
# Convergence of Sequences

A sequence $x_n$ **converges** if $\lim_{x \to \infty }x_n$ exists.

We can use the [[./monotone convergence theorem|monotone convergence theorem]] to prove the convergence of a sequence.

## In Metric Space
Let $m$ be an integer, $(X, d)$ be a [[./metric space|metric space]], and let $(x_n)_{n=m}^\infty$ as a sequence of points on $X$. Let $x$ be a point on $X$. We say that $(x_n)_{n=m}^\infty$ *converges to* $x$ with respect to metric $d$ **iff** the limit  $\lim_{n \rightarrow \infty} d(x_n, x)$ exists and is equal to $0$.

### Epsilon-delta Definition
see also: [[epsilon-delta definition|epsilon-delta definition]]
$(x_n)_{n=m}^\infty$ *converges to* $x$ with respect to metric $d$ **iff** for every $\epsilon > 0$, there exist an $N \ge m$ such that $d(x^{(n)}, x) \le \epsilon$ for all $n \ge N$.