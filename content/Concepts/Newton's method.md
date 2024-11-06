---
aliases:
  - Newton–Raphson method
created: 2024-01-14
modified: 2024-03-14
parent:
  - "[[root-finding algorithm|root-finding algorithm]]"
publish: true
generalizations:
  - "[[descent methods|descent methods]]"
tags:
  - math/numerical
  - math/optimization
---
Newton's method is an [[iterative methods|iterative methods]] to find root.

## Newton's Method in N Dimension
$$
x_{k+1}=x_k-\tau\left(\nabla^2 f_0\left(x_k\right)\right)^{-1} \nabla f_0\left(x_k\right)
$$
where $\left(\nabla^2 f_0\left(x_k\right)\right)^{-1}$ is the inverse of [[./Hessian|Hessian]] and $\nabla f_0\left(x_k\right)$ is the [[./gradient|gradient]].