---
parent:
  - "[[signal processing|signal processing]]"
tags:
  - math/signal/modulation
aliases:
  - "#math/signal/modulation"
created: 2024-10-28
modified: 2024-11-21
publish: true
---
**Modulation** use one signal to vary a parameter of another sign.

## Types of Modulation
Different types of modulation exist, based on which parameter of the carrier wave is varied to encode the information. For a sinusoidal carrier wave represented by $A\sin(\omega t + \varphi)$, there are three main parameters that can be modulated:
1. Amplitude (A): Varying this results in **[[amplitude modulation|Amplitude Modulation (AM)]]**
2. [[./angular frequency|Angular frequency]] ($\omega$): Varying this produces **[[frequency modulation|Frequency Modulation (FM)]]**
3. [[phase (waves)|Phase]] ($\varphi$): Altering this creates **[[phase modulation|Phase Modulation (PM)]]**

These are the three fundamental analog modulation techniques. Each has its own characteristics and applications:

- AM is simple but susceptible to noise.
- FM offers better noise immunity and audio quality, commonly used in radio broadcasting.
- PM is similar to FM in many aspects and is often used in digital communication systems.

## Applications
One use of modulation is to prevent interference between different signals. For instance, if all radio stations were to broadcast simultaneously on the same frequency, receivers would be unable to distinguish between them. To avoid this, each radio station is assigned a unique _carrier frequency_ and transmits its signal in a modulated form.