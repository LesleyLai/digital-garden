---
created: 2024-01-15
modified: 2024-04-22
parent:
  - "[[Rust|Rust]]"
publish: true
tags:
  - computer/Rust/generic
  - "#computer/Rust/traits"
---

# Rust Traits
A Rust trait defines functionality of a set of types that implements the trait.

## Define Traits
We can define new traits with the `trait` keyword
```rust
pub trait Summary {
    fn summarize(&self) -> String;
}
```

## Implement Traits
Traits are implemented for types using the `impl Trait for Type` syntax:
```rust
pub struct NewsArticle {
    pub headline: String,
    pub location: String,
    pub author: String,
    pub content: String,
}

impl Summary for NewsArticle {
  fn summarize(&self) -> String {
      format!("{}, by {} ({})", self.headline, self.author, self.location)
  }
}
```

And then we can just call trait methods like normal methods. E.g. `article.summarize()`.

We can't implement _external traits_ for _external types_ because of Rust traits' [[./orphan rule|orphan rule]]. Though we can use [[./Rust extension traits|extension traits]] to achieve the same effect.

## Default Implementations
   We can also provides a default implementation for a trait:
 ```rust
pub trait Summary {
    fn summarize(&self) -> String {
        String::from("(Read more...)")
    }
}
```

A default implementation can call other method in the same trait, even for those methods which does not have a default implementation.

## Traits as Parameters
See: [[./Rust Argument-Position Impl Trait|Argument-Position Impl Trait]]

We can also pass traits as a parameter to functions:
```rust
pub fn notify(item: &impl Summary) {
    println!("Breaking news! {}", item.summarize());
}
```

The above syntax is a shorthand for the _Trait bound_ syntax:
```rust
   pub fn notify<T: Summary>(item: &T) {
       println!("Breaking news! {}", item.summarize());
   }
```

We can also combine multiple traits with `+`:
```rust
   pub fn notify(item: &(impl Summary + Display)) {
```
or
```rust
   pub fn notify<T: Summary + Display>(item: &T) {
```

### Where Syntax
`where` syntax can make function signature clearer when there are a lot of trait bound.

Instead of writing something like
```rust
fn some_function<T: Display + Clone, U: Clone + Debug>(t: &T, u: &U) -> i32 {
```
we can write
```rust
fn some_function<T, U>(t: &T, u: &U) -> i32
       where T: Display + Clone,
             U: Clone + Debug
   {
```

## Returning Types that Implement Traits
See: [[./Rust Return-Position impl Trait|Return-Position impl Trait]]

We can use `impl trait` in return position to return a value of some type that implement a trait:
```rust
```rust
fn returns_summarizable() -> impl Summary {
  Tweet { ... }
}
```

## Use Trait Bound to Conditionally Implement Methods
Just like C++ concept, we can use trait bound to conditionally implement methods:
```rust
struct Pair<T> {
    x: T,
    y: T,
}

impl<T> Pair<T> {
    fn new(x: T, y: T) -> Self {
        Self { x, y }
    }
}

impl<T: Display + PartialOrd> Pair<T> {
    fn cmp_display(&self) {
        if self.x >= self.y {
            println!("The largest member is x = {}", self.x);
        } else {
            println!("The largest member is y = {}", self.y);
        }
    }
}
```

## References
 - [Traits: Defining Shared Behavior - The Rust Programming Language](https://rust-book.cs.brown.edu/ch10-02-traits.html)