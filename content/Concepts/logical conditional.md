---
aliases:
  - logical implication
  - material conditional
  - material implication
created: 2024-08-01
modified: 2024-09-25
parent:
  - "[[logical connective|logical connective]]"
publish: true
tags:
  - logic/propositional
---
**Material Conditional**, or **material implication** has a truth table is the following:

| $A$ | $B$ | $A \to B$ |
| --- | --- | --------- |
| T   | T   | T         |
| T   | F   | F         |
| F   | T   | T         |
| F   | F   | T         |
The notation for conditional is $A \to B$, and alternative notations $A \supset B$ and $A \Rightarrow B$ is also used.

## Definition via Negation and Disjunction
We can define material conditional with [[negation|negation]] and [[disjunction|disjunction]]. $A \to B$ is [[./logical equivalence|logical equivalent to]] $\lnot A \lor B$.

## Relation with Natural Language
See: [[logic and natural language|logic and natural language]]
For a sentence "if A then B", we can translate it as $A \to B$. For "A if B," we translate it as $B \to A$. Interestingly, for "A only if B", we translate it as $A \to B$.

However, there are some semantic difference between natural languages and conditional. In particular, $\alpha \to \beta$ is automatically true if the antecedent $\alpha$ is false or the consequent $\beta$ is true. This can be surprising if we understand conditional as "if ... then ..." in English.