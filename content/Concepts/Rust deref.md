---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - computer/Rust/smart_pointers
---

# Rust `Deref` and `DerefMut`

Those two traits are for dereferencing operations like `*v`. They are often used by compiler implicitly (which is called [[Deref coercion|Deref coercion]]).

The Rust documentation recommends to **only implement those traits for [[./Rust smart pointers|smart pointers]]** to minimize confusing. Other uses, such as using [[./Deref polymorphism anti-pattern|using Deref to mimic polymorphism]], are considered anti-patterns.

Those traits should also never fail.

Example:
```rust
use std::ops::Deref;

struct MyBox<T>(T);

impl<T> Deref for MyBox<T> {
    type Target = T;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}
```

Rust compiler will then transform `*y` into `*(y.deref())`.
## References
- [Treating Smart Pointers Like Regular References with the Deref Trait - The Rust Programming Language](https://rust-book.cs.brown.edu/ch15-02-deref.html)
- [Rust Doc Deref](https://doc.rust-lang.org/std/ops/trait.Deref.html)