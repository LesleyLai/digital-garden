---
created: 2024-01-08
modified: 2024-03-14
publish: true
tags:
  - computing/algorithms/parsing
---
## Characteristics
Restricting *heads* to a single symbol is a definite character of the context-free grammar. For more unrestricted grammar, the head can have multiple symbols. For example:
```
C -> A C A | B A // CFG

C D -> A C D A | B A // Not CFG
```