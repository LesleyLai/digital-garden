---
parent:
  - "[[compiler IR|compiler IR]]"
tags:
  - computing/compiler/IR
  - computing/compiler/optimizations
created: 2025-03-26
modified: 2025-03-26
publish: true
---
**Sea of nodes** is a graph representation of [[./static-single assignment|static-single assignment]] of a program that combines [[./data flow analysis|data flow]] and [[./control flow graph|control flow]], and relaxes the control flow from a [[total order|total order]] to a [[partial order|partial order]], keeping only the orderings required by data flow. [^2]

The [[V8 JavaScript engine|V8 JavaScript engine]] was once notable for being one of the few large-scale compilers utilizing the sea of nodes approach. However, it has since transitioned to a more traditional [[./control flow graph|CFG]] IR, citing reasons such as the sea of nodes being too complex, too limited, and too slow for compilation [^1].

> [!quote] in a way, **SoN is just CFG where pure nodes are floating** [^1]


[^1]: [Land ahoy: leaving the Sea of Nodes · V8](https://v8.dev/blog/leaving-the-sea-of-nodes)
[^2]: [Sea of nodes - Wikipedia](https://en.wikipedia.org/wiki/Sea_of_nodes)