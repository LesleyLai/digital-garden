---
created: 2020-12-25
modified: 2024-04-08
parent:
  - "[[CUDA memory and cache architecture|CUDA memory and cache architecture]]"
publish: true
tags:
  - computer/cuda/memory
---

# CUDA Global and Constant Memory

- Long latency
- Off-chip, read/write access
- Random access causes performance hit (sequential access is better)
- Host can read/write
  - Reads are cached
  - Writes invalidate the cache

Host can access global and constant variables with
- `cudaGetSymbolAddress()
- `cudaGetSymbolSize()`
- `cudaMemcpyToSymbol()`
- `cudaMemcpyFromSymbol()`

Constants must be declared outside of a function body.