---
created: 2024-04-28
modified: 2024-05-03
parent:
  - "[[my opinions|my opinions]]"
publish: true
tags:
  - opinion
---

# On Programming Language Complexity and Bad Features

There are certain programming language design decisions that are **[[../Concepts/pl design#Design Mistakes and Anti-Features|objectively bad]]**, but for most cases we are dealing with tradeoffs.

There are also cases where two features looks alright in isolation but don't play well with each other (e.g. C++'s [[Argument-dependent lookup|ADL]] and [[C++ Overload Resolution|overload resolution]]). Those are tricky cases, and are one reason why each added features to a language need to be carefully considered. Also, features that have global impact (like the C++ example above) tend to cause more compossibility problems with other features, so give those additional caution.