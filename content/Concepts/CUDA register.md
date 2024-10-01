---
created: 2023-05-30
modified: 2024-03-19
parent:
  - "[[CUDA memory and cache architecture|CUDA memory and cache architecture]]"
publish: true
tags:
  - computing/cuda/memory
---
**CUDA registers** are private to each [[CUDA thread|thread]], which means registers assigned to each thread are not visible to other thread. The compiler makes decisions about register utilization.

## Related
- [[./CUDA cache|L1 cache]] and [[shared memory|shared memory]] - shared between threads in a block