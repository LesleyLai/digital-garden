---
created: 2024-08-16
modified: 2024-09-18
parent:
  - "[[propositional logic|propositional logic]]"
publish: true
tags:
  - logic/propositional
---
Two propositions are **logically equivalent** if they share the same truth value across all possible scenarios.

> [!info] Not to be confused with [[./equivalence relation|equivalence relation]] and [[./logical biconditional|logical biconditional]]

## Common Logical Equivalences

| Equivalence                                                                                                               | Name                                  |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| $p \wedge \top \equiv p$<br>$p \vee \bot \equiv p$                                                                        | Identity Law                          |
| $p \vee \top \equiv \top$<br />$p \wedge \bot \equiv \bot$                                                                | Domination laws                       |
| $p \land p \equiv p$<br>$p \lor p \equiv p$                                                                               | Idempotent or tautology laws          |
| $\neg (\neg p) \equiv p$                                                                                                  | Double Negation                       |
| $p \vee q \equiv q \vee p$<br />$p \wedge q \equiv q \wedge p$                                                            | [[commutativity\|Commutative laws]]   |
| $(p \vee q) \vee r \equiv p \vee (q \vee r)$<br />$(p \wedge q) \wedge r \equiv p \wedge (q \wedge r)$                    | [[associativity\|Associative laws]]   |
| $p \vee (q \wedge r) \equiv (p \vee q) \wedge (p \vee r)$$p \wedge (q \vee r) \equiv (p \wedge q) \vee (p \wedge r)$      | [[distributivity\|Distributive laws]] |
| $\begin{align}\lnot (p \land q) &\equiv \lnot p \lor \lnot q \\\lnot (p \lor q) &\equiv \lnot p \land \lnot q\end{align}$ | [[./De Morgan's laws|De Morgan's laws]]                  |
| $p \vee (p \wedge q) \equiv p$<br />$p \wedge (p \vee q) \equiv p$                                                        | [[Absorption laws|Absorption laws]]                   |
| $p \vee \neg p \equiv \top$<br>$p \wedge \neg p \equiv \bot$                                                              | Negation laws                         |
[^1]
## Relationship with Biconditional
See: [[./logical biconditional|logical biconditional]]

When $P$ and $Q$ are logical equivalent, the biconditional $P \leftrightarrow Q$ is always true (a [[tautology|tautology]]).

[^1]: [Logical equivalence - Wikipedia](https://en.wikipedia.org/wiki/Logical_equivalence)