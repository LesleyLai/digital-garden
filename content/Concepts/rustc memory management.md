---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# Rustc Memory Management
Rustc uses [[arena allocator|arena]] and [[interning|interning]].

This helps fast comparison since interned objects can just compare pointers.
> for each interned type `X`, we implemented [`PartialEq for X`](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_middle/ty/struct.Ty.html#implementations), so we can just compare pointers. The [`CtxtInterners`](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_middle/ty/struct.CtxtInterners.html#structfield.arena) type contains a bunch of maps of interned types and the arena itself.

Each time when we want to construct an interned object, the compiler check whether it exists.

At the beginning of compilation we get a buffer (arena) to allocate memory. If we exhaust this buffer, we get another one. The lifetime of that buffer is `'tcx` ([[./rustc key data structures|Remember that tcx is the central data structure in Rustc]]).
My question: Is each kind of objects getting their own arena?

[[thread-local storage|Thread-local storage]] is also used pervasively in Rustc.

## References
- [Memory Management in Rustc - Guide to Rustc Development](https://rustc-dev-guide.rust-lang.org/memory.html)

---
parent: [[./rustc architecture|rustc architecture]]
tags: #computer/compiler #computer/Rust/rustc #computer/memory_management