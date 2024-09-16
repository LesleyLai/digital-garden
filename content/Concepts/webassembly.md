---
aliases:
  - wasm
created: 2024-06-23
modified: 2024-06-23
parent:
  - "[[machine languages and bytecodes|machine languages and bytecodes]]"
publish: true
tags:
  - computer/wasm
---

# WebAssembly
**WebAssembly** (**wasm**) is a bytecode format with a [formal specification](https://webassembly.github.io/spec/core/).

It comprises of two formats:
- the `.wat` text format (**W**eb**A**ssembly **T**ext) in [[S-expression|S-expressions]]
- the `.wasm` binary format [^1]

The [wat2wasm](https://webassembly.github.io/wabt/demo/wat2wasm/) demo is an online assembler of wasm.

## Memory Model
WebAssembly features a formally-defined [memory model](https://webassembly.github.io/spec/core/syntax/modules.html#syntax-mem). A WebAssembly module accesses a single "linear memory," which functions as a flat byte array. This [memory can be expanded](https://webassembly.github.io/spec/core/syntax/instructions.html#syntax-instr-memory) in increments of the page size (64K), but it cannot be shrunk. ^[1]

[^1]: [What is WebAssembly? - Rust and WebAssembly](https://rustwasm.github.io/docs/book/what-is-webassembly.html)