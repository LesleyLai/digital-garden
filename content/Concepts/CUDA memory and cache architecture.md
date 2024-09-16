---
aliases:
  - "#computer/cuda/memory"
created: 2020-12-25
modified: 2024-04-08
parent:
  - "[[CUDA|CUDA]]"
publish: true
tags:
  - computer/cuda/memory
---

# CUDA Memory and Cache
Different types of memory
- R/W per-thread *[[./CUDA register|register]]*
- R/W per-thread [[./CUDA local memory|local memory]]
- R/W per-[[./CUDA block|block]] *[[./shared memory|shared memory]]* and *[[./CUDA cache|L1 cache]]*
- R/W per-[[CUDA grid|grid]] *[[./CUDA global and constant memory|global memory]]*
- Read-only per-grid *[[./CUDA global and constant memory|constant memory]]* (read-only on device)

Host code can write to constant memory