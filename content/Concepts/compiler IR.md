---
parent:
  - "[[compiler|compiler]]"
tags:
  - computing/compiler/optimizations
  - computing/compiler/IR
aliases:
  - IR
  - intermediate representation
  - intermediate language
created: 2025-02-25
modified: 2025-02-25
publish: true
---
An **intermediate representation** (IR) is a data structure used internally by a compiler or virtual machine to represent source code. [^1] It is used further transformations such as optimization and code generation.

> [!note] [[Abstract syntax trees|ASTs]] and parse trees can be considered forms of IR. However, the term "intermediate representation" typically refers to lower-level representations

Advantages of using an IR include:
- IR is usually written in a form that facilitate [[./compiler optimizations|compiler optimizations]] 
- easy to support multiple target architectures without duplicating frontend code
- A single backend library such as [[LLVM|LLVM]] can be used to compile multiple programming languages

An IR can be designed to be closer to the source language or the target machine code, depending on the requirements. Many compilers use multiple IRs for different purposes. For example, [[LLVM|LLVM]] employs both a [[LLVM IR|higher-level IR]] and a [[LLVM MachineIR|MachineIR]] that is closer to hardware architectures like x86 and ARM. Hardware-independent optimizations are performed on the high-level IR before it is lowered to MachineIR for target-specific transformations.

## Representation of IR
There are various designs of IR, but the most common form is a flat, assembly-like representation ([[three-address code|three-address code]]).

[^1]: [Intermediate representation - Wikipedia](https://en.wikipedia.org/wiki/Intermediate_representation)