---
aliases:
  - Rust try_into
  - Rust try_from
  - Rust into
  - Rust from
  - Rust Into
  - Rust TryInto
  - Rust TryFrom
  - Rust From
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#computing/Rust/cast"
---

# Rust Conversions

The Rust documentation recommends library developers to not implement `Into` and `TryInto` directly but instead to implement `From` and `TryFrom`, which also automatically provide an implementation to (try)into. However, it also says to Prefer using [`Into`](https://doc.rust-lang.org/std/convert/trait.Into.html "Into") over using [From](https://doc.rust-lang.org/std/convert/trait.From.html) when specifying trait bounds on a generic function.

The method `.into()` and `.from()` can never fail. A conversion that can potentially fail should be implemented as the `try_*` equivalent.
## References
- [`Into`](https://doc.rust-lang.org/std/convert/trait.Into.html "Into") 
- [`From`](https://doc.rust-lang.org/std/convert/trait.From.html) 
- [`TryInto`](https://doc.rust-lang.org/std/convert/trait.TryInto.html)
- [`TryFrom`](https://doc.rust-lang.org/std/convert/trait.TryFrom.html)