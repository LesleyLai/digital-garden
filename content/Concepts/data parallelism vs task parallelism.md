---
aliases:
  - data parallelism
  - task parallelism
created: 2024-06-08
modified: 2024-06-08
parent:
  - "[[concurrency|parallelism]]"
publish: true
tags:
  - computer/parallelism
---

# Data Parallelism Vs Task Parallelism

**Data parallelism**: independent evaluation of different
pieces of data
**Task parallelism**: decomposition of independent tasks

Data parallelism is the main source of scalability in parallel programming, but task parallelism can also helps.

## Examples of Data Parallelism
- GPU kernels
- parallel for loop, parallel [[./STL algorithms|STL algorithms]]

## Examples of Task Parallelism
- threads, [[thread pool|thread pools]], [[actor model|actors]], executors
- [[./CUDA stream|CUDA stream]] and [[./CUDA task graph|CUDA task graph]]