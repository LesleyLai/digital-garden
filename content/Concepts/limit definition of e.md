---
created: 2024-02-24
modified: 2024-03-14
parent:
  - "[[Euler's number|Euler's number]]"
publish: true
tags:
  - "#math/eulers_number"
  - "#math/calculus/limits"
  - math/definitions
---

[[Jacob Bernoulli|Jacob Bernoulli]] introduced $e$ to address [[compound interest|continuous compounding of interest]], and defined $e$ as the following[^1]. ^ab5755
> [!definition] limit definition of $e$
>$$
e = \lim_{ n \to \infty } \left( 1 + \frac{1}{n} \right)^n
>$$

^b18ef4

## Using Limit Definition of $e$ to Solve Similar Limits
We can use the definition of $e$ to tackle similar limits: [^2]
$$
\begin{align}
\lim_{ n \to \infty } \left( 1 + \frac{a}{n} \right)^{n} = e^{a}
\end{align}
$$
We can prove the above relation by using [[change of variables|change of variables]]:
let $u = \frac{n}{a}$, then
$$
\begin{align}
\lim_{ u \to \infty } \left( 1 + \frac{a}{n} \right)^{n}
&= \lim_{ u \to \infty } \left( 1 + \frac{1}{x} \right)^{au} \\
&= \left( \lim_{ u \to \infty } \left( 1 + \frac{1}{x} \right)^{u} \right)^a \\
&= e^a
\end{align}
$$



[^1]: [e (mathematical constant) - Wikipedia](https://en.wikipedia.org/wiki/E_(mathematical_constant))
[^2]: [Why can't the 1/(3x) be replaced with 0? Reddit calculus limit r/calculus - YouTube](https://youtu.be/1ebqYv1DGbI?si=UVaDhkuO3UmtnMzl)