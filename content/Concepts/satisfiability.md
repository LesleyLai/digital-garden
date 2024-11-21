---
parent:
  - "[[logic|logic]]"
tags:
  - logic/property
aliases:
  - satisfiable
  - unsatisfiable
created: 2024-10-04
modified: 2024-11-22
publish: true
---
A set of formulas is said to be **satisfiable** if there exists an [[interpretations (logic)|interpretations]] ([[model (logic)|model]]) that makes all the formulas in the set true simultaneously.

## Relation with Consistency

[[./logical consistency|Logical consistency]] is the property that there is no proof of [[./contradiction|contradiction]] from these formulas.

Note that consistency is defined syntactically, which is different from [[satisfiability|satisfiability]], which is a semantic property. In [[./propositional logic|propositional logic]] and [[predicate logic|first-order logic]], the two notions are equivalent because the logic is [[./soundness (formal system)|sound]] and [[./completeness|complete]]. But for other logics, this may not be the case. [^1]


[^1]: [logic - Difference between consistency and satisfiability - Mathematics Stack Exchange](https://math.stackexchange.com/questions/3229498/difference-between-consistency-and-satisfiability)
## See Also
- [[./propositional satisfiability problem|propositional satisfiability problem (SAT)]]
- [[./logical consistency|Logical consistency]]
