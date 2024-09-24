---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

#computing/compiler/frontend #computing/AlgorithmsAndDataStructures/parsing  #todo/someday 
We need to solve certain ambiguities to parse angle brackets for generic parameters.

One ambiguity raise where when we meet `>>`, whether to parse it as shift operator or two angle brackets.

Another ambiguity raises when we have constructs that can be interpreted as templated types or comparison expressions. For example, is `A (B < C, D > (E))` a function call on `A` with two boolean arguments `B < C` and `D > (E)`, or is it a function call on `A` with a single argument of type `B<C, D>`? [WGSLl](https://mastodon.gamedev.place/@dneto/109801892099938143) says the 2nd.


> The change can be framed as doing a pre-scan on the tokens to find the matching pairs of < and > which form template arg lists.
> 
> Ben Clayton proposed the scheme, and implemented it in Treesitter (where you have to use its custom scanners). 
> 
> It trades user convenience and familiarity with C++-style template syntax for a little extra work on the parsers.
> 
> I'm working to edit the spec change.

Proposal details: [Lookahead disambiguation of less-than vs template argument list (v2)](https://github.com/gpuweb/gpuweb/issues/3770)