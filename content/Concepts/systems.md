---
aliases:
  - system
created: 2024-08-13
modified: 2024-10-27
parent:
  - "[[signal processing|signal processing]]"
publish: true
tags:
  - signal/systems
---
A **system** can be viewed as a black box that takes [[./signal|signals]] as input and produces signals as output.

![[../assets/representation of a system.png|representation of a system.png]]

This abstraction of a system as an input-output relationship is remarkably powerful and widely applicable across various fields. In many ways, it resembles functions/procedurals in programming languages, as it allows for composability and liberates us from the need to consider internal details.

Note that the choice of input and output for a system can be arbitrary, though it should be relevant and effective for addressing a specific problem.
## Classification of Systems
- [[./linear system|linear vs nonlinear]]
- [[./time invariant system|time invariant vs time varying]]
- [[./causal system|causal vs noncausal]]
- continuous vs [[./discrete signals and systems|discrete]]
- [[invertible systems|invertible vs noninvertible]]
- [[internal and external stability of a system|stable vs unstable]]

One of the most widely studied type of systems is the [[./linear time-invariant system|linear time-invariant (LTI) system]].

## System Response
- [[./zero-input response and zero-state response|zero-input response and zero-state response]]
- [[impulse response|impulse response]]
- [[transfer function|transfer function]]

## System Analysis
- [[time domain analysis of LTIC systems|time domain analysis of LTIC systems]]