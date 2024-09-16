---
aliases:
  - double buffering
  - triple buffering
created: 2024-03-06
modified: 2024-03-14
parent:
  - "[[concurrency|concurrency]]"
publish: true
tags:
  - computer/concurrency
---

# Multiple Buffering
**Double buffering** and **triple buffering** are commonly used to avoid synchronization.

With double buffering, you can't swap buffers when reading or writing is in progress. This can be a problem in computer graphics when the frame rate is capped by Vsync. **Triple buffering** solves this problem. [^1]