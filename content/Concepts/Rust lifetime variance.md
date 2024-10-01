---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[Rust lifetime|Rust lifetime]]"
  - "[[covariance and contravariance|covariance and contravariance]]"
publish: true
tags:
  - "#computing/rust/lifetime"
  - "#computing/PL/covariance"
title: Lifetime Variance in Rust
---
In Rust, you can pass a `&'static str` to a function that accepts a `& 'a str`. 

The result is that we treat `'b` as a [[subtyping|subtype]] of `'a` if `'b` outlives `'a`. And in Rust, [[generic lifetime in Rust|generic lifetime]] in function parameters are contravariant, and generic lifetime in function return types are covariant.