---
created: 2023-05-30
modified: 2024-03-29
parent:
  - "[[Rust|Rust]]"
  - "[[error handling in programming languages|error handling in programming languages]]"
publish: true
tags:
  - computing/Rust/ErrorHandling
  - computing/Rust/BestPractice
aliases:
  - Rust try block
---
## Try Block
**Try block** is (at the time of writing) an unstable feature (`#![feature(try_blocks)]`) to introduce a scope for the `?` operator. For example:

```rust
let result: Result<i32, ParseIntError> = try {
    "1".parse::<i32>()?
        + "foo".parse::<i32>()?
        + "3".parse::<i32>()?
};
```

## Libraries
There are two crates commonly help Rust error handling. [[Rust thiserror|thiserror]] for library code, and [[./Rust anyhow|anyhow]] for application code.

## Reference
- [You're probably learning a technology in its seventh season, not its pilot](https://steveklabnik.com/writing/you-re-probably-learning-a-technology-in-its-seventh-season-not-its-pilot)

## See Also
- [[Swift error handling|Swift error handling]]