---
parent:
  - "[[proof system|proof system]]"
tags:
  - logic/FormalSystem
created: 2024-09-29
modified: 2024-09-30
publish: true
---
The **Hilbert System** is a proof system with only one [[./inference rules|rule of inference]], implication elimination, in additional to three [[./axiom schemas|axiom schemas]].

Despite its simplicity, the Hilbert system is both [[./soundness (formal system)|sound]] and [[./completeness|complete]]. In other words, for this system, [[./entailment and provability|logical entailment]] and provability are identical.

## Definition
- [[implication elimination|implication elimination]] ( (modus ponens))
$$
\begin{prooftree}
\AXC{$\varphi \to \psi$}
\AXC{$\varphi$}
\BIC{$\psi$}
\end{prooftree}
$$
- (A1) $\varphi \to (\psi \to \varphi)$
- ([[implication distribution|A2]])  $(\varphi \to (\psi \to \chi)) \to ((\varphi \to \psi) \to (\varphi \to \chi))$
- ([[implication reversal|A3]]) $(\neg \psi \to \neg \varphi) \to (\varphi \to \psi)$

> [!example]- Example: given $(p \to q)$ and $(q \to r)$, prove $(p \to r)$
> We can prove with the following steps:
> 1. $(p \to q)$ premise
> 2. $(q \to r)$ premise
> 3. $(q \to r) \to (p \to (q \to r))$ A1
> 4. $(p \to (q \to r))$ implication elimination: 3, 2
> 5. $(p \to (q \to r)) \to ((p \to q) \to (p \to r))$ A2
> 6. $((p \to q) \to (p \to r))$ implication elimination: 5, 4
> 7. $(p \to r)$ implication elimination: 5, 4


## References
- [Introduction to Logic - Chapter 4](http://intrologic.stanford.edu/chapters/chapter_04.html)

## See Also
- [Hilbert-style Proof Editor - Stanford](http://logica.stanford.edu/homepage/hilbert.php) ([Documentation](http://intrologic.stanford.edu/logica/documentation/hilbert.html))