---
parent:
  - "[[logic|logic]]"
tags:
  - logic/property
aliases:
  - logically consistent
created: 2024-09-25
modified: 2024-11-22
publish: true
---
A set of [[well-formed formula|formulas]] is **logically consistent** if there is no proof of [[./contradiction|contradiction]] from these formulas.

In other word, a set $\Gamma$ of formulas is *inconsistent* iff we can derive a contradiction from it in the [[./proof system|proof system]]: $\Gamma \vdash \bot$, where $\bot$ represents a contradiction.

## Relation with Satisfiability

Note that consistency is defined syntactically, which is different from [[satisfiability|satisfiability]], which is a semantic property. In [[./propositional logic|propositional logic]] and [[predicate logic|first-order logic]], the two notions are equivalent because the logic is [[./soundness (formal system)|sound]] and [[./completeness|complete]]. But for other logics, this may not be the case. [^1]


[^1]: [logic - Difference between consistency and satisfiability - Mathematics Stack Exchange](https://math.stackexchange.com/questions/3229498/difference-between-consistency-and-satisfiability)