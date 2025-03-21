---
parent:
  - "[[prime numbers|prime numbers]]"
tags:
  - math/NumberTheory
created: 2025-02-24
modified: 2025-03-20
publish: true
---
The **Sieve of Eratosthenes** is an ancient algorithm for finding [[prime numbers|prime numbers]]. It works by repeatedly selecting the first remaining number and eliminating all of its multiples.
![[../assets/Animation_Sieve_of_Eratosth.gif|Animation_Sieve_of_Eratosth.gif]]

Below is a simple implementation in Python
```python
from math import sqrt

def sieve(n):
    if n < 2:
        return []

    is_prime_table = [False, False] + [True] * (n - 2)

    for p in range(2, int(sqrt(n)) + 1):
        if is_prime_table[p]:  # If p is still marked as prime
            # Start marking multiples of p from p * p as not prime
            for multiple in range(p * p, n, p):
                is_prime_table[multiple] = False

    # Collect all prime numbers
    return [i for i, is_prime in enumerate(is_prime_table) if is_prime]
```

This algorithm has the time complexity of $O(n \log \log n)$ and space complexity $O(n)$.