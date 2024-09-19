---
created: 2024-01-15
modified: 2024-09-19
parent:
  - "[[CUDA Thread Hierarchy|CUDA Thread Hierarchy]]"
tags:
  - computer/cuda
publish: true
aliases:
  - workgroup
  - cuda block
---
A **thread block** contains a collection of [[CUDA thread|threads]] that execute concurrently and [[shared memory|share memory]]. It is also called **workgroup** in [[./vulkan|vulkan]] and [[WebGPU|WebGPU]]. This is the highest level in the thread hierarchy where synchronization is still possible.

A thread block can be organized in 1D, 2D, or 3D. Similarly, a [[CUDA grid|grid]] consists of an array of thread blocks, which can also be arranged in 1D, 2D, or 3D.

On the hardware side, a thread block is composed of [[./wavefront|warps/wavefronts]].