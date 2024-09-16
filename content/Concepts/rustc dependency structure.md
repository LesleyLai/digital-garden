---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# Rustc Dependency Structure
-   `rustc` (the binary) calls [`rustc_driver::main`](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_driver/fn.main.html).
    -   [`rustc_driver`](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_driver/index.html) depends on a lot of other crates, but the main one is [`rustc_interface`](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_interface/index.html).
        -   [`rustc_interface`](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_interface/index.html) depends on most of the other compiler crates. It is a fairly generic interface for driving the whole compilation.
            -   Most of the other `rustc_*` crates depend on [`rustc_middle`](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_middle/index.html), which defines a lot of central data structures in the compiler.
                -   [`rustc_middle`](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_middle/index.html) and most of the other crates depend on a handful of crates representing the early parts of the compiler (e.g. the parser), fundamental data structures (e.g. [`Span`](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_span/struct.Span.html)), or error reporting: [`rustc_data_structures`](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_data_structures/index.html), [`rustc_span`](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_span/index.html), [`rustc_errors`](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_errors/index.html), etc.

---
parent: [[./rustc architecture|rustc architecture]]
tags: #computer/compiler #computer/Rust/rustc