---
created: 2023-05-30
modified: 2024-05-05
parent:
  - "[[Cargo (Rust)|Cargo]]"
publish: true
tags:
  - computer/Rust/Cargo
---

Example:
```toml
[dependencies]
regex = { git = "https://github.com/rust-lang/regex" }
```
We can also specify branch (`branch = "next"`) or commit (`rev = "4c59b707"`)