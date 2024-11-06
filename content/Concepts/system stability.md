---
parent:
  - "[[systems|system]]"
tags:
  - signal/systems
aliases:
  - BIBO stability
  - BIBO stable
  - external stability
  - internal stability
  - asymptotic stability
created: 2024-10-26
modified: 2024-11-06
publish: true
---
**Stability** is an crucial property of systems, as unstable systems are often unusable or even dangerous in the real-world.

There are two primary kinds of system stability: **external (BIBO) stability** and **internal (asymptotic) stability**.

## External (BIBO) Stability

If every [[bounded functions|bounded]] input results in a bounded output, a system is said to be **externally stable**. This type of stability is also called **BIBO (bounded-input/bounded output)** stability.

BIBO stability examines how the system responds to external stimuli when starting from a resting state.

For an [[./analysis of LTIC systems|LTIC system]], we can see whether a system is BIBO stable by checking whether its [[impulse response|impulse response]] $h(t)$ is absolutely integrable.
$$
\int_{\tau = -\infty}^{\infty}|h(\tau)| d \tau<\infty
$$
> [!proof]-
> The output $y(t)$ of an LTI system can be expressed as the [[./convolution|convolution]] of the input $x(t)$ with the system's impulse response $h(t)$:
> $$
> y(t)=h(t) * x(t)=\int_{-\infty}^{\infty} h(\tau) x(t-\tau) d \tau
> $$
> Taking the absolute value of both sides and applying the [[triangle inequality|triangle inequality]]:
> $$
> |y(t)| \leq \int_{-\infty}^{\infty}|h(\tau)||x(t-\tau)| d \tau
> $$
> Moreover, if $x(t)$ is [[bounded functions|bounded]], then $|x(t-\tau)|<K_1<\infty$, and
> $$
> |y(t)| \leq K_1 \int_{-\infty}^{\infty}|h(\tau)| d \tau
> $$
> For the system to be BIBO stable, $y(t)$ must be bounded for all bounded $x(t)$. This is guaranteed if:
> $$
> \int_{\tau = -\infty}^{\infty}|h(\tau)| d \tau<\infty
> $$

Though an easier way is to check the asymptotic stability of the system (which implies BIBO stability for an LTIC system).

## Internal (Asymptotic) Stability
If in the absence of an external input, a system remains in a particular state indefinitely, then we call that state an [[equilibrium|equilibrium state]]. Now if we apply a small perturbation to the system,
- If the system is _asymptotically stable_, the response will decay back to the equilibrium state as time passes.
- If the system is _asymptotically unstable_, the response will grow over time, moving further away from the equilibrium state.
- Otherwise the system is _marginally stable_
![[../assets/asymptotic stability.webp|600]]

For an LTIC system, it is **asymptotically stable** if and only if all [[./characteristic equation|characteristic roots]] (also called poles) are in the left-hand plane ($Re\{r\} < 0$).

Conversely, an LTIC system is **asymptotically unstable** if and only if at least one of the following conditions exist:
- at least one root is in the right-hand plane (RHP) of the complex plane
- there are repeated roots on the imaginary axis

If neither the conditions for asymptotic stability nor asymptotic instability are satisfied, the system is classified as **marginally stable**.

Intuitively, a root at the right-hand side of the complex plane or a repeated root means that the [[./zero-input response and zero-state response|zero-input response]] of the system will grow exponentially (and is thus unstable). And if all roots are on the left-hand side, the response will decay exponentially (and is therefore stable).

![[../assets/Location of characteristic roots and the corresponding characteristic modes.png|Location of characteristic roots and the corresponding characteristic modes|600]]

> [!example]- What's the stability of the system $(D + 1)(D^2 + 4D + 8)y(t) = 0$?
> We have the characteristic polynomial
> $$
> (\lambda + 1)(\lambda^2 + 4\lambda + 8) = 0
> $$
> with characteristic roots $-1$ and $-2 \pm 2i$.
> 
> Since all roots are on the LHP, the system is asymptotically stable, and it is also BIBO stable.

## Relationship between BIBO and Asymptotic Stability
> see also: [[./zero-input response and zero-state response|zero-input response]]

External stability is determined by applying an input with zero initial conditions (zero-state response), while internal stability is determined by applying the nonzero initial conditions and no external input (zero-input response). As a result, these two kinds of stability are also called the _zero-state stability_ and _zero-input stability_, respectively.

For LTIC systems, internal stability implies external stability, though the converse is not always true. For nonlinear system, the relation can be more complicated and require separate analysis.

## Implications of Stability
Practical signal processing systems must be asymptotically stable!

Marginally stable systems, though BIBO unstable, do have one important application as the oscillator.