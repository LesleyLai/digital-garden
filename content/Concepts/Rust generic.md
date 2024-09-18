---
created: 2024-01-14
modified: 2024-03-14
parent:
  - "[[Rust|Rust]]"
publish: true
tags:
  - computer/Rust/generic
---

# Rust Generic

## In Function Definitions
We can parameterize types in functions, but we also needs to explicitly states the [[./Rust Traits|trait]] that a type need to support:

```rust
   fn largest<T: PartialOrd + Copy>(list: &[T]) -> T {
       let mut largest = list[0];

       for &item in list {
           if item > largest {
               largest = item;
           }
       }

       largest
   }
```

In the above example, we need `std::cmp::PartialOrd` for comparison and `std::marker::Copy` for `let mut largest = list[0]`.
## In Struct/Enum Definition
We can provide type parameters for `struct`, and `struct` initialization can infer type parameters

```rust
struct Point<T> {
    x: T,
    y: T,
}
fn main() {
    let integer = Point { x: 5, y: 10 };
    let float = Point { x: 1.0, y: 4.0 };
}
```

And we can do exactly the same thing for `enum`.

## In Method Definition
We can also implements methods for generic types.
```rust
impl<T> Point<T> {
    fn x(&self) -> &T {
        &self.x
    }
}
```

But we can also only implement method for specific instance of a generic type:
```rust
impl Point<f32> {
    fn distance_from_origin(&self) -> f32 {
        (self.x.powi(2) + self.y.powi(2)).sqrt()
    }
}
```

We also can provide additional type parameters to individual methods that are not in the generic type:
```rust
struct Point<T, U> {
    x: T,
    y: U,
}

impl<T, U> Point<T, U> {
    fn mixup<V, W>(self, other: Point<V, W>) -> Point<T, W> {
        Point {
            x: self.x,
            y: other.y,
        }
    }
}
```