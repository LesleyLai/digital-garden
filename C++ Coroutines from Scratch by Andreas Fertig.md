---
tags:
  - Literature/Videos
created: 2023-09-30
Video Link: https://youtu.be/geU-gBxDSCA?si=HeSQ7hkPVEPyPYHZ
parent: "[[C++ Coroutines]]"
modified: 2024-03-14
---
# C++ Coroutines from Scratch by Andreas Fertig
---

C++ Coroutine is Stackless

## Interaction with a Coroutine
- `co_yield` and `co_await` pause a coroutine
- `co_return` ends a coroutine

| Keyword     | Action | State     |
| ----------- | ------ | --------- |
| `co_yield`  | Output | Suspended |
| `co_return` | Output | Ended     |
| `co_await`  | Input  | Suspended          |

## Elements of a Coroutine
- In C++, a coroutine consists of
  - A *wrapper type*. This is the return type of the coroutine function's prototype
    - With this type can control the coroutine from the outside. For example, resuming the coroutine or getting data into or from the coroutine by storing a handle to the coroutine in the wrapper type.
  - The compiler looks for a type with the exact name `promise_type` inside the return type of the coroutine (the wrapper type). This is the control from inside.
    - The promise_type can be a type aliasing
  - An awaitable type that comes into play once we use `co_await`
  - We also often use another part, an iterator
- A coroutine in C++ is an [[finite state machine|finite state machine]] that can be controlled and customized by the `promise_type`.
- The actual function which uses `co_yield`, `co_await`, or `co_return` for communication with the world outside.

