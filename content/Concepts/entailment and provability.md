---
aliases:
  - logical consequence
  - syntactic consequence
  - semantic consequence
created: 2023-05-30
modified: 2024-09-30
parent:
  - "[[logic|logic]]"
publish: true
tags:
  - logic/property
---
In logic, the concept where one kinds of rule leads to another is called **entailment** (also called **logical consequence**). For example, "If A is true, B must follow. A necessarily leads to B."

A [[./validity (disambiguous)|valid]] logical [[./argument|argument]] is the one in which the conclusion is entailed by premises.

> [!note]
> Entailment is not the same as [[./logical equivalence|logical equivalence]]. For example, $p$ logically entails $p \lor q$, but $p \lor q$ does not logically entail $p$.

## Relation with Conditional
$A \vDash B$ if and only if $A \to B$ is a [[./tautology|tautology]].

## Syntactic and Semantic Consequence
The symbol for entailment are $\vDash$ or $\models$, which represent **semantic consequences**. There is also a separate symbol $\vdash$ to represent **syntactic consequence** (or **provability**. Their difference is subtle:
- syntactic consequence $\Gamma \vdash \varphi$ says: sentence $\varphi$ is _provable_ from the set of assumptions $\Gamma$ without knowing whether $\Gamma$ is true.
- semantic consequences $\Gamma \vDash \varphi$ says: sentence $\varphi$ is _true_ in all [[interpretations (logic)|interpretations]] of $\Gamma$.

If a system is both [[./soundness (formal system)|sound]] and [[./completeness|complete]] then the semantic consequences and syntactic consequence are equivalents. There are theorems regarding the equivalence between the two concepts both for [[./propositional logic|propositional logic]] and [[predicate logic|first-order logic]] (see [[Gödel's completeness theorem|Gödel's completeness theorem]]), but for [[higher-order logic|higher-order logic]] this may not be true. [^1]


[^1]: [logic - Semantic vs syntactic consequence - Philosophy Stack Exchange](https://philosophy.stackexchange.com/questions/10785/semantic-vs-syntactic-consequence)
