---
created: 2024-01-15
modified: 2024-03-14
parent:
  - "[[CUDA|CUDA]]"
publish: true
tags:
  - computer/cuda
---

# CUDA Thread Hierarchy
The CUDA thread hierarchy consists of two layers: threads organized into [[./CUDA block|blocks]], and blocks organized into a _grid_.
- **Block:** A block is an array of threads and can be 1-3 dimensional. Each block in a grid has the same number of threads. Threads within a block can cooperate through synchronization and shared memory, but cooperation is not possible between threads from different blocks.
- **Grid:** A grid comprises one or more thread blocks and is also 1-3 dimensional.

## Thread ID
`ThreadIdx` is a built-in variable of CUDA that represents the thread identifier. If it is multi-dimensional, we can expand it to get the flattened id.

![[../CUDA thread id.png|600]]
## Thread Blocks
See: [[./CUDA block|blocks]]
There are two built-in variables for thread block, block indices `blockIdx` and dimension `blockDim`.

![[../CUDA thread block.png|600]]