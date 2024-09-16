---
aliases:
  - logical operators
  - logical operator
  - logical connectives
  - truth functional connectives
created: 2024-08-01
modified: 2024-08-07
parent:
  - "[[propositional logic|propositional logic]]"
publish: true
tags:
  - logic/propositional
---

# Logical Connective

| Connective                                            | Example               | Alternative Symbols                                         |
| ----------------------------------------------------- | --------------------- | ----------------------------------------------------------- |
| Negation                                              | $\neg P$              | $\sim P \quad  - P \quad \bar{P} \quad \text { NOT } P$     |
| Disjunction (or)                                      | $P \lor Q$            | $P \text { OR } Q$                                          |
| Conjunction (and)                                     | $P \land Q$           | $P \& Q \quad P \cdot Q \quad P\,Q \quad P \text { AND } Q$ |
| [[./logical conditional\|Conditional]] (implies)        | $P \to Q$             | $P \supset Q \quad P \Rightarrow Q$                         |
| [[./logical biconditional\|Biconditional]] (equivalent) | $P \leftrightarrow Q$ | $P \equiv Q  \quad P \Leftrightarrow Q$                     |
| [[./exclusive or\|Exclusive Or]]                        | $P \oplus Q$          | $P \text { XOR } Q$                                         |

## Truth Functional Connectives
A connective is **truth functional** if the truth-value of the compound proposition is entirely determined by the truth values of component propositions.

All the above connectives are truth functional. But we can have non-truth functional connectives if we use casual English. For example, unlike $P \to Q$, the English sentence "if $P$ then $Q$" does not have a true/false value when $P$ is false.

## See Also
- [[Boolean algebra|Boolean algebra]]