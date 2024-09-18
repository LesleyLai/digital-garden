---
aliases:
  - continuous maps
  - continuity of functions
  - "#math/continuity"
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/functions
  - math/continuity
---

# Continuous Functions
Let $X$ be a subset of $\mathbb{R}$, and let $f: X \rightarrow R$ be a function. Let $x_0$ be an element of $X$. We say that the [[functions|function]] $f$ is **continuous at** $x_0$ iff we have

$$
\lim _{x \rightarrow x_{0} ; x \in X} f(x)=f\left(x_{0}\right)
$$

In other words, the [[limit|limit]] of $f(x)$ as $x$ converges to $x_0$ in $X$ exists and is equal to $f(x_0)$.

If $f$ is continuous on every points on $X$, we say it is **continuous on $X$**.

## Equivalent Formulations of Continuous Functions
Let $X$ be a subset of $\mathbb{R}$, let $f: X \rightarrow \mathbb{R}$ be a function, and let $x_{0}$ be an element of $X$.

Then the following four statements are logically equivalent:
 1. f is continuous at $x_{0}$
 2. For every sequences and sequence $\left(a_{n}\right)_{n=0}^{\infty}$ consisting of elements of $X$ with $\lim _{n \rightarrow \infty} a_{n}=x_{0}$ we have $\lim _{n \rightarrow \infty} f\left(a_{n}\right)=f\left(x_{0}\right)$
 3. For every $\varepsilon>0$, there exists a $\delta>0$ such that $\left|f(x)-f\left(x_{0}\right)\right|<\varepsilon$ for all $x \in X$ with $\left|x-x_{0}\right|<\delta$
 4. For every $\varepsilon>0$, there exists a $\delta>0$ such that $\left|f(x)-f\left(x_{0}\right)\right| \leq \varepsilon$ for all $x \in X$ with $\left|x-x_{0}\right| \leq \delta$

The 3rd and 4th statements are the [[epsilon-delta definition|epsilon-delta definition]] of continuity.
> [!note]
> The difference between them is the usage of < and <= operators.

> [!tip]
> A useful consequence is that continuity can be very useful to calculate [[limit|limits]].

## In Metric Space
Let $\left(X, d_{X}\right)$ be a [[./metric space|metric space]], and let $\left(Y, d_{Y}\right)$ be another metric space, and let $f: X \rightarrow Y$ be a function.

If $x_{0} \in X$ we say that $f$ is continuous at $x_{0}$ iff for every $\varepsilon>0$ there exists a $\delta>0$ such that $d_{Y}\left(f(x), f\left(x_{0}\right)\right)<\varepsilon$ whenever $d_{X}\left(x, x_{0}\right)<\delta$. We say that $f$ is continuous iff it is continuous at every point $x \in X$.

Similarly to real functions, we can have a sequential version of this definition:$f: X \rightarrow Y$ is continuous at $x_0$ iff whenever $\{ x^{(n)} \} \subset X$ converges to $x_0 \in X$ with respect to the metric $d_X$, then $\{ f(X^{(n)}) \}$ converges to $f(x_0)$ with respect to metric $d_Y$

## Continuity is Preserved by Composition
see: [[function composition|function composition]]
If $f$ and $g$ are continuous at $x_0$ and $f(x_0)$ respectively, so is $g \circ f$ at $x_0$