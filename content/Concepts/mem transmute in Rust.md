---
aliases:
  - bit cast in Rust
  - bit reinterpretation in Rust
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - computing/Rust/cast
  - computing/Rust/unsafe
---

`std::mem::transmute` can be used for bit cast in Rust
```rust
let a: f32 = 42.42;
let frankentype: u32 = unsafe {
  std::mem::transmute(a)
};
```

## Why is Transmute Unsafe
I had a brain rot about why transmute is unsafe. This is because you can have a bit pattern that does not represent a valid value of the target type. This makes me wish that Rust has "conditional unsafe" for generic functions.

A comment from mastodon:
> The `bytemuck` crate is commonly used for this