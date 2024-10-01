---
created: 2024-04-25
modified: 2024-05-17
parent:
  - "[[pl design|pl design]]"
  - "[[my opinions|my opinions]]"
publish: true
tags:
  - opinion
  - computing/PL/syntax
---

# On "Viral Annotations"
"**Viral annotations**" can be seen to as magical solutions to a lot of problems, but it is often frowned upon by PL designers. A major problem is that they need to be annotated bottom-up for every functions in a calling tree.

Examples:
- C++ `constexpr`, `noexcept`
- CUDA `__device__`
- Rust [[../Concepts/Rust lifetime|lifetime]], `const`, `async`
- Others (often in compiler extensions): "pure function", "don't lock", "don't panic"

Sometimes compilers can infer those annotations, but often not across compilation boundaries.

## Solutions to Issues
### Compiler Inferences
Rust Lifetimes can often be inferred. It is far from a perfect solution, but is much better than explicitly writing everything.

### Escape Hatch
E.g. Rust's `unsafe` is somewhat viral but you can use an `unsafe` block in a "safe" function.

## Related
- [[attribute syntax|attribute syntax]]
- [[effect system|effect system]]