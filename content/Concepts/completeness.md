---
parent:
  - "[[logic|logic]]"
tags:
  - logic/FormalSystem
created: 2024-09-27
modified: 2024-09-30
publish: true
aliases:
  - complete system
---
A [[./formal system|formal system]] is **complete** if we can prove all things right. This is in contrast with [[./soundness (formal system)|soundness]], which is the property that you can prove all things wrong.

More formally, a proof system is _complete_ if and only if every logical conclusion is provable. In other words, if  $\Delta \vDash \varphi$, then $\Delta \vdash \varphi$.