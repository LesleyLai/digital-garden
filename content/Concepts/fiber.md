---
aliases:
  - green thread
  - stackful coroutines
created: 2023-10-02
modified: 2024-03-14
parent: 
publish: true
tags:
  - computer/coroutine
---

# Fiber
Fibers are also called *green thread* or *stackful* [[./coroutines|coroutines]]. [[threads|Threads]] are typically the smallest unit of scheduling supported by operating systems, and fibers are OS construct built on top of threads.

Each fiber has their own user-space stack. And fibers can support 1:M or N:M configurations where each thread can support multiple fibers or even where M fibers are multiplexed over N threads.

Fibers are often considered to be inferior to stackless coroutines [^1]. Fibers are
- not portable (tied to OS and hardware architecture)
- non-compatible with a bunch of other existing programming patterns
- invasive and require changes of all synchronization and blocking APIs to be fiber-aware
- have a high context-switch cost
- can cause pervasive stack overflow errors that are hard to debug

## References
[^1]: [[Fibers under the magnifying glass|Fibers under the magnifying glass]]