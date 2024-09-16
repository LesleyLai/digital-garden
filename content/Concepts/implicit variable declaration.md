---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - computer/PL/syntax
---

# Implicit Variable Declaration
The **implicit variable declaration** semantics in [[./Python|Python]], [[Ruby|Ruby]], [[CoffeeScript|CoffeeScript]], and non-[[js strict mode|strict]] [[./JavaScript|JavaScript]] simplifies the language on surface but all at the end create ambiguities. It combines especially badly with [[block scope|block scope]].

At the end, languages with implicit variable declarations end up adding more complexity and features to compensate the ambiguity. For example, [[python global nonlocal|Python has global and nonlocal keywords]].

## References
- [[Crafting Interpreters#Chapter 8: Statements|Crafting Interpreters Chapter 8 Design Notes]]