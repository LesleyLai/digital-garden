---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# Unpack the Normal Distribution

- $e^x$ [[exponential function|exponential growth]]
- $e^{-x}$ exponential decay
- $e^{|-x|}$ decay in both direction
- $e^{-x^2}$ smoother version of above (no sharp edge)
- $e^{-cx^2}$ The constant changes the base of exponentiation (it tweaks how "thin" the curve is)
- $e^{-\frac{1}{2}(x/\textcolor{\orange}{\sigma})^2}$ where $\textcolor{\orange}{\sigma}$ is just that constant with more significant meaning (width)
- Need the area under curve to be $1$ (because it is a [[./probability density function|PDF]]):  $\frac{1}{\textcolor{\orange}{\sigma} \sqrt{2 \pi}}e^{-\frac{1}{2}(x/\textcolor{\orange}{\sigma})^2}$
- Adds another constant $\textcolor{\pink}{\mu}$ to describe the mean $\frac{1}{\textcolor{\orange}{\sigma} \sqrt{2 \pi}}e^{-\frac{1}{2}\left( \frac{x-\textcolor{\pink}{\mu}}{\textcolor{\orange}{\sigma}} \right)^2}$
 
## References
- [[But what is the Central Limit Theorem|But what is the Central Limit Theorem]]

---
parent: [[./normal distribution|normal distribution]]
tags: #math/probability/distribution