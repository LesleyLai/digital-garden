---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[my opinions|my opinions]]"
publish: true
tags:
  - "#opinion"
---

Something like Rust's `pub(crate)` should be the default. Public APIs still need to be explicitly marked, but over-encapsulation in internal code is often unnecessary.

Relate to this blog post [The little things #1: Access control](https://chandlerc.blog/posts/little_things_1_access/) by [[Chandler Carruth|Chandler Carruth]], though my stance is somewhat different (I still don't want public by default, just "internally public" by default). I am uncertain about the "public APIs become noisy" argument in the post, as there are other things such as attribute syntax can also make public APIs noisy. Imo the solution of that problem should be documentation generation support.