---
parent:
  - "[[CUDA memory and cache architecture|CUDA memory and cache architecture]]"
publish: true
tags:
  - computer/cuda/memory
created: 2024-04-08
modified: 2024-04-08
---

# CUDA Local Memory

Local memory refers to memory where registers and other thread-data are *[[register spilling|spilled]]*.
- usually when one runs out of [[./streaming multiprocessor|SM]] resources
- "Local" because each thread has its own private area
- Arrays declared inside kernels (if compiler can't resolve indexing)

It is not really a physical "memory" as bytes are stored in global memory.
The difference from global memory are
- Addressing is resolved by the compiler
- *Stores are cached in L1* (SM 2.x and newer)

Ideally the program should not use local memory as it hurts performance by increasing memory traffic and increasing instruction count.