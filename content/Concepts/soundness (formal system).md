---
parent:
  - "[[logic|logic]]"
tags:
  - logic/FormalSystem
aliases:
  - soundness
  - sound system
created: 2024-09-27
modified: 2024-09-29
publish: true
---
A [[./formal system|formal system]] is **sound** if we cannot prove anything that's wrong. This is in contrast with [[./completeness|completeness]], which is the property that you can prove all things right. [^1]

More formally, a proof system is _sound_ if and only if every provable conclusion is logically [[./entailment and provability|entailment and provability]]. In other words, if $\Delta \vdash \varphi$, then $\Delta \vDash \varphi$. In contrast, a proof system is _complete_ if and only if every logical conclusion is provable. In other words, if  $\Delta \vDash \varphi$, then $\Delta \vdash \varphi$.

> [!tip] Not to be confused with [[./deductive soundness|sound argument]], which operate on the scope of single arguments rather than logical systems

[^1]: [incompleteness - What is the difference between Completeness and Soundness in first order logic? - Mathematics Stack Exchange](https://math.stackexchange.com/questions/105575/what-is-the-difference-between-completeness-and-soundness-in-first-order-logic#105576)