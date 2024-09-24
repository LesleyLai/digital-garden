---
created: 2024-01-07
modified: 2024-03-14
parent:
  - "[[C++|C++]]"
publish: true
tags:
  - computing/concurrency
  - computing/cpp/concurrency
---

# C++ Memory Model
A [[memory model|memory model]] is an abstraction on how threads should interreact with shared memory.

By definition: at any given time active threads may see different values for the shared data.

The source code can be reordered by the compiler, CPU, or computer memory. The memory model must define which guarantee about when memory is accessed, so the programmer can reason through the multi-threaded program.

The model must define when multiple threads may access the same memory, and describe when assignments by one thread can be seen in a concurrently executing thread.

The C++ working group consulted the [[Java memory model|Java memory model]] and the [[pthread|pthread]] library. The first idea for a C++ memory model was to use the Java model, but they decided not to pursue the direction of Java because of the overheads. For example, Java model requires reads to be atomic for some data types.