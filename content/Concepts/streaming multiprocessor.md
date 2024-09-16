---
aliases:
  - SM
  - streaming processors
created: 2023-05-30
modified: 2024-03-19
publish: true
tags:
  - computer/cuda
---

## Steaming Multiprocessor

 The execution resources of [[./CUDA|CUDA]] are organized in **streaming multiprocessors** (SM). Multiple [[thread block|thread block]] can be assigned to each SM.

One SM contains multiple streaming processors (SPs).
![[../SM.jpg|SM.jpg]]

Each device sets a limit number of blocks that can be assigned to each SM.
## Reference
  - [[Programming massively parallel processors|Programming massively parallel processors]], Chapter 3