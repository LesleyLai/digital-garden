---
aliases:
  - "#computing/algorithms/unification"
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - computing/algorithms/unification
  - computing/PL/TypeTheory
  - computing/logic_programming
---
**Unification** is a generalization of pattern matching where both the "pattern" and the "datum" may contain variables.

A unifier takes two patterns, and determines whether it is possible to assign values to the variables that make the two patterns equal. For example, unifying `(?x a ?y)` and `(?y ?z a)` will get the result where `?x` `?y` `?z` are all bounded to `a`. On the other hand, unifying `(?x ?y a)` and `(?x b ?y)` will fail.[^1]

[^1]: [[SICP|SICP]] p650 Unification