---
aliases:
  - system
created: 2024-08-13
modified: 2024-10-28
parent:
  - "[[signal processing|signal processing]]"
publish: true
tags:
  - signal/systems
---
**Systems** is a ubiquitous concept. There are mechanical systems, electronic systems, optical systems, acoustic systems, finical systems, and many others. In system science, these diverse systems are all viewed as black boxes that receive [[./signal|signals]] as input and produce signals as output.

![[../assets/representation of a system.png|representation of a system.png]]

This abstraction of a system as an input-output relationship is remarkably powerful and widely applicable across various fields. In many ways, it resembles functions/procedurals in programming languages, as it allows for composability and liberates us from the need to consider internal details. However, systems typically deal with signals (a.k.a. functions) rather than distinct samples. In this sense, the system concept is more akin to [[higher-order functions|higher-order functions]] in programming.

Though systems consider signals (functions) rather than individual samples, as input and output. so in that sense it is similar to [[higher-order functions|higher-order functions]].

Note that the choice of input and output for a system can be arbitrary, though it should be relevant and effective for addressing a specific problem.
## System Representations
### Discrete
> See [[./discrete signals and systems#Discrete System Representation|Discrete System Representation]]
- [[./difference equations|difference equations]] - declarative and concise
- [[block diagram|block diagram]] - imperative
- [[signal operators|operator notation]]

### Continuous
- [[./differential equations|differential equations]]

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
- [[./analysis of LTIC systems|analysis of LTIC systems]]