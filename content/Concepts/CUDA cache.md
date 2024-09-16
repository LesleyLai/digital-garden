---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[CUDA memory and cache architecture|CUDA memory and cache architecture]]"
publish: true
tags:
  - "#computer/cuda/memory"
---

# CUDA Cache

CUDA has two-levels of caches, L1 and L2.
- L1 cache is shared by thread across a single [[./streaming multiprocessor|SM]]. It uses the same memory as the [[./shared memory|shared memory]]
- L2 cache is shared across all SMs so every thread can access this memory

## See Also
- [[./CPU cache|CPU cache]]