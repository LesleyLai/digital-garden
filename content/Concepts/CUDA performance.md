---
created: 2024-01-07
modified: 2024-03-14
parent:
  - "[[CUDA|CUDA]]"
publish: true
tags:
  - computer/performance/gpu
  - computer/cuda
  - computer/gpu
---

# CUDA Performance
Consider cache and [[./memory coalescing|memory coalescing]].

One way to improve performance is to use [[./shared memory|shared memory]] to avoid hostile memory access pattern. However, [[./bank conflicts|bank conflicts]] can play a role in reducing performance when using shared memory.

## See Also
- [[./copy compute overlap|copy/compute overlap]]