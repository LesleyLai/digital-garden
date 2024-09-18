---
Aliases:
  - PDF
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# Probability Density Function
Unlike [[./probability mass function|pmf]], pdf does not have the $\le 1$ restriction since it is **not a probability**!
Instead, pdf is normalized in the sense that its integral is equal to 1:
$$
\int_{x=-\infty}^{\infty} p(x) dx = 1
$$

The [[./cumulative distribution function|cumulative distribution function]] of pdf is the integral under the area from $-\infty$ to a variable $a$:
$$
P(X < a) = \int_{x=-\infty}^a p(x) dx
$$