---
created: 2023-05-30
modified: 2024-05-05
parent:
  - "[[Cargo (Rust)|Cargo]]"
publish: true
tags:
  - computing/Rust/Cargo
---

A workspace is a set of packages shares the same `Cargo.lock` and the same `output` directory. There are multiple ways to structure a workspace, but here is one common way:

To start, add the following lines to `Cargo.toml`:
```toml
[workspace]

members = [
    "adder",
]
```
Next, we’ll create the `adder` binary crate by running `cargo new`:

```console
$ cargo new adder
     Created binary (application) `adder` package
```

## Reference
- [The Rust Programming Language 14.3 Cargo Workspaces](https://doc.rust-lang.org/book/ch14-03-cargo-workspaces.html)