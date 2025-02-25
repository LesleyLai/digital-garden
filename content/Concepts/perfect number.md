---
parent:
  - "[[number theory|number theory]]"
tags:
  - math/NumberTheory
created: 2025-02-24
modified: 2025-02-24
publish: true
aliases:
  - Euclid–Euler theorem
---
A **perfect number** is a positive integer that is equal to the sum of its positive proper divisors.

> [!info] A proper divisor is a divisor excluding the number itself

Perfect numbers were first studied by the Greeks. They knew 4 perfect numbers:
$$
\begin{align}
6 &= 1 + 2 + 3 \\
28 &= 1 + 2 + 4 + 7 + 14 \\
496 &= 1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248 \\
8128 &= 1 + 2 + 4 + 8 + 16 + 32 + 64 + 127 + 254 + 508 + 1016 + 2032 + 4064
\end{align}
$$
The Greeks looked at the [[prime numbers|prime]] factorization of the perfect numbers
$$
\begin{aligned}
6 & =2 \cdot 3=2^1 \cdot 3 \\
28 & =4 \cdot 7=2^2 \cdot 7 \\
496 & =16 \cdot 31=2^4 \cdot 31 \\
8128 & =64 \cdot 127=2^6 \cdot 127
\end{aligned}
$$
and noticed the following pattern:
$$
\begin{aligned}
6=2 \cdot 3 & =2^1 \cdot\left(2^2-1\right) \\
28=4 \cdot 7 & =2^2 \cdot\left(2^3-1\right) \\
120=8 \cdot 15 & =2^3 \cdot\left(2^4-1\right) \text { not perfect } \\
496=16 \cdot 31 & =2^4 \cdot\left(2^5-1\right) \\
2016=32 \cdot 63 & =2^5 \cdot\left(2^6-1\right) \text { not perfect } \\
8128=64 \cdot 127 & =2^6 \cdot\left(2^7-1\right)
\end{aligned}
$$
They discovered the Euclid–Euler theorem:
> [!theorem] Theorem: (Euclid IX, 36)
> If $\sum_{i = 0}^n 2^i$ is prime then $2^n \sum_{i = 0}^n 2^i$ is perfect

which relates perfect numbers to [[Mersenne primes|Mersenne primes]].
