---
created: 2024-02-09
modified: 2024-04-25
parent:
  - "[[benchmarking|benchmarking]]"
publish: true
sr-due: 2024-11-19
sr-ease: 250
sr-interval: 148
tags:
  - computer/performance/benchmark
  - review
---

Execution time can be defined in [[latency vs throughput|more than one way]]. When we have code like the following,
```c++
for (int i = 0; i < N; i++)
    q[i] = rand();

int checksum = 0;

for (int i = 0; i < N; i++)
    checksum ^= lower_bound(q[i]);
```
if we time the whole thing and divide by the number if iterations, we are measuring *throughout* rather than *latency*.

To measure actual _latency_, we need to introduce a dependency between  invocations:
```c++
for (int i = 0; i < N; i++)
    checksum ^= lower_bound(checksum ^ q[i]);
```

## References
- [Getting Accurate Results - Algorithmica](https://en.algorithmica.org/hpc/profiling/noise/)

## See Also
- [[latency vs throughput|latency vs throughput]]