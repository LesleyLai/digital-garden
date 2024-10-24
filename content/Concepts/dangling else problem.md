---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#computing/PL/syntax"
  - "#computing/algorithms/parsing"
parent:
  - "[[conditional expression|if expression]]"
---
For language supporting optional `else`, if we have code like the following:
```cpp
if (first) if (second) whenTrue(); else whenFalse();
```

Where does `else` belong to?

Most languages choose the `else` to belong to the closest `if`.

## References
- [[Crafting Interpreters#Chapter 9: Control flow|Crafting Interpreters chapter 9]]