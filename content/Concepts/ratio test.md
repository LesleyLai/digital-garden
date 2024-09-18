---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

parent: [[./convergence tests of series|convergence tests of series]]
tags: #math/sequences_and_series #math/calculus 

---
Let $\sum_{n=m}^\infty a_n$ be a series of real numbers, and let $\alpha := \lim \sup_{n \rightarrow \infty} |a_{n+1}| / |a_n|$
- If $\alpha < 1$, then the series converges absolutely (and hence converges conditionally)
- If $\alpha > 1$, then the series diverges
- If $\alpha = 1$, we cannot assert any conclusion.

The ratio test can be derived from the [[./root test|root test]].