---
created: 2023-05-30
modified: 2024-09-28
parent:
  - "[[./argument|argument]]"
publish: true
tags:
  - logic
  - math/logic
title: Validity
---
An [[./argument|argument]] is **valid** [[./logical equivalence|if and only if]] the truth of [[premise|premises]] [[./entailment|entails]] the truth of conclusion. [^1]

## Relationship with NTP
Another concept, [[./necessarily truth-preserving|necessarily truth-preserving]] (NTP), closely resembles validity, but validity demands more. An argument is valid _solely due to its structure_. [^1] While this distinction is non-exist in formal logic language, it arise in natural languages. Consider the following argument:
$$
\begin{prooftree} 
\AXC{water is transparent}
\UIC{$H_2O$ is transparent}
\end{prooftree}
$$
The above argument is NTP only because we have the knowledge that water is $H_2O$. Thus, this is not a valid argument.

## Validity Test
There are various way to test the validity of an argument such as:
- [[truth table|truth table]] - only works in [[./propositional logic|propositional logic]] and can become unwieldy with numerous basic propositions due to combinatorial explosion
- [[./truth tree|truth tree]] (semantic tableaux) - can often be more efficient than a truth table and also works in [[predicate logic|predicate logic]] 
- [[model checking|model checking]] - systematically enumerates all possible states of a system to verify properties. Only works with finite domains
- [[direct proofs|direct proofs]]
- [[natural deduction|natural deduction]]
- [[SAT solver|SAT solvers]]

Also, if we can get a counterexample where premises are true but the conclusion is false, we can immediately prove that an argument is invalid.

## Relationship with Soundness
Note that _validity doesn't mean truth_. If a promise is false, then even a valid argument can't guarantee conclusion. On the other hand, [[./affirming the consequent|even when the conclusion is true, we can't guarantee that the promise is true]]. If a valid argument is also true, we say that it is [[./deductive soundness|sound]].

[^1]: Smith, Nicholas J.J.. _Logic : The Laws of Truth_, Princeton University Press, 2012. Chapter 1