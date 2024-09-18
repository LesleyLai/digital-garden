---
aliases:
  - copy/compute overlap
created: 2024-01-08
modified: 2024-03-14
parent:
  - "[[CUDA|CUDA]]"
publish: true
tags:
  - computer/cuda
---

# Copy/compute Overlap
When we perform GPU computation, we usually need to copy data to the CPU, perform computation, and copy data back. However, it is possible to start GPU computation even when the copy is partially completed.

In CUDA, if we want to perform copy/compute overlap, we need to use [[CUDA pinned memory|pinned memory]].