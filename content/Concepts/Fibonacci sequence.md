---
parent:
  - "[[sequences|sequence]]"
tags:
  - math/sequences_and_series/Fibonacci
  - math/recurrence
created: 2024-11-22
modified: 2025-02-18
aliases:
  - Fibonacci numbers
publish: true
---
The **Fibonacci sequence** is described by the [[./difference equations|recurrence relation]]
$$
F_n = F_{n-1} + F_{n-2}
$$
with initial conditions $F_0 = 0$ and $F_1 = 1$.

This sequence can be motivated by the following scenario:
> [!quote] A newly born breeding pair of rabbits are put in a field; each breeding pair mates at the age of one month, and at the end of their second month they always produce another pair of rabbits; and rabbits never die, but continue breeding forever.

![[../assets/Fibonacci_Squares.svg|400]]

## Close-Form Solution
Main: [[./Binet's Formula|Binet's Formula]]

The close form solution of the Fibonacci numbers is given by the [[./Binet's Formula|Binet's Formula]]:
$$
F_n = \frac{\phi^n - (-\phi)^{-n}}{\sqrt{ 5 }}
$$
where $\phi = \frac{1 + \sqrt{5}}{2}$ is the [[golden ratio|golden ratio]].

> [!info]
> Since $\lim_{ n \to \infty } (-\phi)^{-n} \to 0$, Fibonacci numbers converges to $\frac{\phi^n}{\sqrt{ 5 }}$ for large $n$ and the ratio of consecutive Fibonacci numbers converges to the golden ratio $\lim_{ n \to \infty }\frac{F_n}{F_{n-1}} = \phi$.

## In Programming

### Recursive Approach
A recursive implementation of the Fibonacci numbers directly translates from the recurrence relation is highly inefficient.
```python
def fib(n):
    if n < 2:
        return n
    else:
        return fib(n - 1) + fib(n - 2)
```
While this approach is highly ineffective (exponential time), it is still often used as a benchmark for programming languages performing computationally intensive tasks or as a demonstration of parallel algorithms.
### Iterative Approach
While we can make the above implementation more efficient with [[memoization|memoization]], a iterative approach also exists:
```python
def fib(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a+b
    return a
```

### Exponentiating By Squaring
By recognizing the above computation as a [[./linear transformation|linear transformation]], we can rewrite it to a matrix multiplication:
$$
\begin{bmatrix}
a' \\
b'
\end{bmatrix} =
\begin{bmatrix}
1 & 1 \\
1 & 0
\end{bmatrix}
\begin{bmatrix}
a \\
b
\end{bmatrix}
$$
As [[./matrix multiplication|matrix multiplication]] is [[associativity|associative]], we can use the [[exponentiating by squaring|exponentiating by squaring]] method to get the result in $O(\log n)$:

```python
def matrix_mult(A, B):
    return [
      [A[0][0] * B[0][0] + A[0][1] * B[1][0],
       A[0][0] * B[0][1] + A[0][1] * B[1][1]],
      [A[1][0] * B[0][0] + A[1][1] * B[1][0],
       A[1][0] * B[0][1] + A[1][1] * B[1][1]]]

def matrix_pow(A, n):
    result = [[1, 0], [0, 1]]  # Identity matrix of size 2x2
    while n > 0:
        if n % 2 == 1:
            result = matrix_mult(result, A)
        A = matrix_mult(A, A)
        n //= 2
    return result

def fib(n):
    A = [[1, 1], [1, 0]]
    result = matrix_pow(A, n)
    return result[1][0]
```
### Binet's Formula
We can also use the [[./Binet's Formula|Binet's Formula]] to calculate the Fibonacci sequence. Do note that this method subjects to the floating-point precision limits.
```python
def fib(n):
    phi = (1 + sqrt(5)) / 2
    psi = (1 - sqrt(5)) / 2
    return round((phi**n - psi**n) / sqrt(5))
```

## See Also
- [[golden ratio|golden ratio]]