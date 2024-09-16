---
created: 2024-04-18
modified: 2024-04-18
parent:
  - "[[Testing in Rust|Rust integration tests]]"
publish: true
tags:
  - computer/Rust/Testing
---

# Testing Command Line Applications in Rust
- Handwriting with `Command` API: versatile but verbose
- [assert_cmd](https://docs.rs/assert_cmd/latest/assert_cmd/index.html): some nice helpers

## Snapshot Testing Tools
see also: [[./Snapshot Test in Rust|Snapshot Test in Rust]]
- [snapbox](https://docs.rs/snapbox/latest/snapbox/): mainly for snapshot testing (and also the building block of `trycmd`). I am not sure what kind of advantage this can provide compare to `insta`

## End-to-end Test
- [lit crate](https://crates.io/crates/lit/1.0.4): End-to-end test inspired by [[LLVM lit|LLVM lit]]. Doesn't seem to be maintained
- [trycmd](https://docs.rs/trycmd/latest/trycmd/): Documentation is unclear. It also seems only fit for one-shot command, while for my situations I want complex setup with multiple commands.