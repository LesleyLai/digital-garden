---
parent:
  - "[[relational model|relational database]]"
tags:
  - computing/database/theory
aliases:
  - superkey
  - candidate key
  - super key
  - primary key
  - super keys and candidate keys
created: 2024-09-19
modified: 2024-09-27
publish: true
---
In a relational database, a set of attributes is considered a **super key** if it can [[uniqueness|uniquely identify]] each tuple (row) in a relation (table). This means no two distinct tuples in a valid instance of the relation can have the same values for all attributes in the super key.

A **candidate key** is a minimal superkey, meaning it has no subset that is also a superkey. If any attribute is removed from a candidate key, it loses its ability to uniquely identify tuples.

It is possible to have multiple candidate keys for a single table, but RDBMS can only have one **primary key** for single table. The database designer pick a primary key from candidate keys. The primary key serves as the main identifier for tuples in the relation.