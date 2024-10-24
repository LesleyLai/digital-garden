---
parent:
  - "[[parsing|parser]]"
tags:
  - computing/algorithms/parsing
aliases:
  - LL parser
  - LR parser
created: 2024-06-09
modified: 2024-06-09
publish: true
---
The **LL parser** (left-to-right, leftmost derivation) and **LR parser** (left-to-right, rightmost derivation) are parsers for restrictive [[./context-free grammar|context-free grammar]].

## Difference between LL and LR Parsing

If we think parsing as outputting a [[./Iterator Pattern|traversal]] of the parse tree, then the LL parsers output a [[tree traversal|pre-order traversal]] and LR parsers a [[tree traversal|post-order traversal]]. [^1]

> [!example]
> For example, for a parse tree like the following:
> ![[../assets/JSON Parse Tree.png|JSON Parse Tree.png]]
> 
> We will have the following results:
> ![[../assets/JSON LL and LR parsing output.png|JSON LL and LR parsing output.png]]

This also explain why LL is [[./top-down vs bottom-up parsing|top-down parsing]] while LR is [[./top-down vs bottom-up parsing|bottom-up parsing]].  [^1]

We can view LL and LR parser as taking a token stream, and then *inserts* interior nodes of the tree at appropriate places to achieve pre-order (LL) and post traversal (LR) of the parse tree.

## Lookahead

Sometimes we need to look ahead of tokens in stream position to make decision. When we see designations like LL(1), LR(0), etc. the number in parentheses is the number of tokens of lookahead. [^1]

Note that the lookahead is relative to where the rule should be inserted, which is _before_ that rule’s tokens for LL parsers or _after_ that rule’s tokens for LR parsers. This is why we can have an LR(0) parser, whereas an LL(0) parser would be impossible.
![[../assets/LL and LR lookahead.png|300]]

## Pros and Cons
### LR Parsers Can Handle More Grammar
Since LR lookahead starts from the end of a rule, a LR(1) parser has strictly more information available to it when making a decision than an LL(1) parser. LR parsers can also handle [[./left recursion|left recursion]], which LL parsers can't. [^1]

## LL Parsers Can Support Regex-like Operators in Grammars
With top-down parsers like LL, we can form a [[deterministic finite automaton|DFA]] for each rule.
```text
pairs → (pair (',' pair)*)?
```
This is not possible with LR. [^1]

## LL Parsers Support Inherited Attributes
Understanding the context enables LL parsers to pass attributes or metadata down the tree as it is being built, a concept known as "inherited attributes." Both LL and LR parsers can also support "synthesized attributes," which are passed up the tree. [^1]

## Related
- [[polish and reverse-polish notation|polish and reverse-polish notation]] - we can view the LL parser as output polish notation while the LR parser as outputting reverse-polish notation

[^1]: [LL and LR Parsing Demystified](https://blog.reverberate.org/2013/07/ll-and-lr-parsing-demystified.html)