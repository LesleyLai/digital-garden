---
created: 2023-05-31
modified: 2024-03-27
parent:
  - "[[abstract syntax tree|AST]]"
publish: true
tags:
  - "#computing/algorithms/AST"
  - "#computing/PL/syntax"
---
There are several ways to have typed information to AST [^typed]:
- mutable AST (with optional type field later field)
- having a separated typed AST
- generic AST
- relational AST (akin to a [[relational model|relational database]] or in [[data oriented design|data oriented design]])

Here is various pages describing AST representation in production systems:
- [Persistence, façades and Roslyn’s red-green trees | Fabulous adventures in coding](https://ericlippert.com/2012/06/08/red-green-trees/)
- [rust-analyzer/syntax.md](https://github.com/rust-lang/rust-analyzer/blob/master/docs/dev/syntax.md)
- [Swift Syntax and Structured Editing Library](https://github.com/apple/swift/tree/5e2c815edfd758f9b1309ce07bfc01c4bc20ec23/lib/Syntax)

The following articles also provide good information on AST representation
- [[Resilient LL Parsing Tutorial|Resilient LL Parsing Tutorial]]

[^typed]: [How to store types after Semantic Analysis](https://btmc.substack.com/p/how-to-store-types-after-semantic) ([['How to Store Types After Semantic Analysis' note|note]])