---
aliases:
  - Schwarz's theorem
  - Young's theorem
  - Clairaut's theorem
created: 2024-01-27
modified: 2024-01-27
parent:
  - "[[github-publisher/partial derivative|partial derivative]]"
publish: true
tags:
  - math/calculus
  - math/analysis
---
# Symmetry of Second Derivatives
The order of the variables in mixed [[partial derivative|partial derivatives]] doesn't matter _under certain condition_.

> [!theorem] Clairaut’s Theorem
> If $f$'s partial derivative up to order 2 exists and are [[./continuous functions|continuous]], then $f_{xy} = f_{yx}$

> [!example]+ Example: if $f(x, y) = e^{x^2 + y^2}$
> then
> $$
 \begin{align}
 f_{yx} &= \frac{\partial}{\partial x} \left( \frac{\partial f}{\partial y} \right) = \frac{\partial^2 f}{\partial x \partial y} = (4xy)e^{x^2 + y^2} \\
 f_{xy} &= \frac{\partial}{\partial y} \left( \frac{\partial f}{\partial x} \right) = \frac{\partial^2 f}{\partial y \partial x} = (4xy)e^{x^2 + y^2}
 \end{align}
 >$$

## References
- [Calculus III - Higher Order Partial Derivatives](https://tutorial.math.lamar.edu/classes/calciii/highorderpartialderivs.aspx)