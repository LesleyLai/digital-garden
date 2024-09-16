---
aliases:
  - unit impulse function
created: 2024-08-05
modified: 2024-08-11
publish: true
tags:
  - math/definitions
  - math/functions
---

# Dirac Delta

The **Dirac Delta** or **unit impulse function** is defined as
$$
\delta(t) = 0 \quad t \neq 0 \qquad \text{and} \qquad \int_{-\infty}^{\infty} \delta(t) \, dt = 1 
$$
## Multiply a Function by an Impulse
When we multiply the unit impulse function $\delta(t)$ by a function $\phi(t)$ which is known to be continuous at $t = 0$. Since the impulse has nonzero value only at $t = 0$, we get $\phi(t) \delta(t) = \phi(0) \delta(t)$. We can view the result as another impulse located at $t = 0$ with strength $\phi(0)$.


## Related
- [[./Kronecker Delta|Kronecker Delta]]
- [[./unit step function|unit step function]]