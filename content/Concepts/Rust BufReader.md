---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[Rust IO|Rust IO]]"
publish: true
tags:
  - computer/Rust/io
---

Rust I/O operations are not buffered, and [BufReader](https://doc.rust-lang.org/std/io/struct.BufReader.html) add buffering to any [[Rust Read|readers]].