---
aliases:
  - Pratt parser
  - top down operator precedence parsing
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# Pratt Parsing

**Pratt parsing** (top down operator precedence parsing) uses the idea of "binding power" to handle operator precedence levels and associativity.

Comparing to encoding operator precedence in [[formal grammar|grammar]] and uses [[recursive descent parsers|recursive descent]], Pratt parser uses significant less recursion. Another important difference is that recursive descent parser associate semantic actions with grammar, while Pratt parsing associate actions with tokens. [^2]

[[Matklad|Matklad]] stated that Pratt Parsing and the [[shunting yard algorithm|shunting yard algorithm]] are essentially the same algorithm [^1] The main difference is that Pratt Parsing uses recursion while Shunting Yard keeps an explicit stack.

## Binding Power
TODO
![[../assets/bind power.png|bind power.png]]

## References
- [Pratt Parsing Index and Updates](https://www.oilshell.org/blog/2017/03/31.html)
- [Review of Pratt/TDOP Parsing Tutorials](https://www.oilshell.org/blog/2016/11/02.html)
- [[Crafting Interpreters#Chapter 17 Compiling Expressions|Crafting Interpreters > Chapter 17 Compiling Expressions]]

---
parent: [[./operator precedence parser|operator precedence parser]]
tags: #computing/AlgorithmsAndDataStructures/parsing


[^1]: [From Pratt to Dijkstra](https://matklad.github.io/2020/04/15/from-pratt-to-dijkstra.html)
[^2]: - [Top-Down operator precedence parsing - Eli Bendersky's website](https://eli.thegreenplace.net/2010/01/02/top-down-operator-precedence-parsing)