---
parent:
  - "[[ABI|ABI]]"
  - "[[call stack|call stack]]"
tags:
  - computing/system/abi
  - computing/memory
created: 2025-02-08
modified: 2025-02-08
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
Some compiler backends can generate code that omits the frame pointer (a technique known as _frame pointer omission_), reducing code size for function calls and freeing up an additional register for general-purpose use. However, omitting the frame pointer can hinder debugging, so it is typically enabled only in optimized builds.