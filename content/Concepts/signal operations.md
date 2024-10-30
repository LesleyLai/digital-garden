---
aliases:
  - time shifting
  - time scaling
  - time reversal
created: 2024-08-08
modified: 2024-08-11
parent:
  - "[[signal|signal]]"
publish: true
tags:
  - signal
---
Some essential operations for manipulating signals include _shifting_, _scaling_, and _reflection_. When we talk about a signal in time domain, those are called *time shifting*, *time scaling*, and *time reversal* (reflection).

## Shifting
To shift a signal $x(t)$ by $T$, we replace $t$ with $t - T$ in the signal and get $\phi(t) = x(t - T)$
- $T > 0$ shift to right (delay)
- $T < 0$ shift to left (advance)

![[../assets/shifting a signal.png|300]]
Shifting won't change the [[./size of a signal|size of the signal]].

## Scaling
The compression or expansion of a signal in time is known as *time scaling*. To time scale a signal by a factor of $a$, we replace $t$ by $at$. If $a > 1$, the result is a compression. And if $a < 1$, the result is an expansion.

![[../assets/time scaling a signal.png|300]]

## Reflection
*Reflection* or *time reversal* can be seen as a special case of scaling with $a = -1$.
To time-reverse $x(t)$, we replace $t$ with $-t$.

## Combined Operations
Signal operations often combine the above basic operations as $x(at - b)$. It can be understand in two different sequences of operations:
- Time-shift $x(t)$ by $b$ to obtain $x(t - b)$ and then time-scale the shifted signal $x(t - b)$ by $a$ to obtain $x(at - b)$.
- Time-scale $x(t)$ by $a$ to obtain $x(at)$ and then time-shift $x(at)$ by $\frac{b}{a}$ to obtain $x(a(t - \frac{b}{a})) = x(at - b)$

## Related
- [[signal operators|signal operators]]

## Reference
- Linear Systems and Signals, 1.2