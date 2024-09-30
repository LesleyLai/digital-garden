---
parent:
  - "[[./proof system|proof systems]]"
tags:
  - logic/FormalSystem
created: 2024-09-29
modified: 2024-09-29
publish: true
---
An **axiom schema** is a template for generating [[well-formed formula|formulas]] in a [[./formal system|formal system]]. It's an expression that follows the grammatical rules of the formal language but contains metavariables (typically represented by Greek letters). For example, consider the following axiom schema where φ and ψ are metavariables:
$$
\varphi \to (\psi \to \varphi)
$$
An _instance_ of an axiom schema is the formula obtained by consistently [[./substitution|substituting]] metavariables with a specific formula. For example, the following are all instances of the schema above:
$$
\begin{align}
&p \to (q \to p) \\
&p \to (p \to p) \\
&(p \to q) \to ((q - >r) \to (p \to q))
\end{align}
$$
An axiom schema is [[./valid formula|valid]] if and only if every instance of the schema is valid. For example, the schema above is valid, but the schema $\psi \to \varphi$ is not valid.

Both valid and non-valid schemas are useful. Valid schema are used as components of deductive [[./proof system|proof systems]] serving as [[axiom|axioms]]. And non-schemas can be used as part of a [[./inference rules|inference rule]], where the conclusion is not necessarily true for all substitutions but follows from the premises under specific conditions.