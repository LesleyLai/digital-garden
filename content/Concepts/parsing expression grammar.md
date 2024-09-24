---
aliases:
  - PEG
  - parsing expression grammars
created: 2023-05-30
modified: 2024-03-14
tags:
  - computing/AlgorithmsAndDataStructures/parsing
  - computing/FormalLanguages
publish: true
---
**Parsing Expression Grammar (PEG)** is a kind of [[formal grammar|formal grammar]] for describing other languages in term of a set of rules for recognizing strings.

> [!example]
> ```
> expr    ← sum
> sum     ← product (('+' / '-') product)*
> product ← value (('*' / '/') value)*
> value   ← [0-9]+ / '(' expr ')'
> ```

> [!question] What's the difference between PEG and [[./context-free grammar|context-free grammar]]?
> The syntax of PEG is similar to [[./context-free grammar|context-free grammar]] (CFG), but the choice operator match first in PEG, while it is ambiguous in CFG. Thus, unlike CFGs, PEGs cannot be [[ambiguous grammar|ambiguous]] and a string must by exactly one valid parse tree.