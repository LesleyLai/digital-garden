---
parent:
  - "[[normal forms (logic)|normal forms (logic)]]"
tags:
  - logic/propositional
  - logic/NormalForm
aliases:
  - clausal normal form
  - clausal form
  - clause (logic)
  - product of sums
  - AND of ORs
created: 2025-01-05
modified: 2025-01-05
publish: true
---
A formula of [[./propositional logic|propositional logic]] is in **conjunctive normal form** or **clausal normal form** (**CNF**) if it is a [[conjunction|conjunction]] of one or more _clauses_, where a clause is a [[disjunction|disjunction]] of [[literal (logic)|literals]]. It is also sometimes called **product of sums** and **AND of ORs**.

CNF enables a powerful [[resolution (logic)|resolution]] rule of inference, and this is widely used in [[automatic theorem proving|automatic theorem proving]] and [[SAT solver|SAT solver]].

## Clause
A [[literal (logic)|literals]] is either an atomic sentence or a [[negation|negation]] of an atomic sentence:
$$
\begin{gather*}
p \\
\lnot p
\end{gather*}
$$
A *clause* is a set of literals. For example:
$$
\begin{gather*}
\{p\} \\
\{\lnot p\} \\
\{\lnot p,\ q \}
\end{gather*}
$$
A clause is interpreted as a disjunction of its elements. For example, $\{\lnot p,\ q \}$ is interpreted as $\lnot p \lor q$.

Note that the empty set $\emptyset$ is also a clause. It is equivalent to an empty disjunction and, therefore, is [[./satisfiability|unsatisfiable]].

## See Also
- [[resolution (logic)|resolution]]

## References
- [Introduction to Logic - Chapter 6](http://intrologic.stanford.edu/chapters/chapter_06.html)