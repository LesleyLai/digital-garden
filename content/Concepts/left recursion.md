---
aliases:
  - left recursive
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - computing/AlgorithmsAndDataStructures/parsing
---

In [[./context-free grammar|context-free grammar]], a [[nonterminal symbol|nonterminal]] is **left recursive** if the left-most symbol of one of its productions is itself.

> [!example]+ Example: direct left-recursion
> $$
> A ::= A \ a
> $$

> [!example]+ Example: indirect left-recursion
> $$
> \begin{aligned}
> A_0 &::= A_1 \ a\\
> A_1 &::= A_0 \ a
> \end{aligned}
> $$

[[recursive descent parsers|recursive descent parsers]] cannot handle grammar with left recursion but we can transform the grammar to eliminate left recursion. However, this will either introduce right associativity or complicate the grammar. [^1]


[^1]: [[Some problems of recursive descent parsers|Some problems of recursive descent parsers]]