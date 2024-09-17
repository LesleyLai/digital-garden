---
aliases:
  - disjoint events
created: 2024-09-02
modified: 2024-09-02
parent:
  - "[[probability MOC|probability MOC]]"
publish: true
tags:
  - math/probability
---
# Mutually Exclusive Events

Two [[event (probability)|events]] are **mutually exclusive** or **disjoint** when the occurrence of one event prevents the other. That is, their [[joint probability|joint probability]] $P(A \cap B) = 0$. An example of mutually exclusive event is getting a sum of 12 from 2 dice throws and throwing a 1.

If two events are mutually exclusive, we can add their probability:
$$
P(A \cup B) = P(A) + P(B)
$$
This is obviously not correct in general when the two events are not mutually exclusive.

## Relationship with Independence
Note that mutually exclusive events are neither necessarily [[./independent events|independent]] or dependent. In any non-trivial case, mutually exclusive events are dependent. However, it is possible for two mutually exclusive events to be independent when one event is impossible to happen.