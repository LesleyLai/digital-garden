---
created: 2024-08-27
modified: 2024-08-27
parent:
  - "[[systems|system]]"
publish: true
tags:
  - signal/systems
---
# Causal System
A **causal system** is one where the output at any given time depends only on the input values $x(t)$ for times $t \leq t_{0}$. In other words, in a causal system, the *output cannot occur before the input* is applied.

A system that violates the condition of causality is called a *noncausal* system.

> [!example] Example 
> $y(t) = \underbrace{x(t - 2)}_{\text{past}} + \underbrace{x(t + 2)}_{\text{future}}$ is noncausal because $x(t + 2)$ is a future input