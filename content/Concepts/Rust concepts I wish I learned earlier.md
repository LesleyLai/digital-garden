---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# Rust Concepts I Wish I Learned Earlier

Author:
Link: https://rauljordan.com/rust-concepts-i-wish-i-learned-earlier/
Tags: #Literature/Articles

---

- deref, derefmut (see [[./Rust deref|deref]])
  - be careful with methods
-  [[./Rust interior mutability|interior mutability]]
  - cell, refcell, be careful
- `.get_mut()` methods for containers;
- [[./Rust Argument-Position Impl Trait|Rust impl parameters]] (c++ concept auto param)
- [[./Rust iter iter_mut and into_iter|iter() when you need to borrow, iter mut() for exclusive refs, and into iter() when you need to own]]
- [[./Rust PhantomData|Phantom data]] is more than just for working with raw pointers to types
- [[rayon-rs|rayon]]
- [[./Rust extension traits|extension traits]]
- benchmark