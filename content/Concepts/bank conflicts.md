---
created: 2024-01-07
modified: 2024-03-14
parent:
  - "[[CUDA|CUDA]]"
  - "[[GPU Programming|GPU Programming]]"
publish: true
tags:
  - computing/cuda
  - computing/performance/gpu
---

# Bank Conflicts
In GPU, [[shared memory|shared memory]] is organized into a number of banks (e.g. 16 or 32). Consecutive location of shared memory fall into different banks.

There are no problem to access different banks at the same time, and multiple accessing of the same element in a bank can also happen in parallel. However, access to *different elements* in the *same bank* happens _sequentially_.

The bank conflicts problem can be solved by change allocated shared memory size (even in case where it will leave artificial blank spots)