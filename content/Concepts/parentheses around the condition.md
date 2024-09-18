---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

tags: #computer/PL/syntax #computer/AlgorithmsAndDataStructures/parsing 
parent: [[./conditional expression|if expression]]

---
# Parentheses Around the Condition

To disambiguous parsing of if expression, some delimitator need to be added between `if` and condition. Different languages uses different solutions. Most C-style languages require parenthesis around condition like this
```c
if (cond) block;
```
Even though the first `(` is not useful.

Alternatively, languages like [[go|go]] or [[./Rust|Rust]] requires braces around statements.
```rust
if cond { statements; }
```

And some other languages like ML or [[./Python|Python]] requires a `then` keyword or some other delimitator token.
```ocaml
if cond then e1 else e2
```

## References
- [[Crafting Interpreters#Chapter 9: Control flow|Crafting Interpreters chapter 9]]