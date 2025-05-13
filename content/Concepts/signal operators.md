---
parent:
  - "[[signal processing|signal processing]]"
tags:
  - math/signal
aliases:
  - operator notation for signals
created: 2024-10-29
modified: 2024-12-02
publish: true
---
It is convenient to represent common [[./signal operations|signal operations]] and transformation as [[operator|operators]]. In the context of signal processing, an operator can be seen as a signal-valued function. 

In a sense, an operator is similar to [[./systems|systems]] as both transform input signals to output signals, though operators are usually predefined and are used as building blocks of systems.

One great property of the operator notation is that we can perform algebraic manipulation on them. This way, we can identify and analyze equivalent systems.

## Examples of Operators
### Differentiation
> See: [[./D-notation|D-notation]]

We often write differential equations with the "D-notation" like 
$$(D^2 + 3D + 2)y(t) = Dx(t)$$
where $D$ is differentiation.

### Convolution
> See: [[./convolution|convolution]]

The convolution of two signals $x$ and $y$ is often as $x * y$.

### Fourier-related Transforms
We often write [[Fourier transform|Fourier transform]] and other related transforms as operators.
- Fourier Transform: $\mathcal{F}\{x(t)\} \to X(\omega)$
- [[./Laplace transform|Laplace transform]]: $\mathcal{L}\{x(t)\} \to X(s)$
