---
created: 2025-03-20
modified: 2025-03-20
publish: true
tags:
  - computing/FloatingPointNumber
parent:
  - "[[floating-point number|floating-point number]]"
---
We can understand rational numbers as scientific notation with base 2:
$$1.3125 =\underbrace{0b10101}_{\text {mantissa }} \times 2^{\overbrace{-4}^{\text{exponent}}}
$$
However, with the above representation we may have multiple representations for the same number. For example, $1 \times 2^1 = 2 \times 2^0$, that is the reason we need to **normalize** those the mantissa to always put the comma after the first digit:
$$
42 = 10101_{2} = 1.0101_{2} \times 2^4
$$
Afterward, the first bit become redundant as it is always $1$, and so it doesn't need to be stored explicitly.

The issue with normalized numbers is that they cannot represent 000. To address this, special rules apply when the exponent reaches its smallest possible value, removing the implicit leading 1. This results in a [[subnormal number|subnormal number]].