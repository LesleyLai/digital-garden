---
parent:
  - "[[logic|logic]]"
tags:
  - logic/FormalSystem
created: 2024-09-27
modified: 2025-01-06
publish: true
aliases:
  - complete system
  - refutation-complete
---
A [[./formal system|formal system]] is **complete** if we can prove all things right. This is in contrast with [[./soundness (formal system)|soundness]], which is the property that you can prove all things wrong.

More formally, a proof system is _complete_ if and only if every logical conclusion is provable. In other words, if  $\Delta \vDash \varphi$, then $\Delta \vdash \varphi$.

## Forms of Completeness
### Refutation-completeness
A formal system $\mathcal{s}$ is **refutation-complete** if it is able to derive false from every [[./satisfiability|unsatisfiable]] set of formulas:
$$
\Delta \vDash_\mathcal{s} \bot \to \Delta \vdash_\mathcal{s} \bot
$$
Every complete system is refutation-complete, but the opposite is not true. However, we can change the system slightly to prove other logical properties. if we have a set of [[premise|premises]] $\Delta$ and we want to prove that it [[./entailment and provability|entails]] $\varphi$, we can instead prove that $\Delta \cup \{ \lnot \, \varphi \}$ is a contradiction.

[[resolution (logic)|Resolution proofs]] are an example where we only have a refutation-complete system, but we can use this kind of [[proof by contradiction|proof by contradiction]] to prove logical consequences.