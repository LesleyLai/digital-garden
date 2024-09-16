---
aliases:
  - inversion method
  - inverse CDF
created: 2023-05-30
modified: 2024-03-14
parent: "[[sampling]]"
publish: true
tags:
  - "#math/sampling"
  - math/probability
---

# Inverse Transform Sampling

**Inverse transform sampling** can be used to transform samples from the [[./uniform distribution|uniform distribution]] to another by inverting the target distribution’s [[./cumulative distribution function|CDF]]. It is one of the most important techniques to generate samples from a distribution.

## The Algorithm
1. Compute the CDF[^1] $P(x)=\int_0^x p\left(x^{\prime}\right) \mathrm{d} x^{\prime}$.
2. Compute the inverse $P^{-1}(x)$.
3. Obtain a uniformly distributed random number $\xi$
4. Compute $X_i=P^{-1}(\xi)$.

[^1]: Assuming the PDF $p(x)$ is zero for $x < 0$. Otherwise we need to integrate from $-\infty$

## Derivation
For a distribution $X$, we want to find a transformation $T$ of the canonical  uniform distribution $U$ such that $T(U) = X$. Let the CDF of $X$ be $F(x)$. By the definition of CDF,
$$
F(x) = P(X \leq x)
$$
Substitute $T(U)$ in:
$$
\begin{aligned}
F(x) &= P(T(U) \leq x) \\
&= P(U \leq T^{-1}(x))
\end{aligned}
$$
For the canonical uniform distribution, $P(U \leq T^{-1}(x)) = T^{-1}(x)$ , so we have
$$
\begin{aligned}
T^{-1}(x) &= F(x) \\
T(x) &= F^{-1}(x)
\end{aligned}
$$

## Intuition
> [!example]- A Discrete Example
>  We will use a discrete example for demonstration purpose. To draw a sample from the distribution, we need to take a sample $\xi$ from the [[canonical uniform random variable|canonical uniform random variable]] and use it to select one of the [[./outcome|outcomes]] in CDF s.t. the probability of choosing that outcome is equal to the probability of the outcome itself. From the CDF, we can see that we generated the y axis (from uniform random variable) of a [[./cumulative distribution function|CDF]] and we want to map it to the x-axis.
>  
> ![[../discrete-cdf.svg|discrete-cdf.svg]]
> 
> To generalize this example to continuous distribution, consider a discrete distribution where the number of outcomes approach infinity.