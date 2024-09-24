---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# Ref Keyword in Rust

The `ref` keyword in Rust bind a variable by reference during [[Rust pattern matching|pattern matching]].

Unlike `&`, which expect the pattern itself to be a reference, `ref` only bind the value *to* a reference.

`ref` on the left side of ` = ` is the same as `&` on the right.

``` rust
let ref x = 1;
let x = &1;
```

`&` on the left side of  ` = ` is the same as `*` on the right.

``` rust
let &y = x;
let y = *x;
```

---
tags: #computing/Rust/PatternMatching #computing/PL/PatternMatching