---
tags:
  - "#math/DE"
generalizations:
  - "[[linear differential equation|linear differential equation]]"
  - "[[first-order ordinary differential equation|first-order ODEs]]"
specializations:
  - "[[first-order linear homogeneous differential equation|first-order linear homogeneous differential equation]]"
aliases:
  - first order linear ODE
publish: true
---
A **first order linear ODE** for the function $x(t)$ has the form of
$$
A(t)\frac{dx}{dt} + B(t)x(t) = C(t)
$$
As long as $A(t) \ne 0$, we can simplify the equation by dividing by $A(t)$:
$$
\frac{dx}{dt} + p(t)x(t) = q(t)
$$
The above form is called the *standard linear form* of the first-order linear ODE.

If the coefficients $A(t)$, $B(t)$, $C(t)$ (or equivalently, $p(t)$ and $q(t)$ in the standard form) are constant and don't depend on $t$, we say that the equation is a **constant coefficient** ODE.

## Subtopics
- [[first-order linear homogeneous differential equation|first-order linear homogeneous differential equation]] - If a first order linear ODE is also [[homogeneous differential equation|homogeneous]], then it has a simple known solution of $x = Ce^{at}$

## Examples
First-order linear ODEs can model various systems, for example, thermal conduction and particle concentration, radioactive decay, and population growth/decline.

### Thermal conduction
[[Newton's law of cooling|Newton's law of cooling]] states that the rate of heat transfer is:
$$
\frac{dT}{dt} = h (T_e - T)
$$
where
- $T$ is the temperature
- $T_e$ is the ambient temperature
- $t$ is the time
- $h > 0$ is the [[heat transfer coefficient|heat transfer coefficient]] (usually constant)

Initial condition: $T(0) = T_0$

Put into standard linear form:
$$
\frac{dT}{dt} + hT = h T_e
$$

### Particle Concentration
The [[Fick's laws of diffusion|model for particle concentration]] is mathematically the same to heat conduction:
$$
\frac{dC}{dt} = k (C_e - C)
$$
- $C$ is salt concentration inside
- $C_e$ is the salt concentration outside
- $k$ is a rate constant