---
created: 2023-05-30
modified: 2024-03-30
publish: true
tags:
  - computer/compiler/optimizations
---

# Reaching Definition
In compiler optimization, a instruction $d$ defining a variable $v$ *reaches* an instruction $u$ **iff** $\exists$ a path in the [[./control flow graph|CFG]] from $d$ to $u$, where, along that path, there are no other assignments to $v$.

Some terminologies:
-   **use**: An instruction uses all of its arguments
-   **definition**: An instruction defines the variable it writes to
-   **available**: Definitions that reach a given program point are available there
-   **kill**: Any definition kills all of the currently available definitions

The **reaching definitions** problem: For every definition and every use, determine whether the definition reaches the use.