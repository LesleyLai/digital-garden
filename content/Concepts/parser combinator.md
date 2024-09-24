---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# Parser Combinator
A **parser combinator** is a higher order function that accepts parsers as input and outputs another parser. And in this context, a parser is a function that accept a string and return some structure like an [[./abstract syntax tree|AST]].

Parser combinators use a top-down [[recursive descent parsers|recursive descent parsing]] strategy.

The advantage of parser combinators is that the result code is succinct, declarative, and closely related to the [[formal grammar|formal grammar]]. Each functions of a parser combinator can also be tested in isolation.[^1]

---
tags: #computing/AlgorithmsAndDataStructures/parsing 

[^1]: [[Error recovery with parser combinators (using nom)|Error recovery with parser combinators (using nom)]]