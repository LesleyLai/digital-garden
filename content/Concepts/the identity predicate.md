---
parent:
  - "[[predicate logic|predicate logic]]"
tags:
  - logic/predicate
created: 2024-10-15
modified: 2024-10-16
publish: true
aliases:
  - identity predicate
---
The **identity predicate** $I^2$ is a special two-place predicate in predicate logic that represents equality or sameness between two terms.

## Motivation
The need for an identity predicate arises from situations where standard predicate logic falls short in expressing certain concepts. Consider the following examples:

### Expressing Equality
For the following argument
$$
\begin{prooftree}
\AXC{The Superman is Clark Kent}
\UIC{Clark Kent is the Superman}
\end{prooftree}
$$

Intuitively, this is a [[./valid argument|valid argument]]. However, if we translate that into predicate logic language as
$$
\begin{prooftree}
\AXC{Cs}
\UIC{Sc}
\end{prooftree}
$$
it becomes [[./valid argument|invalid]].

A better approach is to use a two-place predicate, but even then the argument remains invalid:
$$
\begin{prooftree}
\AXC{Sxy}
\UIC{Syx}
\end{prooftree}
$$

### Counting Distinct Objects
$$
\text{There are at least two dogs}
$$
We may come up translations such as $\exists x Dx \land \exists y Dy$ or $\exists x \exists y \, (Dx \land Dy)$, but both will be true even when there is one dog!

We need a new construct to express those ideas.

## The Identity Predicate: $I^2$
- Syntactically, $I^2$ is like any other two-place predicate.
- Semantically, $I^2$ is special: in every model, it represents the [[./identity relation|identity relation]].
- $I^2$ is considered part of the logical vocabulary, similar to quantifiers and connectives.

We can write $I^2 \ \underline{t_1} \, \underline{t_2}$ to mean "$\underline{t_1} \text{ is identical to } \underline{t_2}$", but we more often use the abbreviations $\underline{t_1} = \underline{t_2}$. And we use $\underline{t_1} \neq \underline{t_2}$ to represent $\neg I^2 \ \underline{t_1} \, \underline{t_2}$.

## Properties
Since the identity predicate represents the [[./identity relation|identity relation]], it inherits all the properties of an identity relation:
- Reflexive: $\forall x \ (x = x)$
- Symmetric: $\forall x\,\forall y \ (x = y \to y = x)$
- Transitive: $\forall x\,\forall y\,\forall z \ ((x = y \land y = z) \to x = z)$
- [[Leibniz's law|Leibniz's law]]: $\forall x,\forall y,\forall P \ \bigl[ (x = y) \to (P(x) \leftrightarrow P(y)) \bigr]$

## The Identity Predicate and English
Return to our motivational questions.
$$
\begin{prooftree}
\AXC{The Superman is Clark Kent}
\UIC{Clark Kent is The Superman}
\end{prooftree}
$$
can be translated as
$$
\begin{prooftree}
\AXC{s = c}
\UIC{c = s}
\end{prooftree}
$$
And 
$$
\text{There are at least two dogs}
$$
can be translated as
$$
\exists x \exists y \, (Dx \land Dy \land x \neq y)
$$

> [!tip] 
> While the English work "is" sometimes mean the identity predicate, it is more often to just mean a unary predicate. For example,
> - In "Clark Kent **is** a reporter," "is" represents a unary predication ($Rc$).
> - In "Clark Kent **is** the Superman," "is" represents identity ($c = s$).

### Further Examples
#### "Alice Is the Tallest person"
Glossary
- $a$: Alice
- $Px$: $x$ is a person
- $T x y$: $x$ is taller than $y$
$$
Pa \land \forall x ((Px \land x \neq a) \to Tax)
$$
Note the the first conjunct $Pa$ ("Alice is a person") is implied from the sentence

#### "Many Owns Something that Someone Else want"
Glossary
- $P x$: $x$ is a person
- $m$: Mary
- $O xy$: $x$ owns $y$
- $W xy$: $x$ wants $y$

We can understand the sentence as "there is some x such that (Mary own x and someone else want x)." Then the whole sentence become
$$
\exists x (Omx \land \exists y (Py \land y \neq m \land W y x))
$$

#### "If Mary Owns a Beagle, then no One Else does"
Glossary
- $P x$: $x$ is a person
- $m$: Mary
- $O xy$: $x$ owns $y$
- $B x$: $x$ is a beagle
$$
\exists x (Bx \land Omx) \to \neg \exists x (Px \land x \neq m \land \exists y\ (By \land Oxy))
$$

## References
- Logic : The Laws of Truth Chapter 13