---
aliases:
  - floating-point numbers
  - "#computing/FloatingPointNumber"
created: 2023-02-01
modified: 2024-04-07
publish: true
tags:
  - computing/system/DataRepresentaiton
  - computing/FloatingPointNumber
---
**Floating-point numbers** are often described as "[[./real number|real numbers]]," but in reality [[floating-point number is a subset of rational number|they are subsets of rational numbers]].

## Theoretical Representation
We can understand rational numbers as scientific notation with base 2:
$$1.3125 =\underbrace{0b10101}_{\text {mantissa }} \times 2^{\overbrace{-4}^{\text{exponent}}}
$$
However, with the above representation we may have multiple representations for the same number. For example, $1 \times 2^1 = 2 \times 2^0$, that is the reason we need to *[[normalized number|normalize]]* those the mantissa to always put the comma after the first digit:
$$
42 = 0b10101 = 1.0101
$$
Afterward, the first bit become redundant as it is always $1$, and so it doesn't need to be stored explicitly

## IEEE Float
In memory, an IEEE floating point number consists one _sign_ bit, $w$ _exponent_ bits and $t$ _trailing mantissa_ bits.

- `f32`: $w = 8$, $t = 32$
- `f64`: $w = 11$, $t = 52$

We can use bit operations to [[./bit operations cheat sheet|isolate sign bit, exponent bits, or mantissa bits]].

![[../assets/ieee-format.png|ieee-format.png]]

## See also
- [[subnormal numbers|subnormal numbers]]
- [[denormalized numbers|denormalized numbers]]

## References
- [Floating-Point Numbers - Algorithmica](https://en.algorithmica.org/hpc/arithmetic/float/)