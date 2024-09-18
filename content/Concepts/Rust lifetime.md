---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[Rust|Rust]]"
publish: true
tags:
  - computer/rust/lifetime
---

# Lifetime in Rust

Every object or reference in Rust has a **lifetime**, which is the region of code that the reference is valid. The lifetime of an object is usually inferred, but we can also explicitly state the lifetime in Rust.

The main aim of lifetimes is to prevent dangling references.
## Lifetime Vs Scopes
We often think lifetime as corresponding to scopes: a lifetime begins when a variable is introduced, and it ends when the variable is moved or goes out of scope. However, the reality is a bit more complicated.

TODO
## Topics
- [[Rust lifetime elision|Rust lifetime elision]]
- [[./Rust lifetime variance|Rust lifetime variance]]

## References
- [[Rust for Rustaceans#Lifetime|Rust for Rustaceans > Lifetime]]