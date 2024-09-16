---
aliases:
  - logical implication
created: 2024-08-01
modified: 2024-08-27
parent:
  - "[[logical connective|logical connective]]"
publish: true
tags:
  - logic/propositional
---

# Logical Conditional
**Logical Conditional**, or **implication** has a truth table is the following:

| $A$ | $B$ | $A \to B$ |
| --- | --- | --------- |
| T   | T   | T         |
| T   | F   | F         |
| F   | T   | T         |
| F   | F   | T         |

> [!info] $\alpha \to \beta$ is automatically true if the antecedent $\alpha$ is false or the consequent $\beta$ is true. This can be surprising if we understand conditional as "if ... then ..." in English.

$A \to B$ is [[./logical equivalence|logical equivalent to]] $\lnot A \lor B$.