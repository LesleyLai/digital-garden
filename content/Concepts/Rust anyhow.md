---
created: 2024-03-30
modified: 2024-04-07
parent:
  - "[[Rust error handling|Rust error handling]]"
publish: true
tags:
  - computer/Rust/ErrorHandling
---

# Rust Anyhow
`anyhow` is a rust library to type erase different error types. This simplifies error propagation in user code.

## Context
We can wrap an `anyhow::Result` with additional context information with `.context()`:
```rust
result.context("additional info")
```

There is also a lazy version `.with_context()`:
```rust
result.with_context(|| format!("Failed to read instrs from {}", path.display()))
```

## See Also
- [[C++ std error_code|std::error_code]] - C++ facility to type erase error code enums