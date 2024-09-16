---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/sampling
  - math/probability
---

# Transformation of Random Variables
- Transform samples from one arbitrary distribution to another with a function $f$
- Given [[./random variable|random variable]] $X_i$ drawn from some [[PDF|PDF]] $p_x(x)$. $Y_i=y\left(X_i\right)$
- Why the function $y$ must be [[./injection|one-to-one]]?
  - Why the derivative of the transformation function $y$ must be greater or equal to $0$?
  - $\operatorname{Pr}\{Y \leq y(x)\}=\operatorname{Pr}\{X \leq x\}$ and therefore $P_y(y)=P_y(y(x))=P_x(x)$
- $p_y(y) = |\frac{dy}{dx}|^{-1} p_x(x)$
- The relation $y(x) = P_y^{-1}(P_x(x))$ is a generalization of the [[./inverse transform sampling|inverse transform sampling]] since when $X$ is uniform random variable from $[0, 1]$, $Px(x) = x$
- Multiple dimensions
  - $p_y(y) = p_y(T(x)) = \frac{p_x(x)}{J_T(x)}$
  - $Y = T(X)$
  - $|J_T|$ is the absolute value of the [[determinant|determinant]] of T's [[./Jacobian|Jacobian]] matrix $$
\left(\begin{array}{ccc}
\partial T_1 / \partial x_1 & \cdots & \partial T_1 / \partial x_n \\
\vdots & \ddots & \vdots \\
\partial T_n / \partial x_1 & \cdots & \partial T_n / \partial x_n
\end{array}\right)
$$where $T_i$ are defined by $T(x)=\left(T_1(x), \ldots, T_n(x)\right)$.