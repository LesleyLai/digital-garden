---
aliases:
  - warp
  - subgroup
created: 2023-05-30
modified: 2024-09-16
publish: true
tags:
  - computer/gpu
  - computer/cuda
---
A **warp**, or *wavefront* in AMD GPU, or *subgroup* in Vulkan, OpenCL, and OpenGL.

All [[CUDA thread|threads]] in a warp execute the same instructions. If threads in a warp have diverge branches, the scheduler will run both branches on all threads.

![[../warp_diverge.png|warp_diverge.png]]
## In CUDA
On CUDA, all threads in warp is executed on the same [[./streaming multiprocessor|streaming multiprocessor]]. Threads in a warp has consecutive `threadIdx` values.

## See Also
- [[GPU block|GPU block]]