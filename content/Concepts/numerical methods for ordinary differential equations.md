---
aliases:
  - numerical ODEs
created: 2023-05-30
modified: 2024-11-25
publish: true
tags:
  - math/DE
  - math/numerical
parent:
  - "[[ordinary differential equation|ordinary differential equation]]"
---
**Numerical methods for ordinary differential equations (ODEs)** are used to solve [[initial-value problem|initial-value problems (IVPs)]], which involve finding a solution to a differential equation given an initial condition.

## Error and Order
Consider a numerical approximation of an exact value $u$. Given a step size $h$, we can denote the numerical approximation as $\tilde{u}_h$. A numerical method is said to have an **order** $p$ if the **error**, $|\tilde{u}_h - u|$, is $O(h^{p})$ as the step size $h \to 0$.

> [!info] The order of a numerical method is not related to the order of an ODE it tries to solve

## Methods
### First-order
- [[Euler method|explicit Euler method]]
- [[symplectic Euler method|symplectic Euler method]]
- [[implicit Euler method|implicit Euler method]]

### Second-order
- [[midpoint method|midpoint method]]
- [[Verlet integration|Verlet integration]]

### Fourth Order
- [[fourth-order Runge-Kutta Method|fourth-order Runge-Kutta Method]]

## See Also
- [[./numerical integration|numerical integration]] - Computation of integrals using numerical methods