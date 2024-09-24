---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[Rust|Rust]]"
publish: true
tags:
  - computing/rust/lifetime
---

# Borrow Checker in Rust

The core idea behind the **borrow checker** is that variables have three kinds of **permissions** on their data:
- **Read** (R): data can be copied to another location.
- **Write** (W): data can be mutated in-place.
- **Own** (O): data can be moved or dropped.
These permissions don't exist at runtime, only within the compiler.

By default, a variable has read/own permissions (**RO**) on its data. If a variable is annotated with `let mut`, then it also has the write permission (**W**). The key idea is that **references can temporarily remove these permissions.** Those permissions are returned at the end of a reference's lifetime. Note: a Rust reference's lifetime end at its **last use** rather than when it goes out of scope.

The borrow checker finds permission violation. And it also enforce the rule that data outlive all of its references.

## Related
- [[./Rust ownership|ownership]]
- [[./Rust lifetime|lifetime]]
- [[./Rust borrowing|borrowing]]
### References
- [[Rust for Rustaceans#Lifetimes and the Borrow Checker|Rust for Rustaceans > Lifetimes and the Borrow Checker]]
- [References and Borrowing - The Rust Programming Language](https://rust-book.cs.brown.edu/ch04-02-references-and-borrowing.html#references-change-permissions-on-paths)