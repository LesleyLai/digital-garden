---
created: 2024-05-12
modified: 2024-05-12
parent:
  - "[[parallel algorithms|parallel algorithms]]"
publish: true
tags:
  - computing/algorithms/parallel
---
An [[reduction|reduction]] operation applies a binary operator to a sequence of element and get back a single result.

To apply parallel reduction, the binary operator must be *associative*.

![[../assets/parallel reduction.png|400]]

Note that we can just modify the array in-place.

Parallel reduction is not [[arithmetic intensity|arithmetic intensive]], it takes only 1 add so it is completely memory bandwidth bounded.