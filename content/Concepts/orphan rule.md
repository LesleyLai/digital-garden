---
aliases:
  - Rust trait coherence
created: 2024-01-15
modified: 2024-03-14
parent:
  - "[[Rust Traits|Rust Traits]]"
publish: true
tags:
  - computing/Rust/generic
  - "#stub"
---

The **orphan rule** mandates that you cannot implement an external trait for an external type. This is to prevent potential conflicts in implementations from different crates.

## See Also
- [[./Rust extension traits|Extension Traits]]

## References
- [Coherence - talk by withoutboats](https://www.youtube.com/watch?v=AI7SLCubTnk&t=43m19s)
- [Little Orphan Impls](https://smallcultfollowing.com/babysteps/blog/2015/01/14/little-orphan-impls/)
- [RFC 1023 Rebalancing Coherence](https://rust-lang.github.io/rfcs/1023-rebalancing-coherence.html)
- [Type classes: confluence, coherence and global uniqueness](http://blog.ezyang.com/2014/07/type-classes-confluence-coherence-global-uniqueness/)