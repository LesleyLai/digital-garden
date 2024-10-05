---
parent:
  - "[[logic|logic]]"
tags:
  - logic/propositional
created: 2024-10-04
modified: 2024-10-05
publish: true
---
In [[./propositional logic|propositional logic]], a **truth table** serves two purposes: defining [[./logical connective|logical connectives]] and testing [[./valid argument|validity of arguments]].

## Testing Validity with a Truth Table
We can constructing a truth table that includes all possible combinations of basic [[./proposition|propositions]]. By examining the truth table, we can determine if there is any row where the premises are all true, but the conclusion is false.

This can be view as a form of [[model checking|model checking]].

> [!example]-
> For example, if we have an argument as the following:
> $$
\begin{prooftree} 
\noLine \AXC{L $\lor$ R}
\UIC{L}
\UIC{$\lnot$ R}
\end{prooftree}
> $$
> We can create a truth table as the following:
> $$
\begin{array}{ll|l|l|l}
L & R & L \vee R & L & \neg R \\ \hline
\text { T } & \text { T } & \text { T } & \text { T } & \text { F } \\
\text { T } & \text { F } & \text { T } & \text { T } & \text { T } \\
\text { F } & \text { T } & \text { T } & \text { F } & \text { F } \\
\text { F } & \text { F } & \text { F } & \text { F } & \text { T }
\end{array}
> $$
> From the first row of the truth table, we observe that it is possible for all premises to be true while the conclusion is false. Therefore, the argument is invalid.

Testing validity using a truth table has some limitations. First, a large number of basic propositions can lead to [[combinatorial explosion|combinatorial explosion]] of rows, making truth table impractical. Second, truth tables are no longer sufficient for testing validity in [[predicate logic|predicate logic]], and other methods must be employed.