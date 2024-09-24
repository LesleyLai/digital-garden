---
created: 2023-05-30
modified: 2024-09-16
publish: true
tags:
  - computing/PL/syntax
---

# Why Some Grammar Distinguish Declarations with Statements?

Even though [[variable declaration|variable declaration]] can be considered [[statement|statement]] in the [[./abstract syntax tree|AST]], they are not valid in all places where statement can fit. For example, we don't want to use variable declaration as a branch in [[if statement|if statement]]:
```cpp
if (cond) int x = 5;
```
