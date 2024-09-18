---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[Monte Carlo integration|Monte Carlo integration]]"
publish: true
tags:
  - math/monte_carlo
  - math/numerical
  - math/sampling
---
This is a one dimensional case study of Monte Carlo integration from the [[ray tracing the rest of your life|Ray Tracing: the Rest of Your Life]] book.

Let' s look at an integral:
$$
I=\int_0^2 x^2 d x
$$
We can solve it analytically and get a result $\frac{8}{3}$. But for the sake of demostration we will use Monte Carlo integration for this problem.

## Uniform Sampling
We might write this as:
$$
I=\operatorname{area}\left(x^2, 0,2\right)
$$
We could also write it as:
$$
I=2 \cdot \operatorname{average}\left(x^2, 0,2\right)
$$

This suggests a Monte Carlo approach:
```cpp
auto sum = 0.0;
for (int i = 0; i < N; i++) {
  const double x = uniform_random(0,2);
  sum += x * x;
}
const auto I = 2 * sum / N;
```
We gets the expected anwser $\frac{8}{3}$

We can use this method even for integrals without a analytical solution like $\log(\sin(x))$, which is what we often need to do for all but the most trivial functions.

## Importance Sampling
A problem of the above approach is that our uniform sampler may not sample certain points often enough (for example, thinking about small light sources when sampling the rendering equation), which courses slow convergent rate. We can solve this problem by using [[./importance sampling|importance sampling]].