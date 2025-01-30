---
created: 2023-09-27
modified: 2024-03-14
---
# Deciphering C++ Coroutines - A Diagrammatic Coroutine Cheat Sheet - Andreas Weis - CppCon 2022

create: 2023-09-27 16:57
Tags: #Literature/Videos
Video: [Deciphering C++ Coroutines - A Diagrammatic Coroutine Cheat Sheet - Andreas Weis - CppCon 2022 - YouTube](https://youtu.be/J7fYddslH0Q?si=zJuCMaQsISqvvivM)

---

Main: [[./content/Concepts/C++ Coroutines|C++ Coroutines]]

## Overview

- Essential use cases for coroutines
- Coroutines from the caller's perspective
- Steps involved in starting a coroutine
- Suspend and resume
- Drawing a map of coroutine land
- Interreacting with coroutines

## Use Cases

### Asynchronous Computation

```cpp
// blocking call
auto [ec, bytes_read] = read(socket, buffer);

// async call
// Notice the inversion of control flow
async_read(socket, buffer,
  [](std::error_code ec, std::size_t bytes_read) {
    // ...
  })

// Coroutine
auto [ec, bytes_read] = co_await async_read(socket, buffer);
```

### Suspend/resume

```cpp
MyCoroutine co = startComputation(initial_data);
auto some_results = co.provide(some_data);
auto more_results = co.provide(more_data);
auto final_results = co.results;
```

### The Smallest Coroutine
