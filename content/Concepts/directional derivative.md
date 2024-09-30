---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[derivative|derivative]]"
publish: true
tags:
  - "#math/calculus/differentiation"
---
**Directional derivative** of a multi-variable function is the single-variable derivative on that direction.
$$
D_{\mathbf{u}}f(\mathbf{x}_{0}) = lim_{\epsilon \rightarrow 0} \frac{f(\mathbf{x}_{0} + \epsilon \mathbf{u}) - f(\mathbf{x}_{0})}{\epsilon}
$$

![[../assets/directional_derivative.png|400]]

It can be seen as a generalization of [[./partial derivative|partial derivative]].

[[./Multi-dimensional derivative, gradient, and directional Derivative|The directional derivative is highly related to multi-dimensional derivative, and it can also be defined as a dot product of the gradient and direction]]: $D_{\mathbf{u}}(f) = \nabla f \cdot \mathbf{u} = [Df]\mathbf{u}$