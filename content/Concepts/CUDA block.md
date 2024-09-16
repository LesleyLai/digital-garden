---
created: 2024-01-15
modified: 2024-03-14
parent:
  - "[[CUDA Thread Hierarchy|CUDA Thread Hierarchy]]"
publish: true
tags:
  - computer/cuda
---

# CUDA Block
The threads in a block forms a [[./wavefront|warp]]. A warp is executed on the same [[./streaming multiprocessor|SM]] (since a block is executed on the same SM).

## See Also
- [[./wavefront|warp]]