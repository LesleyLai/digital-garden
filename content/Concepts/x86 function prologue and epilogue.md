---
parent:
  - "[[x86 assembly|x86 assembly]]"
tags:
  - computing/x86
created: 2024-12-14
modified: 2024-12-14
publish: true
---
The prologue preserves the previous frame pointer, establishes a new one, and allocates stack space for local variables. The epilogue restores the stack and frame pointers to their original state before returning.

Prologue
```nasm
push rbp      ; Push previous base pointer to the stack, so it can be restored 
mov	rbp, rsp  ; Set base pointer to the current stack pointer
sub	rsp, N    ; Subtract stack pointer by N (allocate stack space)
```

Epilogue
```nasm
mov	rsp, rbp  ; Restore stack pointer as the base pointer
pop	rbp       ; Restore base pointer as previous base pointer
ret
```

A lot of compilers offers [[frame pointer omission|frame pointer omission]] as an optimization (e.g. GCC's `-fomit-frame-pointer`). In this case, we won't have this complicated prologue/epilogue. When enabled, the compiler may eliminate the frame pointer (rbp) usage for functions that don't require it, simplifying the prologue and epilogue and potentially improving performance.