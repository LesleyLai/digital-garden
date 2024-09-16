---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[calculus|calculus]]"
publish: true
tags:
  - math/calculus/limits
---

# L'Hospital's Rule
**L'Hospital's rule** states that for the [[limit|limit]] $\lim _{x \rightarrow a} \frac{f(x)}{g(x)}$, if $\lim _{x \rightarrow a} f(x) = \lim _{x \rightarrow a}g(x) = 0$, or $\lim _{x \rightarrow a} f(x) = \lim _{x \rightarrow a}g(x) = \infty \text{ (positive or negative)}$, and if the limit $\lim _{x \rightarrow a} \frac{f'(x)}{g'(x)}$ exists, then $\lim _{x \rightarrow a} \frac{f(x)}{g(x)} = \lim _{x \rightarrow a} \frac{f'(x)}{g'(x)}$.

An important limitation of L'Hospital's rule is that the limit  $\lim _{x \rightarrow a} \frac{f'(x)}{g'(x)}$ *must exist*. For example, by using the [[./squeeze theorem|squeeze theorem]], we can get $\lim _{x \rightarrow \infty} \frac{x}{x+\sin (x)} = 1$. However, $\lim _{x \rightarrow \infty} \frac{\frac{d}{dx} x}{\frac{d}{dx} (x+\sin (x))} = \lim _{x \rightarrow \infty} \frac{1}{1 + \cos(x)}$ DNE