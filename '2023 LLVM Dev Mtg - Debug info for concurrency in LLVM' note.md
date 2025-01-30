---
tags:
  - Literature/Videos
link: https://www.youtube.com/watch?v=g4fei6Vl7o8
created: 2024-02-22
modified: 2024-03-14
---
```timestamp-url 
 https://www.youtube.com/watch?v=g4fei6Vl7o8
 ```

```timestamp 
 00:43
 ```
Preserving *debugging experience* for coroutines in C++ and Rust requires significant debugger and compiler support. **This hasn't been done**,

```timestamp 
 01:04
 ```
[[./content/Concepts/Swift concurrency|Swift concurrency]]:
Async/await, Structured Concurrency, Actors
Introduced in 2021
Full Debugger Support in LLDB
- Feels like debugging synchronous code
- Backtraces, Stepping
- Variable Inspection

```timestamp 
 01:46
 ```
 Agenda
- How async/await code breaks every assumption debuggers make
- How to produce async back traces
- How to generate async debug info

## Backtraces
```timestamp 
 02:28
 ```
Async code fundamentally changes execution model and compilation pipeline.

- Functions are broken up at `await` boundaries with `llvm::CoroSplitter`
- Every funclet ends in a *tail call* or *task_switch*
- Parameters are packed into `async_context` heap object


As a result, the back traces will be full of garbage

- Programmer's mental model: Back trace is *where execution came from*
- Async continuations also point to where execution goes next
- Debugger can follow continuation chain to produce a **virtual backtrace**

## Variables
```timestamp 
 05:35
 ```
- Heap Data Structure `async_context`
  - Function Parameters
  - Spilled Variables
- Dedicated *register* for address of *async_context*
  - guaranteed by **Swift ABI**

### Variables in Parent Frames
```timestamp 
 07:11
 ```
In synchronous code, debugger unwinds the stack to recover locals, restore regiesters
In async
- "Parent" "frame" are continuations
- Async continuations point to *beginning* of a new funclet
- Swift ABI dedicates register (`x22`) to pass `async_context`
- From this follows: the value of `x22` must be the address of `async_context`
- Unwinder plugin can recover value form continuation's context

## Summary
```timestamp 
 08:31
 ```
 ABI, compiler, and debugger co-designed for async/await support
### ABI
- dedicated register/location for context
### LLVM
- `llvm::CoroCloner` create Entry Values and calls `llvm::salvageDebugInfo()`
- `LiveDebugValues` pass leaves Async Entry Values alone
### LLDB
- walk continuations for virtual backtraces, and to simulate stepping
- unwinder recovers special Async Register