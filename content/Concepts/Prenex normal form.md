---
parent:
  - "[[normal forms (logic)|normal forms (logic)]]"
tags:
  - logic/predicate
created: 2024-10-17
modified: 2024-10-31
publish: true
---
In [[predicate logic|predicate logic]], a [[well-formed formula|well-formed formula]] is in **prenex normal form** (**PNF**) if it has all of its quantifiers in fronts. For example,
$$
\forall x \forall y (( Hyy \land Cx) \to Bx)
$$
is in the prenex normal form, while
$$
\forall x ((\exists y Hyy \land Cx) \to Bx)
$$
is [[./logical equivalence|logically equivalent]] but not in the prenex normal form.

We can convert a formula into the prenex normal form by [[moving quantifiers|moving quantifiers]].
