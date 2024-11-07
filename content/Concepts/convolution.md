---
created: 2024-08-23
modified: 2024-11-07
parent:
  - "[[functions|function]]"
publish: true
tags:
  - math/convolution
---
**Convolution** is a mathematical operation of combining two functions $f$ and $g$ and forming a third function $f * g$. It can be view as the amount of overlap of one function when it is shifted over another function.

> [!definition] Definition of Convolution
> For continuous functions, we have
> $$
> f(t) * g(t) = \int_{\tau = -\infty}^{\infty} f(\tau) g(t - \tau) \, d\tau 
> $$
> For discrete signals, we have convolution defined as
> $$
> (f * g)[n] := \sum_{i=-\infty}^\infty f[i] \cdot g[n - i]
> $$

## Subtopics
- [[./visual explanation of convolution|visual explanation of convolution]]
- [[convolution as smoothing|convolution as smoothing]]
- [[./convolution theorem|convolution theorem]] - relation of convolution and Fourier-like transforms

## Properties of Convolution
Convolution has several nice properties:
- $f * g = g * f$ ([[commutativity|commutativity]])
- $f * (g * h) = (f * g) * h$ ([[associativity|associativity]])
- $f * (g + h) = (f * g) + (f * h)$ ([[distributivity|distributivity]])
- $f(t) * \delta(t - T) = f(t - T)$ ([[./impulse convolution|impulse convolution]])
- If $y(t) = f(t) * g(t)$, then $f(t - T) * g(t) = f(t) * g(t - T) = y(t - T)$ (time shift property)
- If $f(t) * g(t) = y(t)$, $f(at) * g(at) = \left|\frac{1}{a}\right|\ y(at)$ ([[./time scaling property of convolution|time scaling property]])
 
## Applications
Convolutions has various applications. For example:
- [[./polynomial multiplication as convolution|multiplication of polynomials as convolution]]
- [[convolution of probability distributions|sum of probability distributions as convolution]] and the [[./central limit theorem|central limit theorem]]
- convolution can be used to express the output of a [[./linear time-invariant system|linear time-invariant system]] when [[./zero-input response and zero-state response|zero-state response]] and input is given
- Convolution is often used to express [[filter (signal processing)|filters]] such as the [[Gaussian filtering|Gaussian filtering]]