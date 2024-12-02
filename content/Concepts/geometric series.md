---
created: 2023-05-30
modified: 2024-12-01
parent:
  - "[[series|series]]"
publish: true
tags:
  - math/sequences_and_series
generalizations:
  - "[[power series|power series]]"
---
The **geometric series** is 
$$
\sum_{n=0}^\infty x^n
$$

The [[./convergence of series|convergence]] of geometric series depends on the value of $x$.

- If $|x| \ge 1$, the geometric series diverges
- If $|x| < 1$, the series converges to $\frac{1}{1-x}$

![[../assets/Eye_of_Horus_square.svg|The geometric series of 1/2 + 1/4 + ...|300]]

## Derivation
### Close Form to Summation
See also: [[Maclaurin series|Maclaurin series]]
One way to expand $\frac{1}{1 - x}$ to a series is to use [[./Taylor series|Taylor expansion]]. Let $f(x) = \frac{1}{1 - x}$. Then
$$
\begin{aligned}
\frac{d}{d x}f(x)&=(1-x)^{-2} \\
\frac{d^2}{d x^2}f(x)&=2(1-x)^{-3} \\
\frac{d^3}{d x^3}f(x)&=6(1-x)^{-4} \\
\frac{d^4}{d x^4}f(x)&=24(1-x)^{-5}
\end{aligned}
$$
Then,
$$
\begin{aligned}
\frac{1}{1-x} & = f(x) = f(0) + f'(0)\, x + \frac{f''(0)}{2!}\, x^2 + \frac{f^{(3)}(0)}{3!}\, x^3 \\
&=(1-x)^{-1}\biggr\rvert_{x=0}+(1-x)^{-2} \biggr\rvert_{x=0} x+\frac{1}{2} \cdot 2(1-x)^{-3} \biggr\rvert_{x=0} x^2 + \cdots \\
& =1+x+x^2+x^3+x^4+\cdots
\end{aligned}
$$
These expressions converge iff $x^n$ tends toward zero, i.e. $|a| < 1$.

### Summation to close Form
To express $\sum_{n=0}^\infty x^n$ in close form, we can do some substitution as typical for [[power series|power series]].

Let $S = \sum_{n=0}^\infty x^n$, then $xS = \sum_{n=1}^\infty x^n$, and
$$
\begin{align}
S - xS = 1 \\
S = \frac{1}{1 - x}
\end{align}
$$
This algebraic manipulation is valid when $|x| < 1$.

## Finite Geometric Series
We get a **finite geometric series** if we truncating the geometric series into several terms
$$\sum_{n=0}^{N} x^n = 1 + x + x^2 + \dots + x^N$$ For $x \neq 1$, it has the close form of
$$
\frac{1-x^{N+1}}{1-x}
$$

## Related
- We can solve the infamous [[./0.999... = 1|0.999... = 1]] question by treating $0.999\dots$ as a geometric series.
- The [[./ratio test|ratio test]] can be used to prove the convergence for $|x| < 1$:
  - $\lim_{n\to\infty} |\frac{a_{n+1}}{a_n}| = \lim_{n\to\infty} |x| < 1$