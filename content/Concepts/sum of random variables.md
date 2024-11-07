---
created: 2023-05-30
modified: 2024-11-07
publish: true
tags:
  - math/probability
---
The sum of two [[./independence|independent]] [[./random variable|random variables]] can be calculated via either [[./convolution|convolution]]  [^1] or by using [[./moment generating functions|moment generating functions]].

## Sum of Random Variables as Convolution
### Discrete
The sum of two independent discrete random variables has the probability of
$$
P(X + Y = z) = \sum_{k = -\infty}^\infty P(X = k)P(Y = z - k)
$$
If we write it as [[./probability mass function|PMFs]], we can see that the PMF of the sum is the discrete convolution of individual PMFs
$$
p_{X + Y}(z) = [p_X * p_Y](z) = \sum_{k = -\infty}^{\infty} p_X(x) \cdot p_Y(z - x)
$$
### Continuous
Similarly, for continuous random variables, the [[./probability density function|PDF]] of the sum is the continuous convolution of the two inputs
$$
f_{X + Y}(z) = 
[f_X * f_Y](z) = \int_{x = -\infty}^\infty f_X(x) f_Y(z - x) \, dx 
$$

Note that both the cases above require the random variables to be independent, in other word
$$
f_{XY}(x, y) = \int_{-\infty}^{\infty} \, dx 
$$
### Related to Central Limit Theorem
Another interesting consequence is the [[./central limit theorem|central limit theorem]]. Since since [[convolution as smoothing|convolution tends to smooth functions]], repeatedly applying convolutions eventually give us the bell-curve shape.

![[../assets/convolution rectangle.png|convolution rectangle.png]]

## Examples
### The Sum of Independent Poissons is Poisson
$$
   X_{1}, X_{2}, \ldots, X_{n} \stackrel{i i d}{\sim} \operatorname{Poisson}(\lambda) \Rightarrow \sum_{i=1}^{n} X_{i} \sim \operatorname{Poisson}(n \lambda)
$$
and more generally: $X_{1}, X_{2}, \ldots, X_{n}$ independent with $X_{i} \sim \operatorname{Poisson}\left(\lambda_{i}\right)$ implies $$
\sum_{i=1}^{n} X_{i} \sim \operatorname{Poisson}\left(\sum_{i=1}^{n} \lambda_{i}\right)
$$
### The Sum of [[[independent and identically distributed random variables|i.i.d.]] [[exponential random variable|Exponentials]] is [[gamma random variable|gamma]]:
$$
X_{1}, X_{2}, \ldots, X_{n} \stackrel{i i d}{\sim} \exp (\text { rate }=\lambda) \Rightarrow \sum_{i=1}^{n} X_{i} \sim \Gamma(n, \lambda)
$$
### The Sum of i.i.d. Gammas is Gamma
   $$
   X_{1}, X_{2}, \ldots, X_{n} \stackrel{i i d}{\sim} \Gamma(\alpha, \beta) \Rightarrow \sum_{i=1}^{n} X_{i} \sim \Gamma(n \alpha, \beta) .
   $$

[^1]: [Convolutions | Why X+Y in probability is a beautiful mess - YouTube](https://www.youtube.com/watch?v=IaSGqQa5O-M) [[3Blue1Brown Convolutions Why X + Y in probability is a beautiful mess|note]]