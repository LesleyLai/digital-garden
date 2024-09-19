---
aliases:
  - CUDA barrier synchronization
created: 2024-01-07
modified: 2024-03-14
parent:
  - "[[CUDA|CUDA]]"
publish: true
tags:
  - computer/cuda
---

CUDA allows threads in the same [[./thread block|block]] to coordinate their activities
by using a _barrier synchronization_ function `__syncthreads()`.

A `__syncthreads()` statement must be executed by all threads.

When a `__syncthreads()` statement is placed in an `if`-statement,
either all or none of the threads in a block execute the path that includes the `_syncthreads()`.
For if-else, if each path has a `__syncthreads()` statement,
either all threads in a block execute the `if` path or all of them execute the `else`-path.

A thread that never arrives at the barrier synchronization point can cause everyone else to wait forever.

Threads in deferent blocks are _not allowed_ to perform barrier synchronization.
An advantage is that the CUDA runtime can execute blocks in any order.