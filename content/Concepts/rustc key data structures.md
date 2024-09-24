---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - computing/compiler
  - computing/Rust/rustc
---
# Rustc Key Data Structures
- [`TyCtxt`](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_middle/ty/struct.TyCtxt.html) struct serves as database for queries. The name `TyCtxt` is mostly for historical purpose. The lifetime with the name `'tcx` means something is tied to the lifetime of the `TyCtxt`.
- [`rustc_middle::ty::Ty`](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_middle/ty/struct.Ty.html) is the struct that represent Rust types