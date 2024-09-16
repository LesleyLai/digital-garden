---
aliases:
  - Return-Position impl Trait
  - Rust impl Trait in return position
  - Rust return closure
  - Rust Abstract Return Type
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[Rust Traits|Rust Traits]]"
publish: true
tags:
  - "#computer/Rust/generic"
---

# Rust Return Position-impl Trait

Similar to [[./cpp-concepts|C++'s constrained return]], Rust functions can use `impl Trait` to return an "abstract" return type. This **Return Position-impl Trait** enable us to return closures as unnamed type in Rust.
```rust  
fn f(a: f32) -> impl Fn(f32) -> f32 {
  let x = heavy_calculation(a);  
  move |b| { x + b }
}
```

Similarly, the concrete type of [[./Rust iterator|iterators]] can get ugly really fast, so this feature can also be useful.

> [!note] Return Position-impl Trait doesn't make the function generic
> Unlike [[./Rust Argument-Position Impl Trait|Argument Position-Impl Trait]], Return Position-impl Trait just makes the return type opaque/unnamable.
> 
> For example, the following code **would not work** without boxing
> ```rust
> fn returns_summarizable(switch: bool) -> impl Summary
> {
>   if switch {
>     NewsArticle { ... }
>   } else {
>     Tweet { ... } // Can't return a different type!
>   }
> }
> ```

> [!note] Difference from C++/D's returning [[voldemort type|voldemort type]]
> Unlike languages like C++ and D, we can't use the concrete types with Rust's return position-impl trait.
> 
> For example, the following code **will not compile** because the compiler only know `s2` as *some* type that implement `Display`, and we can't use string method like `.push_str` on it.
> ```rust
> use std::fmt::Display;
> 
> fn displayable<T: Display>(t: T) -> impl Display { t }
> 
> fn main() {
>   let s = String::from("hello");
>   let mut s2 = displayable(s);
>   s2.push_str(" world");
>   println!("{s2}");
> }
> ```

## Related
- [[Rust Fn Traits|Rust Fn Traits]]

## References
- [Impl trait type - The Rust Reference](https://doc.rust-lang.org/reference/types/impl-trait.html#abstract-return-types)