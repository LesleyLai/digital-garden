---
tags:
  - math/definitions
  - math/set_theory/relation
aliases:
  - identity function
  - identity map
  - identity transformation
created: 2024-10-16
modified: 2024-10-16
generalizations:
  - "[[./equivalence relation|equivalence relation]]"
publish: true
---
The **identity relation** for a set $X$ is a [[./binary relation|binary relation]] $I \subseteq X \times X$ that consists of ordered pairs in the form $(x, x)$. In other words, each element is related only to itself. We usually denote the identity relation using the equality symbol $=$. For example, given a set $X = \{1, 2, 3\}$, the identity relation is defined as $I = \{ (1, 1), (2, 2), (3, 3) \}$.

The identity relation is a specific type of [[./equivalence relation|equivalence relation]] that fulfills all the standard properties. Which is, for all $x$, $y$, and $z$ in the set $X$,
- Reflexive: $x = x$
- Symmetric: If $x = y$, then $y = x$
- Transitive: If $x = y$ and $y = z$, then $x = z$

## Identity Function
Since the identity relation always have at most one object in the co domain mapped from one object in the domain, it is also a [[./functions|function]]. We call it **identity function**, **identity map**, or **identity transformation**. The identity function on $X$ is defined as
$$
f(x: X): X = x
$$
The identity function is [[bijection|bijective]].

## See Also
- [[./the identity predicate|the identity predicate]] - Identity relation in the first-order logic
- [[identity matrix|identity matrix]] - Represents an identity linear transformation