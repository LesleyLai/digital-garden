---
aliases:
  - interior mutability
created: 2023-05-30
modified: 2024-04-29
parent:
  - "[[Rust|Rust]]"
publish: true
tags:
  - computing/Rust
---

# Interior Mutability in Rust

In Rust, an object that has **interior mutability** presents an immutable façade while internal states can get modified via references.

Rust disallow interior mutability by default but some types enable it. These types usually rely on additional runtime mechanisms or invariants to provide safe mutability. There normally fall into two categories:
- Types like [[Rust Mutex|Mutex]] or [[./Rust RefCell|RefCell]] that ensures [[./law of exclusivity|exclusivity]] with runtime mechanisms (only one `mut &` at a time)
  - Under the hood, these types relies on a type called [[Rust UnsafeCell|UnsafeCell]]
- Types like `std::sync::atomic` and [[Rust Cell|Cell]] do not give out a mutable reference to the inner value, but instead give methods to manipulating those values in place.

The concept of interior mutability is related to [[deep const-ness in C++|deep const-ness in C++]].

## References
- [[Rust for Rustaceans#Chapter 1|Rust for Rustaceans > Chapter 1]]