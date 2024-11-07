---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/probability
---
For a random variable $X$, the **moment-generating function** is
$$
M_X(t) = E[e^{tx}]
$$

- If $X$ is discrete, $M_X(t) = \sum_x e^{tx} \cdot P(X = x)$
- If $X$ is continuous, $M_X(t) = \int_{-\infty}^\infty e^{tx} f_X(x) dx$

For example, if $X \sim Poisson(\lambda)$, $M_X(t) = e^{\lambda(e^t - 1)}$

A moment-generating function can uniquely determine a distribution.

## Use the Moment-generating Function to Calculate the [[./sum of random variables|sum of random variables]]
If the we have $n$ [[./independent and identically distributed random variables|iid]] distributions $X_1, X_2, \cdots, X_n$, the moment-generating function of the sum $Y = \sum_{i=1}^n X_i$ is the moment-generating function of individual distribution raise to n-th power:
$$
   \begin{aligned}
M_{Y}(t) &=\mathrm{E}\left[e^{t Y}\right]=\mathrm{E}\left[e^{t \sum X_{i}}\right]=\mathrm{E}\left[\prod_{i=1}^{n} e^{t X_{i}}\right] \stackrel{\text { indep }}{=} \prod_{i=1}^{n} \mathrm{E}\left[e^{t X_{i}}\right] \\
&=\prod_{i=1}^{n} M_{X_{i}}(t) \stackrel{i d e n t}{=}\left(M_{X_{1}}(t)\right)^{n}
\end{aligned}
$$
And we can get back a new distribution since moment generating functions uniquely determine distribution.