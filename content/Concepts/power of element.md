---
tags:
  - math/AbstractAlgebra
aliases:
  - power of semigroup
  - power of monoid
specializations:
  - "[[Egyptian multiplication|Egyptian multiplication]]"
created: 2025-02-19
modified: 2025-02-19
publish: true
---
## Semigroup

Let $(S, \circ)$ be a [[semigroup|semigroup]] which has no [[identity element|identity element]] and $a \in S$.

For $n \in \mathbb{N}^+$, the n-th power of $a$ (under $\circ$) is defined as:
$$
a^n = \circ^n a = \begin{cases}
a & \text{if } n = 1 \\
a^{n - 1} \circ a &  \text{otherwise}
\end{cases}
$$
That is
$$
a^n = \underbrace{a \circ a \dots \circ a}_{n \text{ copy of } a}
$$
[^1]


## Monoid
Let $(S, \circ)$ be a [[monoid|monoid]] whose [[identity element|identity element]] is $i$. Let $a \in S$ and $n \in \mathbb{N}$.

The definition of $a^n$ of a semigroup can be extended to allow an exponent of 0:
$$
a^n = \circ^n a = \begin{cases}
e & \text{if } n = 0 \\
a^{n - 1} \circ a & \text{otherwise}
\end{cases}
$$
[^1]
## Implementation
By implementing the idea behind [[Egyptian multiplication|Egyptian multiplication]] and [[exponentiating by squaring|exponentiating by squaring]], we can implement a generic $O(\log{n})$ power function for any semigroups.

> [!tip] This implementation uses two loops for efficiency reason. Check [[Egyptian multiplication|Egyptian multiplication]] for more information

```rust
fn power_accumulate_semigroup<A>(mut r: A, mut a: A, mut n: impl Integer, op: (A, A) -> A) -> A {
    // precondition(n >= 0);
    if (n == 0) return r;
    while (true) {
        if (is_odd(n)) {
            r = op(r, a);
            if (n == 1) return r;
        }
        n = n / 2;
        a = op(a, a);
    }
}

fn power_semigroup<A>(mut a: A, mut n: impl Integer, op: (A, A) -> A) -> A
where is_semigroup(A, op)
{
    assert(n > 0);
    while (!is_odd(n)) {
        a = op(a, a);
        n = n / 2;
    }
    if (n == 1) { 
        a 
    } else {
        power_accumulate_semigroup(a, op(a, a), half(n - 1), op)
    }
}
```
[^2]

We can also extend the above code to monoid by check for zero:
```rust
fn power_monoid<A>(a: A, n: impl Integer, op: impl MonoidOperation<A>) -> A
where is_monoid(A, op)
{
    assert(n >= 0);
    if (n == 0) { op.identity() } else { power_semigroup(a, n, op) }
}
```
[^2]

One implementation of power of monoid is to compute any [[linear difference equation|linear recurrence functions]]. For example, [[./Fibonacci sequence#Exponentiating By Squaring|Fibonacci numbers]] [^2]
```rust
fn fib(u32: n) -> isize
{
    let mat = Mat2::new(1, 1, 1, 0);
    let result = power_monoid(mat, n, Mat2::mult)
    result[1][0]
}
```

[^1]: [Definition:Power of Element - ProofWiki](https://proofwiki.org/wiki/Definition:Power_of_Element)
[^2]: From Mathematics to Generic Programming chapter 7