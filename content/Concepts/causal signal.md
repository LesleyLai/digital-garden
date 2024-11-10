---
parent:
  - "[[signal|signal]]"
tags:
  - signal
created: 2024-11-10
modified: 2024-11-10
publish: true
aliases:
  - causal signals
---
The term "**causal signal**" is less commonly used than "[[./causal system|causal system]]," but it refers to a specific type of signal where all outputs with negative inputs have a value of zero.

In the continuous case, it is a function in the form of
$$\begin{cases} f(t) & \text{if $t \ge 0$} \\ 0 & \text{otherwise} \end{cases}$$
or $f(t) \ u(t)$ where $u(t)$ is the [[./unit step function|unit step function]].

![[../assets/causal signal examples.webp|600]]

## Relation with Casual Systems
The [[impulse response|impulse response]] of a [[./causal system|causal system]] must be a causal signal.