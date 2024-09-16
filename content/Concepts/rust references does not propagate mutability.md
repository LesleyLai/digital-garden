---
created: 2023-05-30
modified: 2024-03-14
parent: "[[Rust]]"
publish: true
tags:
  - computer/Rust
---

Unlike [[C++ references|C++ references]], Rust references do not propagate mutability. It behaves like a C pointer in this regard. This should not be confused as [[./Rust interior mutability|interior mutability]].

For example, in the following code, we can mutate what `mref` refers to even though `mref` itself is not `mut`.
```rust
fn main() {
    let mut i = 0;
    println!("{i}");
    let mref = &mut i;
    *mref += 1;
    println!("{i}");
}
```