---
parent:
  - "[[logic|logic]]"
tags:
  - logic
aliases:
  - rule of inference
  - rules of inference
  - inference rule
created: 2024-09-29
modified: 2024-09-30
publish: true
---
An **rule of inference**, or an **inference rule** is a pattern of reasoning consisting of some [[./axiom schemas|axiom schemas]] serving as [[premise|premises]] and additional schemas as conclusion.

Rules of inference are often written as shown below.
$$
\begin{prooftree}
\AXC{$\varphi \to \psi$}
\AXC{$\varphi$}
\BIC{$\psi$}
\end{prooftree}
$$
The above rule is called [[implication elimination|implication elimination]]. And there are [[./list of inference rules|a lot more commonly used inference rules]].

> [!info] inference rule and arguments
> While looks similar, inference rules are different from an [[./argument|argument]]. Though the two concepts are related. A [[./valid argument|valid argument]] can be seen as an application of one or more inference rules.