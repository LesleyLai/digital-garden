---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

#math/analysis #math/topology 
## In Real
Let $X$ be a subset of $\mathbb{R}$. Then the following two statements are *equivalent*:
- The set $X$ is [[./open and closed sets|closed]] and [[./bounded sets|bounded]]
- every [[./sequences|sequence]] $a: \mathbb{N} \rightarrow X$ has a [[./convergence of sequences|convergent]] [[./subsequence|subsequence]] $\lim_{j \rightarrow \infty} a_{n_j} = x \in X$.

## In Metric Space
- [[./compact metric space|compact sets]] are both closed and bounded.
- Let $\mathbb{R}^n, d$ be a Euclidean space with either the Euclidean metric, the texicab metric, or the sup norm metric. Let $E$ be a subset of $\mathbb{R}^n$. Then $E$ is **compact** iff it is closed and bounded.

However, the Heine-Borel theorem is not true for general metrics. For instance, the integers $\mathbb{Z}$ with the discrete metric is closed and bounded, but not compact, since the sequence $1, 2, 3, 4, \cdots$ has no convergent subsequence.