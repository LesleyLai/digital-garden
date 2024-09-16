---
created: 2023-06-19
modified: 2024-03-14
parent:
  - "[[Unix|Unix]]"
  - "[[asynchronous IO|asynchronous IO]]"
publish: true
tags:
  - computer/asynchronous/io
  - computer/Linux
---

# io_uring

`io_uring` is an [[asynchronous IO|asynchronous IO]] API for the [[Linux kernel|Linux kernel]]. It is a relative new API since Linux kernel 5.1 and aim to replace old APIs and be the standard for async I/O in Linux kernel.

`io_uring` contains two ring buffers: the submission queue and the completion queue. Those two buffers are shared between user and kernel, and reading and writing on them do not require system calls or copies.

The user code writes requests to the submission queue. The kernel process those requests, and when it finish, it write back into the completion queue. The user read from the completion queue to know when a task is finished.

## Reference
- [C++20 Coroutines and io\_uring - Part 1/3 | pablo arias](https://pabloariasal.github.io/2022/11/12/couring-1/)