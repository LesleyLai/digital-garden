---
parent:
  - "[[./inference rules|inference rules]]"
tags:
  - logic
created: 2024-09-29
modified: 2024-09-30
publish: true
---
Here are some commonly used [[./inference rules|inference rules]]
## In Propositional Logic
### Conditional
- [[implication introduction|implication introduction]]
$$
\begin{prooftree}
\AXC{$\alpha$}
\UIC{$\beta \to \alpha$}
\end{prooftree}
$$

- [[implication elimination|implication elimination]] (modus ponens, affirming the antecedent): "If X implies Y, and X is true, then Y is true"
$$
\begin{prooftree}
\AXC{$\alpha \to \beta$}
\AXC{$\alpha$}
\BIC{$\beta$}
\end{prooftree}
$$
- [[denying the consequent|denying the consequent]] (modus tollens, denying the consequent): "If X implies Y, and Y is false, then X is false"
$$
\begin{prooftree}\AXC{$\alpha \to \beta$}\AXC{$\neg \beta$}\BIC{$\neg \alpha$}\end{prooftree}
$$

- [[implication distribution|implication distribution]]
$$
\begin{prooftree}
\AXC{$\alpha \to (\beta \to \gamma)$}
\UIC{$(\alpha \to \beta) \to (\alpha \to \gamma)$}
\end{prooftree}
$$

- [[implication reversal|implication reversal]]
$$
\begin{prooftree}
\AXC{$\neg \beta \to \neg \alpha$}
\UIC{$\alpha \to \beta$}
\end{prooftree}
$$

### Biconditional
- biconditional introduction
$$
\begin{prooftree}
\AXC{$\alpha \to \beta$}
\AXC{$\beta \to \alpha$}
\BIC{$\alpha \leftrightarrow \beta$}
\end{prooftree}
$$
- biconditional elimination
$$
\begin{prooftree}
\AXC{$\alpha \leftrightarrow \beta$}
\UIC{$\alpha \to \beta$}
\end{prooftree}
$$
and
$$
\begin{prooftree}
\AXC{$\alpha \leftrightarrow \beta$}
\UIC{$\beta \to \alpha$}
\end{prooftree}
$$

### Conjunction and Disjunction
- conjunction introduction
$$
\begin{prooftree}\AXC{$\alpha$}\AXC{$\beta$}\BIC{$\alpha \land \beta$}\end{prooftree}
$$
- conjunction elimination
$$\begin{prooftree}\AXC{$\alpha \land \beta$}\UIC{$\alpha$}\end{prooftree}$$
and
$$\begin{prooftree}\AXC{$\alpha \land \beta$}\UIC{$\beta$}\end{prooftree}$$

- disjunction introduction
$$
\begin{prooftree}\AXC{$\alpha$}\UIC{$\alpha \lor \beta$}\end{prooftree}
$$