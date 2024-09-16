---
created: 2023-05-30
modified: 2024-03-17
parent:
  - "[[Testing in Rust|Testing in Rust]]"
publish: true
sr-due: 2024-10-11
sr-ease: 250
sr-interval: 124
tags:
  - computer/Rust/Testing
  - computer/Rust/Cargo
  - review
---

# Organize Rust Integration Tests into a Single Crate

It is beneficial to put Rust integration tests (those standalone tests in `/tests`) folder into a single crate.

In other word, instead of doing
```
tests/
  foo.rs
  bar.rs
```
do
```
tests/
  integration/
    foo.rs
    bar.rs
```
instead.

There are two advantage of that:
- Faster build time since Rust compiler don't need to link for each individual test crates
- Fast run time since Rust can run all tests in parallel, but cargo can only run executables sequentially

## References
- [Delete Cargo Integration Tests](https://matklad.github.io/2021/02/27/delete-cargo-integration-tests.html)