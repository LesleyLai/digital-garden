---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#computer/Rust"
---

# `PhantomData`

Rust `PhantomData` is useful to tell compilers that I own a certain value despite having a [[Rust raw pointer|raw pointer]] in it:

```rust
use std::marker;

struct Foo<'a, T: 'a> {
    bar: *const T,
    _marker: marker::PhantomData<&'a T>,
}
```

It is also useful to tell the compiler that a type does not implement [[Rust Send and Sync|the `Send` or `Sync` traits]]:

```rust
pub type PhantomUnsync = PhantomData<Cell<()>>;
pub type PhantomUnsend = PhantomData<MutexGuard<'static, ()>>;
```

## References
- [[./Rust concepts I wish I learned earlier|Rust concepts I wish I learned earlier]]