---
aliases:
  - Nyquist–Shannon sampling theorem
  - sampling theorem
created: 2023-05-30
modified: 2024-10-28
publish: true
tags:
  - signal/sampling
---
The **Nyquist-Shannon sampling theorem** states that a [[bandlimiting|band-limited]] [[./signal|signal]] (has no frequencies above some threshold $f_0$) can be perfectly [[./sample reconstruction|reconstructed]] if sampled at a rate greater than twice the maximum frequency component ($f_s > 2f_0$).

![[../assets/Nyquist-Shannon.webp|500]]

An intriguing application of the sampling theorem is seen in audio processing, where sound is often sampled at rates of 44.1 kHz or 48 kHz. Since the human ear typically can't detect frequencies above 20,000 Hz, these sampling rates are sufficient to capture and accurately represent the entire range of audible frequencies.

## Related
- [[./aliasing|aliasing]]