---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[benchmarking|benchmarking]]"
publish: true
tags:
  - "#computer/performance/benchmark"
---
# How benchmark can go wrong
## the computation got optimized out

## Benchmarking the wrong code
Related to the previous point
introduce code that doesn't related to what actually is being benchmarked

## Throughput vs latency
See [[./latency vs throughput in benchmarking|latency vs throughput in benchmarking]]

## Cold cache
See [[code cache|code cache]]

## Sensitivity to function, branch alignment, link order, etc

## Cache
Benchmarks often have small cache footprint. Real world applications often use much more cache

## References
- [abseil / Performance Tip of the Week #39: Beware microbenchmarks bearing gifts](https://abseil.io/fast/39)
- [Getting Accurate Results - Algorithmica](https://en.algorithmica.org/hpc/profiling/noise/)