---
created: 2024-01-07
modified: 2024-03-14
parent:
  - "[[CUDA|CUDA]]"
publish: true
tags:
  - computing/cuda
---
CUDA task graph can save snapshot of task invocations and replay later.
It has way faster relaunching time compare to launching via [[./CUDA stream|stream]] every time.

## Reference
- [Getting Started with CUDA Graphs](https://developer.nvidia.com/blog/cuda-graphs)