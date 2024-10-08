---
created: 2023-05-30
modified: 2024-09-25
publish: true
tags:
  - computing/concurrency/lockfree
parent:
  - "[[lock-free programming|lock-free programming]]"
---
**The ABA problem** occurs during synchronization when a thread changes a value and later change it back. If another thread read the value before the initial change and then read it again after the latest change, it may conclude that nothing happened.
![[../assets/The-ABA-Problem.png|The-ABA-Problem.png]]
## Some Solutions to the ABA Problem
- Use lazy garbage collection
- Use reference counting
- Make each pointer unique by appending a serial number, and increment the serial number each time it's set (see [[generational reference|generational reference]])
- Use [[./hazard pointer|hazard pointer]]

## References
- [ABA problem - Wikipedia](https://en.wikipedia.org/wiki/ABA_problem)