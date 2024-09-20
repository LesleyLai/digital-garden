---
parent:
  - "[[database|database]]"
tags:
  - computer/database/theory
created: 2024-09-20
modified: 2024-09-20
publish: true
---
In database theory, **functional dependencies (FDs)** are a tool to capture semantic relationships between attributes and detect and eliminate bad design.

Informally, a function dependency $X \to Y$ is _when value of attribute X determines the value of attribute Y_.

> [!info] 
> Functional dependency shares the same $X \to Y$ notation to [[./logical conditional|logical implication]], and indeed functional dependency can be view as a form of implication. [^1]

More formally, 
> [!definition] Functional dependencies
> given a [[./relation|relation]] $R$ and two set of attributes $X, Y \subseteq R$, we say "$X$ **functionally determines** $Y$" or if each $X$ value is associated with precisely one $Y$ value. 

$R$ is then said to _satisfy_ the functional dependency $X \to Y$. In other word, the relationship $R$ between $X$ and $Y$ can be modelled using a [[function|function]] (n to 1).

## Determining Functional Dependencies
There are two ways to determine functional dependency, either via considering semantic meaning of the attributes or by analyzing the actual data.

In most cases, we use the semantic meaning. And if we use the actual data, this process is referred to as [[knowledge mining|knowledge mining]].

> [!note]
> We might be able to tell that a certain functional dependency does not hold by just looking at an instance of a relation. However, no matter how many instances of a relation are examined, we can never definitively deduce that a functional dependency does hold purely from data.
> 
> This is the same idea as how unit tests can never guarantee eliminating of bugs.

## Inference Rules
Given $A$, $B$, and $C$ as sets of attributes in a relation $R$, there are several properties of functional dependencies. The most important three are [[Armstrong's axioms|Armstrong's axioms]]:
1. **Reflexivity**: If $B \subseteq A$, then $A \to B$
  - These are called *trivial* functional dependencies
2. **Augmentation**: If $A \to B$, then $AC \to BC$ for any set of attributes $C$
3. **Transitivity**: If $A \to B$ and $B \to C$, then $A \to C$

## Closure
Given a set of functional dependencies $F$, we call the set of all functional dependences that can be deduced form the set $F$ a **closure** and denote it as $F^+$.

[^1]: [Functional dependency - Wikipedia](https://en.wikipedia.org/wiki/Functional_dependency)