---
created: 2024-05-04
modified: 2024-05-04
parent:
  - "[[pl design|programming language design]]"
publish: true
tags:
  - "#computing/PL/interesting_features"
---

# Distinct Types
Certain programming languages, notably [[./Odin (programming langauge)|Odin]], has a **distinct types** feature to allow for the creation of a new type with the same underlying semantics

```odin
My_Int :: distinct int
#assert(My_Int != int)
```

## Related
- [[C++ strongly-typed alias|C++ strongly-typed alias]]
- [[./Rust newtype idiom|Rust newtype idiom]]