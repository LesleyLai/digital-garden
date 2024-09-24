---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[Rust Drop trait|Rust Drop trait]]"
publish: true
tags:
  - computing/rust/lifetime
---

# Rust Drop Order

Local variables (including function argument) are dropped in reverse order, while nested values (like `struct` fields) are dropped in source code order.

This behavior is different from C++ destruction order, where nested values are destructed in reverse order too.

## See Also
- [[./Rust ownership|Rust ownership]]
- [[Rust Drop trait|Rust Drop trait]]