---
parent:
  - "[[./linear system|linear system]]"
tags:
  - signal/systems
created: 2024-08-29
modified: 2024-10-09
aliases:
  - zero-input response
  - zero-state response
publish: true
---
The response of a [[./linear system|linear system]] can be decomposed into **zero-input response** and **zero-state response**.

<div style="text-align: center;">
total response = zero-input response + zero-state response
</div>

## Zero-Input Response
The **zero-input response** is the system output when the input $x(t) = 0$, and thus it is the result of internal system conditions (such as energy storage, initial conditions) alone.

Understand the zero-input behavior provides interesting insight into a system. For example, if a system is disturbed momentarily from its rest position and the disturbance is then removed, the system will not come back to rest instantaneously. y. In general, it will come back to
rest over a period of time and only through a special type of motion that is characteristic of the system. [^1]

## Zero-State Response
The **zero-state response** refers to the output of a system that results solely from the input signal $x(t)$, under the assumption that all initial conditions of the system are set to zero. [^1]

It can be modeled as the [[./convolution|convolution]] of the [[impulse response|unit impulse response]] $h(t)$ and the input $x(t)$:
$$
y_p(t) = h(t) * x(t)
$$

## See Also
- [[time domain analysis of LTIC systems|time domain analysis of LTIC systems]]

[^1]: - Linear Systems and Signals, 3rd Edition, Chapter 2