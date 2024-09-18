---
aliases:
  - "#math/LinearAlgebra/norm"
  - norm of a vector
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/LinearAlgebra/norm
  - math/definitions
---

# Norm of a Vector
**Norm** measures the *magnitude* of a vector.

Norm needs to satisfy the following properties:
   - *Positivity*: $|\mathbf{u}| \ge 0$
   - $|\mathbf{u}|  = 0 \iff \mathbf{u} = \mathbf{0}$
   - $|c\mathbf{u}| = |c||\mathbf{u}|$
   - *[[triangle inequality|triangle inequality]]*: $|\mathbf{u}| + |\mathbf{v}| \ge \left|\mathbf{u} + \mathbf{v}\right|$

Even though we usually talks about [[./L2 norm|L2 norm]], there are a lot of different kind of norms that satisfy the above 4 properties. For example, [[./manhattan distance|L1 norm]] and [[./infinity norm|infinity norm]] are other example of a norm. We can generalize the $L1, L2, \text{ and }, L_{\infty}$ norms into [[./p-norm|p-norm]].

The [[./Cauchy-Schwarz inequality|Cauchy-Schwarz inequality]] describes the relationship between norm and [[./inner product|inner product]].