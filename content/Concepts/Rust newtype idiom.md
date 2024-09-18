---
aliases:
  - newtype idiom
created: 2024-05-04
modified: 2024-06-10
parent:
  - "[[Rust|Rust]]"
publish: true
tags:
  - computer/Rust
---

In Rust, the **newtype idiom** wraps an underlying types with another type to enforce correct usage. E.g.
```rust
struct Years(i64);
struct Days(i64);

impl Days {
    /// truncates partial years
    pub fn to_years(&self) -> Years {
        Years(self.0 / 365)
    }
}
```

The newtype idiom can also be a useful way to circumvent the [[./orphan rule|orphan rule]].

## Conversions
see: [[./Rust conversions|Rust conversions]]

We can implement `From` or `TryFrom` to convert from primitives to newtype. And `AsRef` is useful to implement for code to consume new types as primitives.

## See Also
- [[./Typestate pattern in Rust|Typestate pattern in Rust]]

## Related Ideas in other Langauges
- C++ people talks about a similar "[[C++ strongly-typed alias|strongly-typed alias]]" idiom
- Programming languages like [[./Odin (programming langauge)|Odin]] has a "[[./distinct types|distinct types]]" feature
- [[primitive obsession|primitive obsession]]