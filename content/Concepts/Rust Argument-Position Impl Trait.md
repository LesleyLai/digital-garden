---
aliases:
  - Rust impl parameters
  - Rust Anonymous type parameters
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[Rust Traits|Rust Traits]]"
publish: true
tags:
  - computing/Rust/generic
---
Rust **Argument-Position Impl Trait** (also called **anonymous type parameter**) is a [[syntactic sugar|syntactic sugar]] that simplify generic function code when we don't need to use the same generic type parameter twice.

For example, the following codes are equivalent:
```rust
// generic type parameter
fn foo<T: Trait>(arg: T) {}

// impl Trait in argument position
fn foo(arg: impl Trait) {}
```

This feature is analogous to C++'s [[abbreviated function templates|constrained auto]] parameters.

# References
- [Impl trait type - The Rust Reference](https://doc.rust-lang.org/reference/types/impl-trait.html#anonymous-type-parameters)