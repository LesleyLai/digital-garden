---
tags:
  - "#Literature/Articles"
  - "#computing/coroutine"
author: Gor Nishanov
link: https://www.open-std.org/JTC1/SC22/WG21/docs/papers/2018/p1364r0.pdf
created: 2023-10-02
modified: 2024-03-14
---
# Fibers under the Magnifying Glass

---
> adjective “stackless” is typically used to indicate that a coroutine is implemented by the compiler as a state machine and “stackful” to indicate that a coroutine is implemented on top of a user-mode cooperatively scheduled thread.

This article talks about the drawbacks of the stackful approach ([fiber](./content/Concepts/fiber.md#)).

## Memory Footprint
Fibers have comparable memory footprint to OS threads. Because of the high memory footprint of fibers, several mitigation techniques are used:
- Fixed size very small stack (can cause memory corruption if not careful)
- Dynamic stack with guard page
  - Same approach that is normally used with user stack memory of the regular OS thread
- Split stacks/segmented stacks
  - Used initially in Go programming language but got abandoned due to hot-split problem. Rust used to have segmented stack and abandoned this approach as well.

## Context Switching overhead
Much cheaper than threads but still significant compare to normal function call or (stackless) coroutine suspend and resume

## Compatibility & Scalability
### Dangers of N:M Model
If fibers are deployed in N:M model where M fibers are multiplexed over N operating system threads, using things such as function static variables or thread local storage will result in undefined behavior such as stack corruption or reading garbage.

This hazard can be avoided if deployment of fibers is limited to 1:N model. However, it also brings its own set of problems.
### Hazards of 1:N Model
With 1:N model, any blocking call stops progress of all N fibers. To mitigate that, projects using fibers resort to *rewriting all of the APIs and libraries that may have blocking APIs* and providing fiber aware versions of those APIs (this is one of the reasons Rust abandon fibers [^1]).


[^1]: https://github.com/aturon/rfcs/blob/remove-runtime/active/0000-remove-runtime.md