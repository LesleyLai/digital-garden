---
created: 2024-02-04
modified: 2024-03-14
parent:
  - "[[Rust references|Rust references]]"
publish: true
tags:
  - computing/Rust
---

# Rust Disallow Simultaneous Aliasing and Mutation
Combining aliasing and mutation can cause some trouble
- If an aliased data got deallocated, we have dangling
- By mutating the aliased data can invalidate runtime properties expected by the other variables
- [[./synchronization quadrant|concurrency access for shared mutable data can cause data race]]

Rust decides to ban all simultaneous aliasing and mutation without use extra tools such as [[./Rust interior mutability|interior mutability]]. That is why Rust's mutable references (also called exclusive references) are mutually exclusive to immutable references (also called shared references).