---
aliases:
  - "#computing/compiler/optimizations"
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#computing/compiler/optimizations"
---
# Compiler Optimizations
## Categories
- *Local optimization* works on a single [[./basic blocks|basic blocks]], and does not deal with [[./control flow graph|control flow]]
- *Global optimization* works with a single function, and deal with control flow
  - Dealing with control flow makes optimization much more complicated
- *Interprocedural optimization* that deals with multiple functions

Local/global optimizations are also called *intraprocedural optimization*

## Concepts
- [[IR|IR]]
- [[./basic blocks|basic blocks]]
- [[./control flow graph|control flow]]
- [[./local value numbering|local value numbering]]
- [[./static-single assignment|SSA]]
- [[./variable liveness|variable liveness]]
## Techniques
- [[./chain of recurrences|chain of recurrences]]
- [[./dead code elimination|dead code elimination]]
- [[./data flow analysis|data flow analysis]]