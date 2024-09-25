---
aliases:
  - logical operators
  - logical operator
  - logical connectives
  - truth functional connectives
created: 2024-08-01
modified: 2024-09-25
parent:
  - "[[./propositional logic|propositional logic]]"
publish: true
tags:
  - logic/propositional
---

| Connective                                            | Example               | Alternative Symbols                                         |
| ----------------------------------------------------- | --------------------- | ----------------------------------------------------------- |
| [[negation\|Negation]]                                | $\neg P$              | $\sim P \quad  - P \quad \bar{P} \quad \text { NOT } P$     |
| [[disjunction\|Disjunction]] (or)                     | $P \lor Q$            | $P \text { OR } Q$                                          |
| [[conjunction\|Conjunction]] (and)                    | $P \land Q$           | $P \& Q \quad P \cdot Q \quad P\,Q \quad P \text { AND } Q$ |
| [[./logical conditional\|Conditional]] (implies)        | $P \to Q$             | $P \supset Q \quad P \Rightarrow Q$                         |
| [[./logical biconditional\|Biconditional]] (equivalent) | $P \leftrightarrow Q$ | $P \equiv Q  \quad P \Leftrightarrow Q$                     |
| [[./exclusive or\|Exclusive Or]]                        | $P \oplus Q$          | $P \text { XOR } Q$                                         |

## Order of Precedence and Associativity
Both conjunction and disjunction are [[associativity|associative]], so we can write something like $P_1 \land P_2 \land P_3$ without parentheses and don't need to worry about ambiguity.

To further reduce the number of necessary parentheses, some sources introduce [[operator precedence|precedence rules]] for connectives. For the big 5 connectives in [[./propositional logic|propositional logic]], we can define precedence and associativity as follows, with operators at the top having higher precedence

| Operator          |
| ----------------- |
| $\neg$            |
| $\land$           |
| $\lor$            |
| $\to$             |
| $\leftrightarrow$ |

Some sources also define $\to$ and $\leftrightarrow$ as right associative. So, for example, $p \to q \to r$ is the same as $(p \to (q \to r))$.

## Truth Functional Connectives
A connective is **truth functional** if the truth-value of the compound proposition is entirely determined by the truth values of component propositions.

All the above connectives are truth functional. But we can have non-truth functional connectives if we use casual English. For example, unlike $P \to Q$, the English sentence "if $P$ then $Q$" does not have a true/false value when $P$ is false.

## See Also
- [[Boolean algebra|Boolean algebra]]