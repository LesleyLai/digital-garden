---
created: 2024-01-18
modified: 2024-03-14
parent:
  - "[[derivative|derivative]]"
publish: true
tags:
  - math/calculus/differentiation
  - math/calculus/vector
---

# Multi-variable Derivative

A function $f(\mathbf{x})$ is **differentiable** at $\mathbf{x} = \mathbf{a}$ iff there is a [[./linear transformation|linear transformation]] $[Df]_{\mathbf{a}}$ (the *derivative* of $f$ at $\mathbf{a}$) such that
    $$
    \lim_{\| h \| \rightarrow 0} \frac{\left(f(\mathbf{a} + \mathbf{h}) - f(\mathbf{a})\right) - [Df]_{\mathbf{a}} \mathbf{h}}{\mathbf{h}} = \mathbf{0}
    $$

We can think this definition in terms of [[./Taylor series|Taylor series]]:
$$
f(\mathbf{a} + \mathbf{h}) = f(\mathbf{a}) + [Df]_{\mathbf{a}} \mathbf{h} + O(\| h \|^2) \text{ as } \| h \| \rightarrow 0
$$

**If the derivative exist, it should be the [[./Jacobian|Jacobian Matrix]].** However, there are cases where the derivative DNE even if all [[partial derivative|partial derivatives]] exist.

> [!theorem] If all the partial derivative exist and are [[./continuous functions|continuous]], then the full derivative exists