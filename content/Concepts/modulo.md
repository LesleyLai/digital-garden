---
aliases:
  - modulo operations
  - operator%
  - "% operator"
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/NumberTheory/ModuloArithmetic
  - "#computer/PL/semantics"
---

# Modulo Operation
There are three definition of **modulo operations**: _Truncated_, _Floored_, and _Euclidean_. Their difference is how to handle negative numbers.

> [!example]+
|        | Truncated | Floored | Euclidean |
| ------ | --------- | ------- | --------- |
| `-4 % 4` | 0         | 0       | 0         |
| `-3 % 4` | -3        | 1       | 1         |
| `-2 % 4` | -2        | 2       | 2         |
| `-1 % 4` | -1        | 3       | 3         |
| `0 % 4`  | 0         | 0       | 0         |
| `1 % 4`  | 1         | 1       | 1         |
| `2 % 4`  | 2         | 2       | 2         |
| `3 % 4`  | 3         | 3       | 3         |
| `4 % 4`  | 0         | 0       | 0         |
>
|         | Truncated | Floored | Euclidean |
|---------|-----------|---------|-----------|
| `-4 % -4` | 0         | 0       | 0         |
| `-3 % -4` | -3        | -3      | 1         |
| `-2 % -4` | -2        | -2      | 2         |
| `-1 % -4` | -1        | -1      | 3         |
| `0 % -4`  | 0         | 0       | 0         |
| `1 % -4`  | 1         | -3      | 1         |
| `2 % -4`  | 2         | -2      | 2         |
| `3 % -4`  | 3         | -1      | 3         |
| `4 % -4`  | 0         | 0       | 0         |

Different programming languages use different definition of modulo[^1]. The advantage of Floored and Euclidean is that they can wrap around with negative numbers (think about negative array indices).

## See also
- [[./modulo arithmetic|modulo arithmetic]]

## References
- [C++ Weekly - Ep 365 - Modulo (%): More Complicated Than You Think](https://youtu.be/xVNYurap-lk)
  
## Footnotes
[^1]: [Modulo - Wikipedia](https://en.wikipedia.org/wiki/Modulo)