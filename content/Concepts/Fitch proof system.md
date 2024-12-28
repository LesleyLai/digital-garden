---
parent:
  - "[[./proof system|proof system]]"
tags:
  - logic/proofs
created: 2024-10-04
modified: 2024-12-28
publish: true
---
**Fitch** is a [[./proof system|proof system]] that uses [[./conditional proofs|conditional proofs]] to achieve simplicity. It uses conditional [[./inference rules|rules of inference]] on top of ordinary rules of inference.

The Fitch system is [[./soundness (formal system)|sound]] and [[./completeness|complete]] for propositional and first-order logic.

## Rules
Fitch has several rules of inference. Most of them are ordinary rules of inference, but _implication introduction_ is a conditional rule of inference.

### Conjunction Rules
**And Introduction**
$$
\begin{prooftree}
\AXC{$\varphi_1$}
\AXC{$\dots$}
\AXC{$\varphi_n$}
\TIC{$\varphi_1 \land \dots \land \varphi_n$}
\end{prooftree}
$$
**And Elimination**
$$
\begin{prooftree}
\AXC{$\varphi_1 \land \dots \land \varphi_n$}
\UIC{$\varphi_i$}
\end{prooftree}
$$

### Disjunction Rules
**Or Introduction**
$$
\begin{prooftree}
\AXC{$\varphi_i$}
\UIC{$\varphi_1 \lor \dots \lor \varphi_n$}
\end{prooftree}
$$

**Or Elimination**
$$
\begin{prooftree}
\AXC{$\varphi_1 \lor \dots \lor \varphi_n$}
\AXC{$\varphi_1 \to \psi$}
\AXC{$\dots$}
\AXC{$\varphi_n \to \psi$}
\QuaternaryInfC{$\psi$}
\end{prooftree}
$$
### Negation Rules
**Negation Introduction**

$$
\begin{prooftree}
\AXC{$\varphi \to \psi$}
\AXC{$\varphi \to \neg \psi$}
\BIC{$\neg \psi$}
\end{prooftree}
$$

**Negation Elimination**
$$
\begin{prooftree}
\AXC{$\neg \, \neg \, \varphi$}
\UIC{$\varphi$}
\end{prooftree}
$$
### Conditional Rules
**Implication Introduction**
$$
\begin{prooftree}
\AXC{$\varphi \vdash \psi$}
\UIC{$\varphi \to \psi$}
\end{prooftree}
$$
This is the most special rule that uses conditional proof. If we can derive $\psi$ by assuming $\varphi$, then $\varphi \to \psi$.

**Implication Elimination**
$$
\begin{prooftree}
\AXC{$\varphi \to \psi$}
\AXC{$\varphi$}
\BIC{$\psi$}
\end{prooftree}
$$
### Biconditional Rules
**Biconditional Introduction**
$$
\begin{prooftree}
\AXC{$\varphi \to \psi$}
\AXC{$\psi \to \varphi$}
\BIC{$\varphi \leftrightarrow \psi$}
\end{prooftree}
$$
**Biconditional Elimination**
$$
\begin{prooftree}
\AXC{$\varphi \leftrightarrow \psi$}
\UIC{$\varphi \to \psi$ \quad $\psi \to \varphi$}
\end{prooftree}
$$
## Examples
Given $p \to q$, prove $\neg q \to \neg p$
$$
\def\fitch#1#2{\quad\begin{array}{|l}#1\\#2\end{array}}
\begin{matrix}
\begin{aligned} 1 \\[2pt] 2  \\[2pt] 3 \\[2pt] 4 \\[2pt] 5 \\[2pt] 6 \\[2pt] 7 \\\end{aligned}\qquad
\begin{array}{l}
p \to q \\
\fitch{\neg q}{\fitch{p\\ \neg q}{} \\ p \to \neg q \\ \neg p} \\
\neg q \to \neg p
\end{array}
\end{matrix} \\
\qquad\begin{aligned} 
& \text{Premise} \\[2pt] 
& \text{Assumption} \\[2pt]
& \text{Assumption} \\[2pt]
& \text{Reiteration: 2} \\[2pt]
& \text{Implication Introduction: 3, 4} \\[2pt]
& \text{Negation Introduction: 1, 5} \\[2pt]
& \text{Implication Introduction: 2, 6} \\[2pt]
\end{aligned}
$$

## Tools
- [Fitch-style Proof Editor](http://logica.stanford.edu/homepage/fitch.php)

## References
- [Introduction to Logic - Chapter 5](http://intrologic.stanford.edu/chapters/chapter_05.html)