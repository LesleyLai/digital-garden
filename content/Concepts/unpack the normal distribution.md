---
created: 2023-05-30
modified: 2024-11-14
publish: true
tags:
  - math/probability/distribution
parent:
  - "[[normal distribution|normal distribution]]"
---
- $e^x$ [[exponential function|exponential growth]]
- $e^{-x}$ exponential decay
- $e^{|-x|}$ decay in both direction
- $e^{-x^2}$ smoother version of above (no sharp edge)
- $e^{-{\color{red} c}x^2}$ The constant $\color{red} c$ changes the base of exponentiation (it tweaks how "thin" the curve is)
- $e^{-\frac{1}{2}(x/\textcolor{\red}{\sigma})^2}$ where $\textcolor{\red}{\sigma}$ ([[./variance and standard deviation|standard deviation]]) is just that constant $\color{red} c$ with more significant meaning (width)
- Normalize the area under curve to be $1$ (because it is a [[./probability density function|PDF]]):  $\frac{1}{\textcolor{\red}{\sigma} \sqrt{2 \pi}}e^{-\frac{1}{2}(x/\textcolor{\red}{\sigma})^2}$
- Adds another constant $\textcolor{blue}{\mu}$ to describe the [[mean|mean]] $\frac{1}{{\color{red} \sigma} \sqrt{2 \pi}}e^{-\frac{1}{2}\left( \frac{x-\color{blue}{\mu}}{\color{red}{\sigma}} \right)^2}$
 
![[../assets/unpack normal distribution.webp|433]]

## References
- [[But what is the Central Limit Theorem|But what is the Central Limit Theorem]]