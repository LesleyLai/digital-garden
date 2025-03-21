---
aliases:
  - floating-point numbers
  - "#computing/FloatingPointNumber"
created: 2023-02-01
modified: 2025-03-20
publish: true
tags:
  - computing/system/DataRepresentaiton
  - computing/FloatingPointNumber
parent:
  - "[[system programming|system programming]]"
---
**Floating-point numbers** are often described as "[[./real number|real numbers]]," but in reality [[floating-point number is a subset of rational number|they are subsets of rational numbers]].

Floating point has one _sign_ bit, $w$ _exponent_ bits and $t$ _fraction_ bits. They are usually represented as [[../Fleeting/floating-pointer normalization|normalized]] scientific notation with base 2.

## Formats
- [[../Fleeting/IEEE 754 Floats|IEEE 754 Floats]]
  - `f16`: $w = 5$, $t = 10$
  - `f32`: $w = 8$, $t = 23$
  - `f64`: $w = 11$, $t = 52$
- Bfloat16 : 16 bits, $w = 8$, $t = 7$
- NVidia's TensorFloat, 19 bits, $w = 8$, $t = 10$

## Subsections
- [[../Fleeting/floating-pointer normalization|normalized]]
- [[subnormal number|subnormal number]]

## References
- [Floating-Point Numbers - Algorithmica](https://en.algorithmica.org/hpc/arithmetic/float/)