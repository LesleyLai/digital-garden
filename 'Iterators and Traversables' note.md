---
create: 2024-03-15
tags:
  - Literature/articles
  - computing/Rust/iterator
  - "#computing/design_patterns/iterator"
link: https://without.boats/blog/iterators-and-traversables/
author:
  - without.boats
---
# Iterators and Traversables

The article argues that there are two kind of abstractions that we call "[[./content/Concepts/Iterator Pattern|iterators]]" in languages like Rust. There are
- Iterators: a state machine that yields values one after another
- Traversables: enables traversing through a number of values in any manner

Traversables including things such as [[rayon-rs|Rayon]]'s `ParallelIterator`. The author argue that those two interfaces should have different signature.

## Highlights
- The difference in affordance between `Iterator` and traversables more broadly is of course that you know iterators will yield up their values “one after another.” ([View Highlight](https://read.readwise.io/read/01hry4zpmqyfc2fr1b3k73dx85))

## Related
- [[./content/Concepts/external vs internal iteration|external vs internal iteration]]