---
created: 2023-05-30
modified: 2024-08-16
parent:
  - "[[./argument|argument]]"
publish: true
tags:
  - logic
  - math/logic
---

# Validity

In [[./deductive reasoning|deductive reasoning]] and [[./propositional logic|propositional logic]], an [[./argument|argument]] is **valid** [[./logical equivalence|if and only if]] the truth of [[premise|premises]] [[./entailment|entails]] the truth of conclusion. [^1]

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
We can test the validity of an argument by constructing a truth table that includes all possible combinations of basic propositions. By examining the truth table, we can determine if there is any row where the premises are all true, but the conclusion is false.

> [!example]-
> For example, if we have an argument as the following:
> $$
\begin{prooftree} 
\noLine \AXC{L $\lor$ R}
\UIC{L}
\UIC{$\lnot$ R}
\end{prooftree}
> $$
> We can create a truth table as the following:
> $$
\begin{array}{ll|l|l|l}
L & R & L \vee R & L & \neg R \\ \hline
\text { T } & \text { T } & \text { T } & \text { T } & \text { F } \\
\text { T } & \text { F } & \text { T } & \text { T } & \text { T } \\
\text { F } & \text { T } & \text { T } & \text { F } & \text { F } \\
\text { F } & \text { F } & \text { F } & \text { F } & \text { T }
\end{array}
> $$
> From the first row of the truth table, we observe that it is possible for all premises to be true while the conclusion is false. Therefore, the argument is invalid.

## Relationship with Soundness
Note that _validity doesn't mean truth_. If a promise is false, then even a valid argument can't guarantee conclusion. On the other hand, [[affirming the consequent|even when the conclusion is true, we can't guarantee that the promise is true]]. If a valid argument is also true, we say that it is [[./deductive soundness|sound]].

[^1]: Smith, Nicholas J.J.. _Logic : The Laws of Truth_, Princeton University Press, 2012. Chapter 1