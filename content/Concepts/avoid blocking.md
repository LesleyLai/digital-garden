---
aliases:
  - Avoid having async code unyielded for extended periods
created: 2024-02-07
modified: 2024-03-14
parent:
  - "[[concurrency|concurrency]]"
publish: true
tags:
  - computing/asynchronous
  - computing/concurrency
---
Async code should never spend a long time without yielding as it can block the thread.

For long running task, using a separate thread-pool or a dedicated thread is a better choice.

## Reference
- [['Async What is blocking' note|'Async What is blocking' note]]