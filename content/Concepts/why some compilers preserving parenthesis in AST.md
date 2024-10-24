---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[abstract syntax tree|AST]]"
publish: true
tags:
  - computing/compiler/frontend
  - computing/algorithms/AST
---
# Why Preserving Parenthesis in AST?

Even though we don't need parenthesis when evaluating an [[expression|expression]], they are useful to disambiguate in assignment when we have an [[lvalue|lvalue]]/rvalue situation:

```c
int x;
x = 1; // valid
(x) = 42; // invalid
```