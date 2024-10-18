---
parent:
  - "[[sinusoid|sinusoid]]"
tags:
  - math/functions
  - physics/wave
created: 2024-10-14
modified: 2024-10-15
publish: true
---
We can [[./linear combination|linearly combine]] two sine waves of the same [[frequency and period of waves|frequency]] (but arbitrary [[phase (waves)|phase]]) to form a sine wave of the that frequency. This property is unique among periodic waves. [^1]

![[../assets/phaseamplitude.gif|adding two sine waves of the same frequency|400]]
[^4]


The geometric intuition is that summing of two sine waves of the same frequency is the same as summing two vectors rotating at the same speed:

![[../assets/sum of sign wave at the same frequency.png|sum of sign wave at the same frequency.png]]

[^3]

More formally:
$$
A_1\sin({\color{red} \omega} t + \varphi_1) + A_2\sin({\color{red} \omega} t + \varphi_2) = A_3\sin({\color{red} \omega} t + \varphi_3)
$$
where
$$
\begin{align}
A_3 &= \sqrt{\left(A_1 \cos \left(\varphi_1\right)+A_2 \cos \left(\varphi_2\right)\right)^2+\left(A_1 \sin \left(\varphi_1\right)+A_2 \sin \left(\varphi_2\right)\right)^2} \\
\varphi_3 &= \arctan \left( \frac{A_1\sin(\varphi_1) + A_2\sin(\varphi_2)}{A_1\cos(\varphi_1) + A_2\cos(\varphi_2)} \right)
\end{align}
$$
We can prove the above with trig identities or [[./Euler's formula|complex numbers]].  [^2]

[^1]: [Sine wave - Wikipedia](https://en.wikipedia.org/wiki/Sine_wave)
[^2]: [Sum of same-frequency sinusoids - Eli Bendersky's website](https://eli.thegreenplace.net/2023/sum-of-same-frequency-sinusoids)
[^3]: [trigonometry - Why does combining sinusoidal functions with the same frequency produce another sinusoidal function? - Mathematics Stack Exchange](https://math.stackexchange.com/questions/4394698/why-does-combining-sinusoidal-functions-with-the-same-frequency-produce-another)
[^4]: [Phase, Delay, and Mixing - Principles of Sound and Synthesis - New Systems Instruments](https://nsinstruments.com/principles/linear.html)