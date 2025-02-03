---
aliases:
  - PEG
  - parsing expression grammars
created: 2023-05-30
modified: 2025-02-03
tags:
  - computing/parsing
  - computing/FormalLanguages
publish: true
---
**Parsing Expression Grammar (PEG)** is a kind of [[formal grammar|formal grammar]] for describing other languages in term of a set of rules for recognizing strings.

> [!example]
> ```
> expr    = sum
> sum     = product (('+' | '-') product)*
> product = value (('*' | '/') value)*
> value   = [0-9]+ | '(' expr ')'
> ```

## Differences between PEG and CFG

The syntax of PEG is similar to [[./context-free grammar|context-free grammar]] (CFG), but there are a couple of differences.

In a sense, PEG grammars resembles the imperative code used in hand-written [[recursive descent parsers|recursive descent parser]] [^1], whereas CFGs are more declarative.

### Ordered Choice
The choice operator, often denoted by `|` (or `/`), matches the first option in PEG. For example, `first | second` means "try `first`, if it failed, try `second`." This differs from CFGs, where multiple rules can match the same input, leading to ambiguity.

Sometimes order matters. For example, for a grammar `"a" | "ab"`, PEG will choose `"a"` and never go to the second branch.

### No Backtracking
PEG parsing is greedy — once a rule succeeds, it commits to that path without reconsideration.

Consider the following PEG grammar:
```pest
word =      // to recognize a word...
    ANY*     //   take any character, zero or more times...
    ~ ANY    //   followed by any character
```

Here, `ANY*` eagerly consumes the entire input, leaving nothing for `~ ANY`, causing the rule to fail. Unlike CFG-based parsers, PEG does not backtrack to try alternative matches.

### Unambiguous
Unlike CFGs, PEGs cannot be [[ambiguous grammar|ambiguous]] and a string must by exactly one valid parse tree.

## Criticism

PEGs are not directly compatible with CFGs, meaning grammars that appear similar in both formalisms can have different interpretations. Care must be taken when converting a CFG-based language into PEG. [^2]

For instance, it is undecidable whether the following PEG rule is equivalent to `A = C | B`:
```
A    = B | C
```

PEG trivially resolves the [[./dangling else problem|dangling else problem]] without ambiguity, but this does not mean the problem disappears for users. A programmer may still interpret the same code in multiple ways, requiring additional learning to understand the actual behavior.

## Libraries
- [pest](https://pest.rs/) (Rust parser generator using PEG)

## See Also
- [[./parser combinator|parser combinator]]
- [[./left recursion|left recursion]] - PEG can't handle left recursion because it is eager

[^1]: [Parsing expression grammars - A thoughtful introduction to the pest parser](https://pest.rs/book/grammars/peg.html)
[^2]: [This is why you should never use parser combinators and PEG — Askar Safin](https://safinaskar.writeas.com/this-is-why-you-should-never-use-parser-combinators-and-peg)
[^3]: [LL and LR in Context: Why Parsing Tools Are Hard](https://blog.reverberate.org/2013/09/ll-and-lr-in-context-why-parsing-tools.html)