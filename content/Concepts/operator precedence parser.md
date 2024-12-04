---
created: 2023-05-30
modified: 2024-12-04
parent:
  - "[[parsing|parsing]]"
publish: true
tags:
  - computing/parsing
aliases:
  - operator precedence parsing
---
**Operator precedence parsing** refers to a family of parsing techniques used to handle expressions containing operators with different precedence and associativity. Notable algorithms in this family include:
- [[Pratt parsing|Pratt parsing]]
- [[shunting yard algorithm|shunting yard algorithm]]
- [[precedence climbing|precedence climbing]]
These algorithms share similarities and can be considered variations of the same fundamental approach with different formulations and implementations. [^1] [^2]

## Motivation

We can describe the structure of our language using [[./context-free grammar|context-free grammar]] (often using [[BNF|BNF]] notation) and parse it with [[recursive descent parsers|recursive descent parsers]]. However, for infix operators, this approach can be really cumbersome. Consider the following grammar:
```text
Expr ::=
    Expr '+' Expr
  | Expr '*' Expr
  | '(' Expr ')'
  | 'number'
```
This grammar is ambiguous to parse, as it doesn't express the precedence and [[associativity|associativity]] of the operators. We can fix the grammar with the following change:
```text
Expr ::=
    Factor
  | Expr '+' Factor

Factor ::=
    Atom
  | Factor '*' Atom

Atom ::=
    'number'
  | '(' Expr ')'
```

This can quickly become unwieldy with more operators and more complicated precedence rules. The above fix also haven't address the issue that some of the non-terminal in the grammar is [[./left recursion|left recursive]], which can cause trouble for pure recursive-descent parsing [^3].


[^1]: [From Pratt to Dijkstra](https://matklad.github.io/2020/04/15/from-pratt-to-dijkstra.html)
[^2]: [Pratt Parsing and Precedence Climbing Are the Same Algorithm](https://www.oilshell.org/blog/2016/11/01.html)
[^3]: [Simple but Powerful Pratt Parsing](https://matklad.github.io/2020/04/13/simple-but-powerful-pratt-parsing)