---
aliases:
  - "#computing/cpp/name_lookup"
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - computing/PL/semantics
  - computing/cpp/name_lookup
---
When a C++ function get called, it go through several phases in order:
1.  Name lookup
2.  [[Template Argument Deduction|Template Argument Deduction]]
3.  [[C++ Overload Resolution|Overload Resolution]]
4.  [[C++ Access Control|Access Control]]
5.  [[Virtual Function|Virtual Function]]

There are three major categories of name lookups:
-   Unqualified name lookups
-   Qualified name lookups
-   [[Argument-dependent lookup|Argument-dependent lookup]] (ADL)