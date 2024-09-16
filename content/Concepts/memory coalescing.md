---
created: 2024-01-07
modified: 2024-03-14
parent: 
publish: true
tags:
  - computer/cuda
  - computer/gpu
  - computer/performance
---

# Memory Coalescing
When doing GPU programming, **memory coalescing** means to coalesce access to global memory. It is an important performance consideration, as loads and stores by threads of a [[./wavefront|warp]] can be combined into as low as one instruction.

The concurrent accesses of the threads of a warp will coalesce into a number of transactions equal to the number of cache lines necessary to service all of the threads.

GPUs have L1 and L2 Cache. L1 cache is 128-bytes aligned, and L2 cache is 32-bytes aligned.
Reading fewer than those numbers of bytes means the machine still need to fetch all the bytes.

For example, if a warp requests 32 aligned, 4 byte words. (32 threads requesting 1 float in each which are continuous in memory)
The address fall within L1 cache-line, the warp needs to 128 bytes, and 128 bytes are moved across the bus on a miss.
In this case, we have 100% bus utilization.

If a warp requests 32 aligned, 4-byte words,
where 32 threads still requesting 1 float *but not sequentially indexed*.
If the addresses still fall within 1 L1 cache-line (which means they are just shuffled), then we still have 100% bus utilization.
On the other hand, if the address fall within *2* L1 cache-line,
then even though the warp needs 128 bytes, we moved 256 bytes on a miss,
so we have 50% bus utilization.

L2 cache has a similar story, but its alignment requirement is smaller, so the situation is a bit better.
On the other hand, it can be slower than L1 cache.