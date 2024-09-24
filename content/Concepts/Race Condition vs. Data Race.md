---
tags:
  - computing/concurrency
created: 2023-12-24
modified: 2024-05-17
aliases:
  - data race
  - race condition
publish: true
---
A **race condition** means that timing or ordering of events can impact the result of execution.

A **data race** happens when there are two memory access that are
- at same location
- performed concurrently and not synchronized
- not both read

There are considerable overlaps but it is possible to have a race condition without a data race or vice versa.

## Reference
- [Race Condition vs. Data Race – Embedded in Academia](https://blog.regehr.org/archives/490)