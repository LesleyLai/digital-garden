---
aliases:
  - analytic tableau
  - truth tree
  - semantic tableau
created: 2024-08-26
modified: 2024-09-08
parent:
  - "[[logic|logic]]"
publish: true
tags:
  - logic
---

In Logic, a **truth tree**, also called an **semantic tableau**, (/tæˈbloʊ, ˈtæbloʊ/; plural: tableaux), an **analytic tableau**, is a method of testing for various properties of a set of [[premise|premises]] or an [[./argument|argument]].

Compare to a [[truth table|truth table]], a truth tree can often to be faster to work with. An argument with $n$ basic premises need $2^n$ rows in a truth table, so it quickly gets unpractical. Also, it is possible to extend truth tree to [[predicate logic|predicate logic]] while truth table is limited to [[./propositional logic|propositional logic]].

The primary purpose of a truth tree is to determine whether a given set of propositions is [[satisfiability|satisfiable]]. However, with some adjustments, it can also be used to test other properties, such as [[./validity (logic)|validity]].

## Tree Rules
We can reduce a proposition to its more basic form by using one of the tree rules. All the tree rule for propositional logic can be derived from the truth table. Note that $\alpha$ or $\neg \alpha$ are not reducible.

![[../truth tree rules.png|truth tree rules.png]]

## Uses of Trees
### Satisfiability
[[satisfiability|Satisfiability]] is the most straightforward application of a truth tree.

### Validity
If an [[./argument|argument]] is [[./validity (logic)|validity]], it means that "all premises are true and the conclusion is false" is unsatisfiable. Thus, to test the validity with a tree, we write out all the premises and negate the conclusion at the top of the tree, and apply rules and close branches as appropriate until the tree is finished.

> [!example]+
> Is the following argument valid?
![[../validity-tree-test-1-argument.png|validity-tree-test-1-argument.png]]
> **Solution**
![[../validity tree test 1.png|validity tree test 1.png]]
> We can see that all path in the tree are closed, so the argument is *valid*.

> [!example]+
> Is the following argument valid?
![[../validity-tree-test-2-argument.png|validity-tree-test-2-argument.png]]
> **Solution**
![[../validity-tree-test-2.png|validity-tree-test-2.png]]
> We can see that some paths are open, so the argument is *invalid*.
> For example, when $A = F, B = T, C = T$, we have true premises but false conclusion
### Tautologies
To ask whether a proposition is a [[tautology|tautology]] is to ask whether it is true in every scenario. In other word, its negation is not satisfiable.

### Equivalence
The formula $\alpha$ is [[./logical equivalence|equivalent]] to $\beta$ iff $(\alpha \leftrightarrow \beta)$ is tautology. In other word, iff $\neg (\alpha \leftrightarrow \beta)$ is not satisfiable.
> [!example] Are $P$ and $P \lor P$ equivalent?+
> ![[../equivalence tree test.png|equivalence tree test.png]]
> All paths close, so $P$ and $(P \lor P)$ are equivalent

## Reference
- Smith, Nicholas J.J.. _Logic : The Laws of Truth_, Princeton University Press, 2012. Chapter 7

## See Also
- [Tree Proof Generator](https://www.umsu.de/trees/) - An online program to construct tree proofs