---
created: 2023-05-30
modified: 2024-03-14
publish: true
parent:
  - "[[calculus|calculus]]"
  - "[[numerical analysis|numerical analysis]]"
tags:
  - math/numerical
  - math/calculus/integration
---
Basic idea:
  - [[./sampling (signal processing)|Sample]] the function at many points
  - integral is approximated as weighted sum

## Integration in 1D
  Related: [[fundamental theorem of calculus|fundamental theorem of calculus]]
  [[trapezoidal rule|trapezoidal rule]]: error O(h^2)

## Integration in 2D
   Apply the trapezoidal rule twice.
   The error is still the same.

## Curse of Dimensionality
see [[curse of dimensionality|curse of dimensionality]]
How much does it cost to apply trapezoidal rule as we go up in dimension?
   - 1D: $O(n)$
   - 2D: $O(n^2)$
   - ...
   - kD: $O(n^k)$

 For many problems, $k$ is very big (think about how many parameters a function can have)

 An important way to avoid the curse of dimensionality is to use
 [[./Monte Carlo integration|Monte Carlo integration]]