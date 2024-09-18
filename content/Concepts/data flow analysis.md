---
aliases:
  - data flow
created: 2023-05-30
modified: 2024-03-30
publish: true
tags:
  - computer/compiler/optimizations
---

# Data Flow Analysis
The data flow framework:
1.  Figure out the thing you want to know at the entry and exit of a block
2.  Write an equation for every block relating the entry to the exit
3.  Add equalities according to the edges in the CFG
4.  Solve the system of equations

Data flow analysis can be used to solve the [[./reaching definition|reaching definition]] problem.

## Worklist Algorithm

Given a CFG, an initial value `init`, and functions `merge` and `transfer`

```python
in[entry] = init
out[*] = init

worklist = all blocks
while worklist is not empty:
    b = pick any block from worklist
    in[b] = merge(out[p], for every predecessor p of b)
    out[b] = transfer(b, in[b])
    if out[b] changed:
        worklist += successors of b
```

That's the "forward" version. For the "backward" verion, reverse predecessors and successors, and reverse `in` and `out`.

## Requirements for Data Flow Analyses

Monotonicity: The values have to go only "in one direction"
-   If the values are sets, for example, you can either only add things or only remove things. But not both.
-   Worklist algorithm will only terminate under this requirement