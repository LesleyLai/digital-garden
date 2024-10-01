---
aliases:
  - extends external traits in Rust
created: 2024-04-22
modified: 2024-05-05
parent:
  - "[[Rust Traits|Rust Traits]]"
publish: true
tags:
  - computing/Rust/traits
title: Extension Trait in Rust
---
We can't add "extension methods" to external struct or traits because of Rust's [[./orphan rule|orphan rule]].

For example, say we want to add additional methods to `insta::Settings`, an external type, we can't do it directly. But we can create another trait:

```rust
trait InstaSettingsExt {  
    fn add_sha1_filter(&mut self);  
}  
  
impl InstaSettingsExt for insta::Settings {  
    fn add_sha1_filter(&mut self) {  
        self.add_filter(r"\b[[:xdigit:]]{40}\b", "[sha1]");  
    }  
}
```

The same way works for additional traits too
```rust
```rust
trait IteratorExt {
  fn my_extension(self) -> Self;
}

impl<T: Iterator> IteratorExt for T {
  fn my_extension(self) -> Self {
    println!("Hey, it worked!");
    self
  }
}
```
```