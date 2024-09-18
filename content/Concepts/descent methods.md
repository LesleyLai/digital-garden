---
created: 2024-01-14
modified: 2024-03-14
parent: 
publish: true
tags:
  - math/numerical
  - math/optimization
---

# Descent Methods
## Gradient Descent
The basic idea of [[gradient descent|gradient descent]] is to follow the gradient "downhill" until it's zero (local minimum)

## Higher-order Descent
General idea: apply a coordinate transformation so that the local energy landscape looks more like a "round bowl" so gradient now points directly toward nearby minimizer.
![[../2022-10-30_11-35-24_higher order descent.png|2022-10-30_11-35-24_higher order descent.png]]

Most basic higher-order descent strategy is the [[./Newton's method|Newton's method]]