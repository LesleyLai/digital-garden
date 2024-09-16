---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#computer/Rust"
---

Using the [[Rust deref|`Deref`]] trait to emulate inheritance in [[./Rust|Rust]] is an anti-pattern.

It has subtle semantic difference from inheritance in OOP languages. In particular, `self` is not bind to the "subclass", but rather than class where the method is actually defined (think about non-`virtual` methods and [[./C++ Method Hiding|method hiding]] in C++)

## Reference
- [Deref polymorphism](https://rust-unofficial.github.io/patterns/anti_patterns/deref.html#deref-polymorphism)