---
parent:
  - "[[sequences|sequence]]"
tags:
  - "#math/sequences_and_series/Fibonacci"
  - "#math/recurrence"
created: 2024-11-22
modified: 2024-12-07
aliases:
  - Fibonacci numbers
publish: true
---
The **Fibonacci sequence** can be motivated by the following scenario:
> [!quote] A newly born breeding pair of rabbits are put in a field; each breeding pair mates at the age of one month, and at the end of their second month they always produce another pair of rabbits; and rabbits never die, but continue breeding forever.

This problem can be described by the [[./difference equations|recurrence relation]]
$$
F_n = F_{n-1} + F_{n-2}
$$
with initial conditions $F_0 = 0$ and $F_1 = 1$

![[../assets/Fibonacci_Squares.svg|400]]

## Close-Form Solution
Main: [[Binet's Formula|Binet's Formula]]

The close form solution of the Fibonacci numbers is given by the [[Binet's Formula|Binet's Formula]]:
$$
F_n = \frac{\phi^n - (-\phi)^{-n}}{\sqrt{ 5 }}
$$
where $\phi = \frac{1 + \sqrt{5}}{2}$ is the [[golden ratio|golden ratio]].

> [!info]
> Since $\lim_{ n \to \infty } (-\phi)^{-n} \to 0$, Fibonacci numbers converges to $\frac{\phi^n}{\sqrt{ 5 }}$ for large $n$ and the ratio of consecutive Fibonacci numbers converges to the golden ratio $\lim_{ n \to \infty }\frac{F_n}{F_{n-1}} = \phi$.

## In Programming

A recursive implementation of the Fibonacci numbers directly translated from the recurrence relation is highly inefficient, but it is still often used as a benchmark for programming languages performing computationally intensive tasks or as a demonstration of parallel algorithms.
```python
def fib(n):
  if n < 2:
    return n
  else:
    return fib(n - 1) + fib(n - 2)
```
While we can make this implementation efficient with [[memoization|memoization]], a iterative approach also exists:
```python
def fib(n):
  a, b = 0, 1
  for _ in range(n):
    a, b = b, a+b
  return a
```
For computing very large Fibonacci numbers, we can also use the close-form solution.

## See Also
- [[golden ratio|golden ratio]]