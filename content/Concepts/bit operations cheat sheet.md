---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#cheatsheet"
---

## Floating-point Numbers
See: [[./floating-point number|floating-point number]]
We can use bit operations to isolate sign bit, exponent bits, or mantissa bits.[^1]

[^1]: [[Rust in Action|Rust in Action]] 5.4

### Isolating Sign Bit
`n >> 31` for `f32`

### Isolating Exponent
We can perform a right shift to get rid of mantissa bits and then use an mask to exclude the sign bit.

For `f32` there are `8` exponent bits and 23 mantissa bits. We can isolate the exponent bits by `(n >> 32) & 0xff`. To get the exponent value we can then subtract the bias `(exponent_bits as i32) - 127`

### Isolating Mantissa
We can apply a mask to isolate the mantissa bits. For `f32` it is `n & 0x007fffff`. However, to decode mantissa can be quite complex.