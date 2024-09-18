---
aliases:
  - C++ Latch
  - C++ Barrier
created: 2024-04-29
modified: 2024-04-29
parent:
  - "[[C++ concurrency|C++ concurrency]]"
publish: true
tags:
  - computer/cpp/concurrency
---

# C++ Latches and Barriers
- `latch` is useful for managing one task by multiple threads
- `barrier` helps to manage repeated tasks by multiple threads
- `latch` can only be used once, but a `barrier` can be used more than once