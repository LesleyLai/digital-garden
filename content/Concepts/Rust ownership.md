---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[Rust|Rust]]"
publish: true
tags:
  - computer/rust/lifetime
---

# Ownership in Rust

Rust's memory model centers around the idea that every value has a single **owner**. This is enforced by the [[./Rust borrow checker|borrow checker]].

In Rust, an owner calls [[Rust Drop trait|destructors]] when its values' [[./Rust lifetime|lifetimes]] end. Values cannot outlive their owner.

Ownership can be transferred in Rust either through _assignments_ or _passing data as an argument or return value_. For example, the following code transfer ownership from `a` to `b`. After being moved, `a` can no longer be used. And when the scope end, Rust only deallocate the box on behave of `b` rather than `a`.
```rust
let a = Box::new([0; 1_000_000]);
let b = a;
```