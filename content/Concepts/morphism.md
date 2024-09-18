---
Aliases:
  - arrow
created: 2023-05-30
modified: 2024-03-14
publish: true
---

#math/category_theory

---
# Morphism

**Morphism**, or sometimes called **arrow** in category theory, is a map between one mathematical structure to the next.

For example, in category theories, a morphism is a function between objects. In linear algebra, a morphism is a [[./linear transformation|linear map]].

## Axioms of Composition

Morphism can be composed, and the composition follows the following axioms:

- **[[associativity|associativity]]**: $h \circ (g \circ f) = (h \circ g) \circ f = h \circ g \circ f$
- **Identity**: For every object A there is a morphism which is a unit of composition: $f \circ \mathbf{id}_A = \mathbf{id}_A \circ f = f$