---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[promise and future|promise and future]]"
  - "[[async Rust|async Rust]]"
publish: true
tags:
  - "#computing/rust/async"
---
The `Future` trait represent a value that is not yet available.

It is defined as the following
```rust
pub trait Future {
    type Output;

    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output>;
}
```