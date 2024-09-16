---
aliases:
  - Rust context sensitive pattern matching
created: 2024-05-01
modified: 2024-05-01
parent:
  - "[[pl design|pl design]]"
publish: true
tags:
  - "#computer/Rust/PatternMatching"
---

# Wildcard Import Enum Constants
wildcard import enum constants like the following in Rust is generally considered a very bad idea:
```rust
use SomeEnum::*
```

This is because if you write a typo when `match`ing this enum, Rust will not give any warning and silently create a new variable.

## Reference
- [Mastodon thread](https://mastodon.social/@pervognsen/112358105471909980)