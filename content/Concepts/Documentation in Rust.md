---
aliases:
  - build and open local Rust documentation
  - cargo docs
created: 2024-01-25
modified: 2024-06-24
parent:
  - "[[Rust|Rust]]"
publish: true
tags:
  - computing/Rust/Cargo
---
## Build and Open Local Rust Documentation
`cargo doc --open`
## Doctest
See: [[./Doctest in Rust|Doctest in Rust]]

## Hot Reloading
Install two tools
```
cargo install --locked cargo-watch
npm i -g browser-sync
```

Then run the following commands in parallel
```
browser-sync ./target/doc -w
cargo watch -s 'cargo doc'
```

We can run the two commands in two separate terminals, or we can send one of then into [[./unix shell background|background]].

Reference: [Hot reloading your cargo docs](https://mdaverde.com/posts/hot-reloading-cargo-docs/)