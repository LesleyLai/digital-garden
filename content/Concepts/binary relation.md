---
created: 2023-06-26
generalizations:
  - "[[./relation|relation]]"
modified: 2024-03-14
publish: true
specializations:
  - "[[partial function|partial function]]"
  - "[[function|total function]]"
  - "[[./equivalence relation|equivalence]]"
tags:
  - math/set_theory/relation
---
A [[./relation|relation]] $R \in S \times T$ is called a **binary relation** on sets $S$ and $T$.

The _domain_ of a relation, written as $\text{dom}(R)$), is a set of elements in $S$ s.t. if $s \in \text{dDom}(R)$, $(s, t) \in R$ for some $t$. And the _codomain_ is the set of elements $t \in T$ such that $(s, t) \in R$ for some $s$.

A binary relation $R$ is a [[partial function|partial function]] from $S$ to $T$ if whenever $(s, t_{1}) \in R$  and $(s, t_{2}) \in R$, we have $t_1 = t_2$. And it is a [[function|total function]] if $\text{dom}(R) = S$ (in other words, every elements in the set $S$ is in the domain).

We often denote a binary relation as $s \ R \ t$ rather than $(s, t) \in R$. For example, we denote strict equivalent as $s = t$.

## Ordered Sets
Some definitions:
- _reflexive_: $s \ R \ s$ for all $s$ in domain
- _symmetric_: $x \ R \ y \Longleftrightarrow y \ R \ x$ for all $x$ and $y$ in domain (the domain and codomain is the same in this case)
- _transitive_: $a \; R \; b \ \land \ b \; R \; c \quad \Longleftrightarrow \quad a \ R \ c$
- _antisymmetric_: $a \; R \; b \ \land \ b \; R \; a \quad \implies \quad a = b$

A _reflexive_ and _transitive_ relation is called a [[preorder (set theory)|order theory]] on its domain $S$. Preorders are written with symbols like $\le$. And $s < t$ means $s \le t \ \land s \ne t$.
A preorder is called a [[partial order|partial order]] if it is also _antisymmetric_. And a partial order is a [[total order|total order]] if it also has the property that for each $s$ and $t$ in domain, either $s \le t$ or $t \le s$.

A _reflexive_, _transitive_, and _symmetric_ relation on a set $S$ is called an [[./equivalence relation|equivalence]] of $S$.