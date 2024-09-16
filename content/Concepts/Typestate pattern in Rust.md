---
created: 2024-06-17
modified: 2024-06-17
parent:
  - "[[Rust|Rust]]"
  - "[[typestate|typestate]]"
publish: true
tags:
  - computer/Rust
---

# The Typestate Pattern in Rust

[[typestate|Typestate]] used to be a language feature in Rust before 1.0, but it was removed due to its significant complexity added to the language and type system [^1]

Type state allowed encoding state machines into the type system, enabling the compiler to catch certain classes of errors at compile-time


- Define uninitializable type for each state of your object
```rust
pub enum Ready {} // No variants, cannot be initialized
```
 - Make your type generic over its state using (see [[./Rust PhantomData|PhantomData]])
 - Implement methods only for relevant states
 - Methods that update state take owned `self` and return instance with new state

When to use
- if you problem is like a state machine
- Ensure at *compile-time* that no invalid operation is done

## Related
- [[./Rust newtype idiom|newtype idiom]]

[^1]: [Typestates in Rust](https://yoric.github.io/post/rust-typestate/)