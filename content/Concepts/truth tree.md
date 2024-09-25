---
aliases:
  - analytic tableau
  - truth tree
  - semantic tableau
created: 2024-08-26
modified: 2024-09-23
parent:
  - "[[logic|logic]]"
publish: true
tags:
  - logic
---
In Logic, a **truth tree**, also called an **semantic tableau**, (/tæˈbloʊ, ˈtæbloʊ/; plural: tableaux), an **analytic tableau**, is a method of testing for various properties of a set of [[premise|premises]] or an [[./argument|argument]].

Compare to a [[truth table|truth table]], a truth tree can often to be faster to work with. An argument with $n$ basic premises need $2^n$ rows in a truth table, so it quickly gets unpractical. Also, it is possible to extend truth tree to [[predicate logic|predicate logic]] while truth table is limited to [[./propositional logic|propositional logic]].

The primary purpose of a truth tree is to determine whether a given set of propositions is [[satisfiability|satisfiable]]. However, with some adjustments, it can also be used to test other properties, such as [[./validity (logic)|validity]].

## Tree Rules in Proposition Logic
We can reduce a proposition to its more basic form by using one of the tree rules. All the tree rule for propositional logic can be derived from the truth table. Note that $\alpha$ or $\neg \alpha$ are not reducible.

![[../assets/truth tree rules.png|truth tree rules.png]]

## Uses of Trees
### Satisfiability
[[satisfiability|Satisfiability]] is the most straightforward application of a truth tree.

### Validity
If an [[./argument|argument]] is [[./validity (logic)|validity]], it means that "all premises are true and the conclusion is false" is unsatisfiable. Thus, to test the validity with a tree, we write out all the premises and negate the conclusion at the top of the tree, and apply rules and close branches as appropriate until the tree is finished.

> [!example]+
> Is the following argument valid?
> 
![[../assets/validity-tree-test-1-argument.png|validity-tree-test-1-argument.png]]
>
> **Solution**
> 
![[../assets/validity tree test 1.png|validity tree test 1.png]]
>
> We can see that all path in the tree are closed, so the argument is *valid*.

> [!example]+
> Is the following argument valid?
> 
![[../assets/validity-tree-test-2-argument.png|validity-tree-test-2-argument.png]]
>
> **Solution**
> 
![[../assets/validity-tree-test-2.png|validity-tree-test-2.png]]
>
> We can see that some paths are open, so the argument is *invalid*.
> For example, when $A = F, B = T, C = T$, we have true premises but false conclusion
### Tautologies
To ask whether a proposition is a [[tautology|tautology]] is to ask whether it is true in every scenario. In other word, its negation is not satisfiable.

### Equivalence
The formula $\alpha$ is [[./logical equivalence|equivalent]] to $\beta$ iff $(\alpha \leftrightarrow \beta)$ is tautology. In other word, iff $\neg (\alpha \leftrightarrow \beta)$ is not satisfiable.
> [!example] Are $P$ and $P \lor P$ equivalent?+
> ![[../assets/equivalence tree test.png|equivalence tree test.png]]
> 
> All paths close, so $P$ and $(P \lor P)$ are equivalent

## In Predicate Logic

In [[predicate logic|predicate logic]], we use trees similarly to how we do in propositional logic — for testing [[satisfiability|satisfiable]]. In predicate logic, a tree tell us whether there is a [[model (logic)|model]] that satisfies the formulas at the top of the tree exists. We read off such as model from an open path. If no such models exist, then all paths of the tree will be closed.

### Tree Rules

The existing rules from the propositional logic stay the same, but we need add some new rules for quantifiers in predicate logics:

![[../assets/truth tree rule in predicate logic.png|truth tree rule in predicate logic.png]]

> [!info] the $\alpha(\underline{a}/\underline{x})$ notation means to [[./substitution|substitute]] all variable $\underline{x}$ in $\alpha$ as $\underline{a}$

The tree rules for negated quantifiers are simple: switch the existential quantifier to a universal one and vice versa, while also putting the negation inward. For unnegated quantifiers, we need to introduce variables.

#### Existential Quantifier
![[../assets/existential quantifier tree rule.png|existential quantifier tree rule.png]]

For existential quantifiers, we introduce a name $\underline{a}$ which is [[fresh variable|new to the path]]. We then strip the quantifier, and substitute all the free occurrence of the variable $\underline{x}$ with $\underline{a}$.

#### Universal Quantifier
![[../assets/universal quantifiers tree rule.png|universal quantifiers tree rule.png]]

For universal quantifiers, $\underline{a}$ can be any name and does not have to be new to the path. Note that when we applying this rule, we write a backslash instead of a check mark, since this rule can be repeatedly applied with different variable names  $\underline{a}, \underline{b}, \underline{c}\dots$

We can technically apply the rule above an infinite number of times,
![[../assets/universal quantifier tree rule infinity.png|universal quantifier tree rule infinity.png]]
but we can stop when a path is _saturated_.

We define "saturated" as
1. For every formula on whose main operator is a universal quantifier
  - The universal quantifier rule has been applied at least once.
  - The rule has been applied to it once for **every name** in the path.
2. For every other formula, the relevant rule has been applied.

> [!example]+ Example: the following tree is finished
> ![[../assets/truth tree saturated 1.png|truth tree saturated 1.png]]

> [!example]+ Example: the following tree is not finished
> ![[../assets/truth tree saturated 2.png|truth tree saturated 2.png]]
> 
> because we can still apply $b$ to the universal quantifier $\forall x G x$.
> 
> Once we do that, the tree is finished
> 
> ![[../assets/truth tree saturated 2.1.png|truth tree saturated 2.1.png]]

> [!example]+ Example: the following tree is not finished
> 
> $$\forall x G x$$
> 
> We need to apply the universal rule at least once:
> 
> ![[../assets/truth tree saturated 3.png|truth tree saturated 3.png]]

#### Heuristics for Applying Tree Rules
When applying tree rules, it is desirable to follow the following order:
1. propositional logic rules - and among those rules, nonbranching rules first
2. negated quantifiers rules
3. unnegated existential quantifier rules
4. unnegated universal quantifier rule
This heuristics usually result in a shorter tree proof.

## Reference
- Smith, Nicholas J.J.. _Logic : The Laws of Truth_, Princeton University Press, 2012. Chapter 7 and Chapter 10

## See Also
- [Tree Proof Generator](https://www.umsu.de/trees/) - An online program to construct tree proofs