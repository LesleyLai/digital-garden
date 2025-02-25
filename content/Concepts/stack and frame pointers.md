---
parent:
  - "[[ABI|ABI]]"
  - "[[call stack|call stack]]"
tags:
  - computing/system/abi
  - computing/memory
created: 2025-02-08
modified: 2025-02-25
aliases:
  - base pointer
  - frame pointer
  - stack pointer
  - frame pointer omission
  - FPO
  - stack register
publish: true
---
A **stack register** keeps track of the top of the [[call stack|call stack]]. The value stored in the stack register is called the **stack pointer**.

## Frame Register
Since the stack pointer may change during execution (e.g., due to push/pop operations), a separate register is used to refer to a stable location on the stack. The **frame register** (whose value is called the **frame pointer** or **base pointer**) always points to the start of the current [[stack frame|function frame]].

## Frame Pointer Omission (FPO)
Some compiler backends can generate code that omits the frame pointer (a technique known as _frame pointer omission_), reducing code size for function calls and freeing up an additional register for general-purpose use.

Omitting the frame pointer can hinder debugging, so it is typically enabled only in optimized builds.

Recently, there has been a trend to re-enable frame pointers even in release mode:
- the [ABI on macOS](https://developer.apple.com/documentation/xcode/writing-arm64-code-for-apple-platforms) requires maintaining frame pointers
- certain popular Linux distributions like [Ubuntu](https://ubuntu.com/blog/ubuntu-performance-engineering-with-frame-pointers-by-default), [Fedora](https://pagure.io/fesco/issue/2923) and [Arch](https://gitlab.archlinux.org/archlinux/rfcs/-/merge_requests/26) are reenabling frame pointers in recent distributions [^1] [^2] [^3]

The performance impact of re-enabling frame pointers is generally minimal on modern platforms, partly due to modern CPUs having much more registers than 32-bit x86 (which only has 4 general purpose registers). [^3]

Enabled frame pointers has the benefit of better tooling. In particular, tools like `perf` uses frame pointers to unwind the stack and get an accurate stack trace, so enable frame pointers can also help performance tuning. [^2]

[^1]: [Lessons from the Field #26: Frame pointers and why they matter for performance tuning](https://community.ibm.com/community/user/wasdevops/blogs/kevin-grigorenko1/2023/02/21/lessons-from-the-field-26-frame-pointers-and-why-t)'
[^2]: [Why do frame pointers matter for OCaml? · Perpetually Curious Blog](https://lambdafoo.com/posts/2025-02-24-ocaml-frame-pointers.html)
[^3]: [The Return of the Frame Pointers](https://www.brendangregg.com/blog/2024-03-17/the-return-of-the-frame-pointers.html)