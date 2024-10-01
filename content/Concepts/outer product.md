---
created: 2024-04-24
modified: 2024-07-09
publish: true
tags:
  - math/LinearAlgebra
  - math/definitions
---

> [!warning] not to be confused with [[./exterior product|exterior product]]. Note that exterior product is sometimes called "outer product" in literatures.

> [!definition]
> Given vectors $x \in \mathbb{R}^m, y \in \mathbb{R}^n$ (not necessarily of the same size), $x y^T \in \mathbb{R}^{m \times n}$ is called the **outer product** of the vectors.
> $$
> x y^T \in \mathbb{R}^{m \times n}=\left[\begin{array}{c}
> x_1 \\
> x_2 \\
> \vdots \\
> x_m
> \end{array}\right]\left[\begin{array}{llll}
> y_1 & y_2 & \cdots & y_n
> \end{array}\right]=\left[\begin{array}{cccc}
> x_1 y_1 & x_1 y_2 & \cdots & x_1 y_n \\
> x_2 y_1 & x_2 y_2 & \cdots & x_2 y_n \\
> \vdots & \vdots & \ddots & \vdots \\
> x_m y_1 & x_m y_2 & \cdots & x_m y_n
> \end{array}\right] .
> $$

## Related
- [[./inner product|inner product]]