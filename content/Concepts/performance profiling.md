---
created: 2024-01-18
modified: 2024-03-14
publish: true
---
# Performance Profiling
There are multiple main ways of profiling, each with their scope and usefulness:
- [[instrumentation profiling|instrumentation profiling]] times the program as a whole or by parts and count specific events you are interested in.
- [[sampling profiling|sampling profiling]] monitor various _hardware events_ such as branch mispredictions or cache misses
- Program simulation goes down to individual cycle level and _simulate_ the execution of a snippet of machine code

## References
- https://en.algorithmica.org/hpc/profiling/