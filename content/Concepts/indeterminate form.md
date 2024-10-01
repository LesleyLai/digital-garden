---
parent:
  - "[[limit|limit]]"
tags:
  - math/calculus/limits
created: 2024-10-01
modified: 2024-10-01
publish: true
---
It is usually possible to apply arithmetic operations to manipulate limits like the following:
$$
\begin{align}
\lim_{x \to c} \bigl(f(x) + g(x)\bigr) &= \lim_{x \to c} f(x) + \lim_{x \to c} g(x), \\[3mu]  
\lim_{x \to c} \bigl(f(x)g(x)\bigr) &= \lim_{x \to c} f(x) \cdot \lim_{x \to c} g(x)
\end{align}
$$
However, there are certain combinations of particular limiting values cannot be computed in this way. We say that those limits are in an **indeterminate form**, informally described by one of the following: [^1]
$$
\frac 00,~ \frac{\infty}{\infty},~ 0\times\infty,~ \infty - \infty,~ 0^0,~ 1^\infty, \text{ or } \infty^0,
$$

## Solving Indeterminate Forms
If we can perform algebraic manipulation to make a limit the form of $\frac 00$ or $\frac{\infty}{\infty}$, then we can use [[./L'Hospital's rule|L'Hospital's rule]].

We can also use well known result such as the [[./sinc function|sinc function]] limit $\lim_{ x \to 0 }\frac{\sin{x}}{x} = 1$, which itself can be proved by the [[squeeze theorem|squeeze theorem]].

> [!example]+ Solve $\lim_{ x \to 0+ } x^{\tan{x}}$
> Note that we have the indeterminate form $0^0$.
> $$
> \begin{align}
> & \lim_{ x \to 0+ } x^{\tan{x}}  \\
> =& \lim_{ x \to 0+ }(e^{\ln{x}})^{\tan{x}} \\
> =& \lim_{ x \to 0+ }(e^{(\ln{x}) \cdot \tan{x}}) \\
> =&\ e^{\lim_{ x \to 0+ }\, (\ln{x}) \cdot \tan{x}} \\
> =&\ e^{\lim_{ x \to 0+ }\, \ln{x}/\cot{x}} \\
> =&\ e^{\lim_{ x \to 0+ }\, x^{-1}/-\csc^2{x}} & (\text{L'Hospital's rule}) \\
> =&\ e^{-\lim_{ x \to 0+ }\, \sin^2{x}/x} \\
> =&\ e^{-\lim_{ x \to 0+ }\, \sin{x}/x \, \cdot \, \lim_{ x \to 0+ }\,\sin{x}} \\
> =&\ e^{-1 \cdot 0} & \left( \lim_{ x \to 0 }\, \frac{\sin{x}}{x} = 1 \right) \\
> =&\ 1
> \end{align}
> $$
> Also, note that even though we get $1$ from this limits. Not all limits in the form $0^0$ has one as a result.

[^1]: [Indeterminate form - Wikipedia](https://en.wikipedia.org/wiki/Indeterminate_form)