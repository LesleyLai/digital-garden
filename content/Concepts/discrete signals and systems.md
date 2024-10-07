---
parent:
  - "[[systems|system]]"
tags:
  - signal/systems
created: 2024-08-27
modified: 2024-09-30
aliases:
  - discrete-time signal
  - discrete signal
publish: true
---
Signals defined only at discrete instants of time $t_0, t_1, \dots, t_n$ are **discrete signals**, denoted by symbols $x(x_n)$, $x(y_n)$, and so on, where $n$ is an integer. Systems whose inputs and outputs are discrete signals are **discrete systems**.

If the samples are uniformly distributed, we further simplify this notation to $x[n], y[n], \dots$ 

Discrete signals naturally occur in scenarios where the input is inherently discrete. They can also result from [[./sampling (signal processing)|sampling]] continuous-time signals. For example, in [[filter (signal processing)|digital filtering]], a continuous signal $x(t)$ is first sampled to convert into a discrete signal $x[t]$, which then is processed by a discrete-time system to yield an output $y[t]$, and at the end we [[./sample reconstruction|reconstruct]] a continuous system $y(t)$. [^1]
![[../assets/processing continuous signal as discrete.png|processing continuous signal as discrete.png]]

## Discrete Signal Representation
Instead of differential equations, we can use [[./difference equations|difference equations]] to represent a discrete system. For example,
$$
y[n] = x[n] - x[n - 1]
$$

[^1]: Linear Systems and Signals, 3rd Edition, 1.7.5