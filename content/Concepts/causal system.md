---
created: 2024-08-27
modified: 2024-09-28
parent:
  - "[[systems|system]]"
publish: true
tags:
  - signal/systems
aliases:
  - noncausal system
---
A **causal system** is one where the output at any given time depends only on the input values $x(t)$ for times $t \leq t_{0}$. In other words, in a causal system, the *output cannot occur before the input* is applied.

A system that violates the condition of causality is called a **noncausal** system.

> [!example]+ Example: $y(t) = x(t - 2) + x(t + 2)$
> $y(t) = \underbrace{x(t - 2)}_{\text{past}} + \underbrace{x(t + 2)}_{\text{future}}$ is noncausal because $x(t + 2)$ is a future input

## Why Study Noncausal Systems?

At first glance, noncausal systems may seem illogical. However, nontemporal systems can be both noncausal and realizable. Even in the case of temporal systems, there are situations where the input is "prerecorded", making "future" inputs available for analysis.