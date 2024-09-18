---
aliases:
  - Rust partial borrowing
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[Rust|Rust]]"
publish: true
tags:
  - computer/Rust
---

# Borrow Splitting

**Borrow splitting**, or **partial borrowing**, is the situation where we try to partially mutably borrow different part of a structure. This is a useful pattern but the borrow checker won't allow it to happen.

> [!example]+
> ```rust
> struct Point {
>     x: i32,
>     y: i32, 
> }
> 
> impl Point {
>     pub fn x_mut(&mut self) -> &mut i32 {
>         &mut self.x
>     }
> 
>     pub fn y_mut(&mut self) -> &mut i32 {
>         &mut self.y
>     }
> }
> ```
> This is a classic example with mutators. The above code works fine, but once we try to do the following, we get an error:
> ```rust
> // this doesn't work
> impl Point {
>     pub fn calculate(&mut self) -> i32 {
>         let x = self.x_mut();
>         let y = self.y_mut();
>         
>         // Can't mutably borrow self twice
>         *x * *y
>     }
> }
> ```
> However, if we didn't have those accessors, the following code works just fine:
> ```rust
> fn calculate(x: &mut i32, y: &mut i32) -> i32 {
>     *x * *y
> }
> 
> let answer = calculate(&mut point.x, &mut point.y);
> ```

Rust doesn't have a way to say in signature that a reference will only mutate part of an object (and how will it look anyway?). And as a result, this is an unsolved problem in Rust.

## References
- [[Rust's Golden Rule|Rust's Golden Rule]]