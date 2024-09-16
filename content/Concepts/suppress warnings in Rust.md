---
created: 2024-07-06
modified: 2024-07-06
parent:
  - "[[Rust|Rust]]"
publish: true
tags:
  - "#computer/Rust"
---

# How to Suppress Warnings in Rust
## Silent Warning on Specific Expression
add the `allow(warning_type)` attribute to the affected expression or any of its parents
```rust
fn main() {
    #[allow(unused_variables)]
    let not_used = 27;

    #[allow(path_statements)]
    std::io::stdin;

    println!("hi!");
}
```