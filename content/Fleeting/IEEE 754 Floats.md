---
parent:
  - "[[floating-point number|floating-point number]]"
tags:
  - computing/system/DataRepresentaiton
  - computing/FloatingPointNumber
created: 2025-03-18
modified: 2025-03-20
publish: true
---
In memory, an **IEEE floating point number** consists one _sign_ bit, $w$ _exponent_ bits and $t$ _trailing mantissa_ bits.

- **Half-precision** `f16`: $w = 5, t = 10$
- **Single-precision** `f32`: $w = 8$, $t = 23$
- **Double-precision** `f64`: $w = 11$, $t = 52$

![[../assets/ieee-format.png|ieee-format.png]]

## Subsections
- [[./floating-pointer normalization|floating-pointer normalization]]
- [[subnormal number|subnormal number]]

## Bias in Exponents
The exponent is _biased_. The offset can be computed as 
$$
\text{bias} = 2^{(w−1)}−1
$$

For example, for `f32`, it has an offset of $2^{(8-1)} - 1 = 127$, where [^1]

| Stored Exponent $e$ | Scaling    | Meaning                     |
| ------------------- | ---------- | --------------------------- |
| 0                   | $2^{-126}$ | Subnormal numbers (or zero) |
| 1                   | $2^{-126}$ |                             |
| ...                 | ...        |                             |
| 127                 | $2^0$      |                             |
| ...                 | ...        |                             |
| 254                 | $2^{127}$  |                             |
| 255                 | N/A        | Infinity / NaN              |

Similarly, `f16` has a bias of $15$ and `f64` has a bias of $1023$.


## Related
- We can use bit operations to [[../Concepts/bit operations cheat sheet|isolate sign bit, exponent bits, or mantissa bits]]

## Reference
- [IEEE 754 Floats - Algorithmica](https://en.algorithmica.org/hpc/arithmetic/ieee-754/)

[^1]: [c++ - What is a subnormal floating point number? - Stack Overflow](https://stackoverflow.com/questions/8341395/what-is-a-subnormal-floating-point-number)