---
aliases:
  - Rust Module System
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[Rust|Rust]]"
publish: true
tags:
  - computing/Rust
---

# Rust Module System

In Rust, subdirectory under `src/` become modules when they contain a `mod.rs` file. And modules can also be defined in a file with `mod` keyword. Rust modules can nest arbitrarily:
```rust
mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {}
    }
    mod serving {
        fn take_order() {}
    }
}
```

We can bring items from other modules into local scope by the `use` keyword.

All the modules in current crate has the root `crate`, and we can access modules with *absolute paths* such as `crate::front_of_house::hosting::add_to_waitlist`.

We can also refer to modules by *relative path*:
```rust
pub fn eat_at_restaurant() {
    // Relative path
    front_of_house::hosting::add_to_waitlist();
}
```

All members of a modules are private by default. Prefixing with a `pub` keyword explicitly make it public, and we can add options after `pub`:
- `pub(crate)`: public within [[Rust crate|Rust crate]]
- `pub(super)`: public within parent module
- `pub(in path)`: public within `path`
- `pub(self)`: explicitly private