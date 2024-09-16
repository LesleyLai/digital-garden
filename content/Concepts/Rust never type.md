---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# Rust Never Type

In Rust, we can return a `!` type to indicate a function never returns:

```rust
fn abort() -> ! { /* do something */ }
```

## Related
- [[noreturn attribute|noreturn attribute]]
- [[./Typescript never type|Typescript never type]]

## Reference
[never - Rust](https://doc.rust-lang.org/std/primitive.never.html)

---
tags: #computer/Rust