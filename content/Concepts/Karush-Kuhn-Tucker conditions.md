---
created: 2024-01-25
modified: 2024-03-14
parent: 
publish: true
tags:
  - math/optimization
---
$$
\begin{aligned}
\nabla f_0\left(x^*\right)&=-\sum_{i=1} \lambda_i \nabla f_i\left(x^*\right) & \text { (stationarity) } \\
f_i\left(x^*\right) &\leq 0, i=1, \ldots, n & \text { (primal feasibility) } \\
\lambda_i &\geq 0, i=1, \ldots, n & \text { (dual feasibility) } \\
\lambda_i f_i\left(x^*\right)&=0, i=1, \ldots, n & \text { (complementary slackness) }
\end{aligned}
$$
