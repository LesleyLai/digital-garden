---
created: 2024-08-23
modified: 2024-09-28
parent:
  - "[[functions|function]]"
publish: true
tags:
  - math/convolution
---
**Convolution** is a mathematical operation of combining two functions $f$ and $g$ and forming a third function $f * g$. It can be view as the amount of overlap of one function when it is shifted over another function,

> [!definition] Definition of Convolution
> For continuous functions, we have
> $$
> f(t) * g(t) = \int_{\tau = -\infty}^{\infty} f(\tau) g(t - \tau) \, d\tau 
> $$
> For discrete signals, we have convolution defined as
> $$
> (a * b)_n = \sum_{i=1}^n a_i \cdot b_{n - i}
> $$

## Properties of Convolution
Convolution has several nice properties:
- $f * g = g * f$ ([[commutativity|commutativity]])
- $f * (g * h) = (f * g) * h$ ([[associativity|associativity]])
- $f * (g + h) = (f * g) + (f * h)$ ([[distributivity|distributivity]])
- $\mathcal{L}\{ f * g \} = \mathcal{L}\{ f \} \mathcal{L}\{ g \}$ and $\mathcal{F}\{ f * g \} = \mathcal{F}\{ f \} \mathcal{L}\{ g \}$ ([[./convolution theorem|convolution theorem]])

## Applications
Convolutions has 
- [[./polynomial multiplication as convolution|multiplication of polynomials as convolution]]
- [[convolution of probability distributions|sum of probability distributions as convolution]]
- convolution can be used to express the output of a [[./linear time-invariant system|linear time-invariant system]] when [[zero-input response and zero-state response|zero-state response]] and input is given
