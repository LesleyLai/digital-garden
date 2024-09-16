---
aliases:
  - unorm
  - snorm
created: 2024-02-22
modified: 2024-03-14
parent:
  - "[[./fixed-point number|fixed point]]"
publish: true
tags:
  - computer/system/DataRepresentaiton
  - "#computer/gpu"
---

# `unorm` And `snorm` Data Representation

`unorm` is unsigned normalized [[./fixed-point number|fixed point]] representation of $[0, 1]$ with exact representation on both end while `snorm` is a fixed point representation of $[-1, 1]$. GPUs support both formats in hardware. [^1]

[^1]: [[A Survey of Efficient Representations for Independent Unit Vectors|A Survey of Efficient Representations for Independent Unit Vectors]]