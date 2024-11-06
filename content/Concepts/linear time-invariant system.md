---
parent:
  - "[[systems|system]]"
tags:
  - signal/systems
aliases:
  - LTI systems
  - linear time-invariant systems
created: 2024-10-01
modified: 2024-10-01
publish: true
---
A **linear time-invariant (LTI) system** is a system that satisfies both [[./linear system|linearity]] and [[./time invariant system|time-invariance]]. These characteristics apply, at least approximately, to many important systems.

In such cases, the system's response $y(t)$ to any given input $x(t)$ can be found directly using [[./convolution|convolution]]:
$$y(t) = (x * h)(t)$$
where $h(t)$ is the system's [[impulse response|impulse response]]. [^1]

A good example of a LTI system is any [[./electric circuit|electric circuit]] consisting of [[resistor|resistors]], [[capacitor|capacitors]], and [[inductor|inductors]]. [^1]

## Analysis
- [[./analysis of LTIC systems|analysis of LTIC systems]]
- [[./transfer function|transfer function]]

[^1]: [Linear time-invariant system - Wikipedia](https://en.wikipedia.org/wiki/Linear_time-invariant_system)