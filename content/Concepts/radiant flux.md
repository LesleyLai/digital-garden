---
aliases:
  - radiant power
created: 2023-05-30
modified: 2024-03-27
tags:
  - radiometry
  - computing/graphics/RayTracing
  - stub
parent:
  - "[[radiometry quantities|radiometry quantities]]"
generalizations:
  - "[[flux|flux]]"
publish: true
---
In typical rendering situation, we operate under the assumption of a _steady state_, focusing on measuring light at a particular moment. **Radiant flux**, also known as **power**, is the total energy passing through a surface per unit time.

The unit of radiant flux is Joules/second ($J/s$), or more commonly, Watts ($W$).

![[../assets/radiant flux.svg|300]]

Radiant flux $\Phi$ can be found by taking the limit of differential energy $Q$ per differential time:
$$
\Phi = \lim_{ \Delta t \to \infty } \frac{\Delta Q}{\Delta t} = \frac{dQ}{dt} 
$$

## Reference
- [Radiometry](https://pbr-book.org/4ed/Radiometry,_Spectra,_and_Color/Radiometry)