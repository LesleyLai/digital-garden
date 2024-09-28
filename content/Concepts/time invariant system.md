---
created: 2024-08-18
modified: 2024-08-18
parent:
  - "[[systems|system]]"
publish: true
tags:
  - signal/systems
---
Given a system with a time-dependent output function $y(t)$ and an input function $x(t)$, the system is system is **time invariant** if a time-delay on the input $x(t - T)$ directly equates to a time-delay of the output $y(t - T)$ function.

![[../assets/Time_invariance_block_diagram_for_a_SISO_system.png|Time_invariance_block_diagram_for_a_SISO_system.png]]

> [!example]- Example: Is $y(t) = x(t - 2)$ time invariant?
> The system is *time invariant*.
> 
> - If we apply delay $T$ onto the input $x$, then $x'(t) = x(t - T)$ and  $y'(t) = x'(t - 2) = x(t - 2 - T)$.
> - If we apply delay $T$ onto the output $y$, then $y'(t) = y(t - T) = x(t - 2 - T)$.
>
 We find that applying delay to the input or output gives us the same output, so the system is time invariant.

> [!example]- Example: Is $y(t) = x(-t)$ time invariant?
> The system is *not time invariant*.
> 1. If we apply delay $T$ onto the input $x$, then $x'(t) = x(t - T)$ and $y'(t) = x'(-t) = x(-t-T)$
 > 2. If we apply delay $T$ onto the input $y$, then $y'(t) = y(y - T) = x(-t + T)$
 > 
 >  We get different results, so the system is **not time invariant**.
 
 If a time-invariant system is also [[./linear system|linear]], it is called a [[linear time-invariant system|linear time-invariant system]].