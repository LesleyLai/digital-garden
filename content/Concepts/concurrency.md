---
aliases:
  - "#computing/concurrency"
  - asynchronous programming
  - parallelism
created: 2024-03-06
modified: 2024-10-24
parent:
  - "[[computing|computing]]"
publish: true
tags:
  - computing/concurrency
  - MOC
  - computing/parallelism
title: Concurrency, Parallelism, and Asynchronous Programming MOC
---
## Concepts
- [[dead lock|dead lock]]
- [[./Race Condition vs. Data Race|Race Condition vs. Data Race]]
- [[./data parallelism vs task parallelism|data parallelism vs task parallelism]]

## Constructs
- [[./coroutines|coroutines]]: either [[./fiber|fiber]] or [[stackless coroutines|stackless coroutines]]

## Patterns
- [[./concurrency patterns|concurrency patterns]]
- [[./structured concurrency|structured concurrency]]

## Best Practices
- [[./avoid blocking|avoid blocking]]
- [[./synchronization quadrant|shared mutable data needs synchronization]]
- [[./law of exclusivity|law of exclusivity]]

## Lock-Free Programming
see: [[lock-free programming|lock-free programming]]
- [[compare and swap|compare and swap]]
- [[./ABA problem|ABA problem]]
  - [[./hazard pointer|hazard pointer]]

## Related
- [[./GPU Programming|GPU Programming]]