---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[./real number|real number]]"
publish: true
tags:
  - math/analysis
---

# Positivity of Real Numbers

Since a [[./real number|real number]] is defined as a [[./Cauchy sequence|Cauchy sequence]], it is tempting to say that a real number $x = \lim_{n \rightarrow \infty} a_n$ is positive if all $a_n > 0$. This definition, however, makes $x = \lim_{n \rightarrow \infty} 0.1^n$ positive even if it converges to 0. Thus, we need a better definition.

## Definition

A real number $x = \lim_{n \rightarrow \infty} a_n$ is positive **iff** there is a positive [[rational number|rational]] $c > 0$ such that $a_n > c \ \forall \, n \ge 1$.

The definition of negative number is the same.

And a real number that is neither positive nor negative is 0.