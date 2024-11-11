---
parent:
  - "[[pl design|pl design]]"
tags:
  - computing/PL/semantics
  - opinion
aliases:
  - 0-index
  - 1-index
  - 0-based indexing
  - 1-based indexing
created: 2024-11-11
modified: 2024-11-11
publish: true
---
## 0-index Advantage
- A number in memory start from 0, so from machine's point of view, it is natural to index this way
- [[Dijkstra|Dijkstra]] argues that $0 \le i < N$ is better than $1 \le i < N + 1$ [^1]
  - Lesley: Though in the era of modern PLs where we have more constructs other than `while` and 3-clauses `for` loop, it is fine to define intervals as inclusive like $[1, N]$
- 0 index works well with [[modular arithmetic|modular arithmetic]] and works better for a lot of common index-based operations
  - e.g. flatten an 2D array
    - 0 index: `i = width * y + x`, `x = i % width, y = i / width`
    - 1 index: `i = width * (y - 1) + x`, `x = (i - 1) % width + 1, y = (i - 1) / width + 1`
- Most PLs are doing so. I certainly find it more intuitive after years of use.
  - There is also the cost of interoperability. Mixing 0-based indexing and 1-based indexing is certainly the worst of both worlds.

## 1-index Advantage
- More intuitive for non-programmers in the sense that you don't need to explain "n-th element" is at `n - 1`
- More math people prefer that, and math texts often use that

[^1]: [E.W. Dijkstra Archive: Why numbering should start at zero (EWD 831)](https://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD831.html)