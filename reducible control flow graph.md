---
parent:
  - "[[control flow graph|control flow graph]]"
tags:
  - stub
aliases:
  - reducible flow graph
---
A common problem of compiling arbitrary control-flow graph to [[./content/Concepts/webassembly|webassembly]] is that wasm only supports [[structured programming|structured control flows]]. The concept of reducibility is useful in this regard. For any reducible control flow graph, we can convert them directly to structured control flows. And for irreducible graph, there are algorithm to convert them into reducible graph.



See
- [Solving the structured control flow problem once and for all | by Yuri Iozzelli | leaningtech | Medium](https://medium.com/leaningtech/solving-the-structured-control-flow-problem-once-and-for-all-5123117b1ee2)
- [irreducible-control-flow-in-webassembly-by-conrad-watt.pdf](https://webengineshackfest.org/2021/slides/irreducible-control-flow-in-webassembly-by-conrad-watt.pdf)