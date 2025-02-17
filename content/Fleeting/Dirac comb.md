---
parent:
  - "[[special functions|special functions]]"
tags:
  - math/definitions
aliases:
  - Shah function
  - impulse train
  - sampling function
created: 2024-12-25
modified: 2024-12-25
publish: true
---
A **Dirac comb** (also known as **shah function**, **impulse train**, or **sampling function**) is a [[periodic function|periodic function]] with the formula
$$
\operatorname{\text{Ш}}_{\ T}(t) \ :=  \sum_{k=-\infty}^{\infty} \delta(t - k T)
$$
where:
- The symbol Ш is the Cyrillic letter "sha".
- $\delta$ represents the [[../Concepts/Dirac delta|Dirac delta function]].
- $T$ is the period of the function.

Visually, the Dirac comb is an infinite series of Dirac delta function with an interval of $T$.
![[../assets/Dirac_comb.svg|300]]

When we omit the period $T$, it represents a Dirac comb of unit period
$$
\operatorname{\text{Ш}}(t) \ :=   \sum_{k=-\infty}^{\infty} \delta(t - k)
$$