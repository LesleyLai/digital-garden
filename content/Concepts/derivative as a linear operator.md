---
parent:
  - "[[derivative|derivative]]"
  - "[[./linear transformation|linear operator]]"
tags:
  - math/calculus/differentiation
created: 2025-03-24
modified: 2025-03-24
publish: true
---
Intuitively, computing a derivative is a [[./linearization|linearization]] process. [^1]

![[../assets/Tangent_to_a_curve.svg.webp|400]]

Building on this intuition, it is possible to show that derivative satisfies the defining properties of a [[./linear transformation|linear transformation]]: additivity and homogeneity. Specifically, for any functions $f$ and $g$, the differentiation operator $D$ obeys the following relation in [[./D-notation|D-notation]]:
$$
D(a \, f+b \, g)=a\,D(f)+b\,D(g)
$$

This insight helps determine the dimensions of a derivative. A linear operator from a n-dimensional [[./Euclidean vector space|Euclidean vector]] $\mathbb{R}^n$ to a m-dimensional vector in $\mathbb{R}^m$ can be represented as an $m \times n$ matrix. And as a result,
- the derivative of a function $f$ with n input and 1 output is an $n$-dimensional [[./gradient|gradient]] vector
- [[./multi-variable derivative|the derivative of a multi-variable function]] with $n$ input and $m$ output, if exists, is an $m \times n$ [[./Jacobian|Jacobian Matrix]] [^1]


[^1]: [So You Think You Know How to Take Derivatives? | Steven Johnson | ASE60 - YouTube](https://www.youtube.com/watch?v=-l7JHalBubw)