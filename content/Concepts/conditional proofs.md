---
parent:
  - "[[logic|logic]]"
tags:
  - logic/proofs
aliases:
  - subproofs
  - superproofs
  - implication introduction
created: 2024-10-04
modified: 2024-10-12
publish: true
---
**Conditional proofs** allow sentences to be grouped into _subproofs_ nested within outer _superproofs_.

In conditional proofs, we can _make arbitrary assumptions_ within subproofs and then prove conclusions from those subproofs. And then from those derivations, we can derive [[./logical conditional|implications]] outside of those subproofs, with our assumptions as antecedents and our conclusions as consequent.

Further, we can use assumptions in superproofs inside a subproof. In other word, we can view each subproof as a [[scope|scope]] and its super proof as the parent scope. For example, in the following conditional proof, we introduced a new assumption $p$ in the subproof and derived the conclusion $r$ from it. As a result, we derive $(p \to r)$ in the outer proof.
![[../assets/conditional proof example.png|conditional proof example.png]]

## Formalization
The use of subproof results can be formalized as the **implication introduction** [[./inference rules|inference rule]], represented as:
$$
\frac{\varphi \vdash \psi}{\varphi \to \psi}
$$
This rule states that if $\varphi \vdash \psi$ ($\psi$ [[./entailment and provability|can be derived from]] $\varphi$), then we can conclude $\varphi \to \psi$ ([[./logical conditional|logical conditional]]).

## Usage
The primary function of conditional proofs is to derive implications. There are three basic operations involved in creating useful subproofs:
1. Making assumptions within a subproof
2. Deriving conclusions based on assumptions and ordinary rules of inference
3. Using these derivations to form logical implications outside the subproof

## Practical Applications
The [[./Fitch proof system|Fitch]] is a popular proof system that achieve its simplicity via the use of conditional proofs.

## References
- [Introduction to Logic - Chapter 5](http://intrologic.stanford.edu/chapters/chapter_05.html)