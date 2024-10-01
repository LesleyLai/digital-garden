---
aliases:
  - Rust unit tests
  - Rust integration tests
created: 2023-05-30
modified: 2024-04-18
publish: true
tags:
  - computing/Rust/Testing
  - computing/Rust/BestPractice
---
Rust tests can be defined as nested modules or as standalone files.

Nest modules defines *unit tests*. They can be defined by a separate module annotated by some attributes:

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
```

Standalone files in the top-level `/tests` folder defines *integration tests*. It is best practice to [[./Organize Rust integration tests into a single crate|put them into a single crate]].

## Test Only Dependencies
We can add `dev-dependencies`
```
[dev-dependencies]
tempdir = "0.3"
```

## Specific Tests
- [[./Doctest in Rust|Doctest in Rust]]
- [[./Testing CLI in Rust|Testing CLI in Rust]]
- [[./Snapshot Test in Rust|Snapshot Test in Rust]]

# References
- [Test Organization - The Rust Programming Language](https://doc.rust-lang.org/book/ch11-03-test-organization.html)