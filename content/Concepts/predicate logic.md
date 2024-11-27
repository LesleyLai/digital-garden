---
parent:
  - "[[logic|logic]]"
tags:
  - logic/predicate
aliases:
  - first-order logic
created: 2024-09-12
modified: 2024-11-16
publish: true
---
**Predicate logic**, or **first-order logic**, is a [[./formal system|formal system]] that extends the capabilities of [[./propositional logic|propositional logic]]. It introduces the concepts of [[predicate|predicates]], variables, and [[quantifiers|quantifiers]].

In predicate logic, the notions from the propositional logic such as truth values and [[./logical connective|logical connectives]] still apply but basic propositions will be replaced with proposition involving predicates and quantifiers.

## Subtopics
- [[predicate|predicates]]
- [[quantifiers|quantifiers]]
  - [[moving quantifiers|moving quantifiers]]
  - [[./Prenex normal form|Prenex normal form]]
- [[./truth tree#In Predicate Logic|truth tree > In Predicate Logic]]

## Notations
Below is the notation used in this notes and other related notes:
- names: $a$, $b$ (lowercase letters a-t)
- predicate: $P$, $Q$ (uppercase letters A-Z)
- variables: $x$, $y$ (lowercase letters u-z)

We also use *metavariables* when we talks about forms rather than a concrete sentence:
- arbitrary well-formed formula: $\alpha$, $\beta$ (greek letters)
- arbitrary predicate: $\underline{P}$, $\underline{Q}$
- arbitrary names: $\underline{a}$, $\underline{b}$
- arbitrary variables: $\underline{x}$, $\underline{y}$

## Limitation of Propositional Logic
Consider the following argument
> “All men are mortal; Socrates is a man; therefore, Socrates is mortal.”

The argument is intuitive [[./valid argument|valid]].
 
Let's try to symbolize this into propositional logic. We can't find any connectives so all sentences become basic propositions: 
$$
\begin{align}
A&: \text{All men are mortal}, \\
B&: \text{Socrates is a man}, \\
C&: \text{Socrates is a mortal}
\end{align}
$$
$$
\begin{prooftree} 
\AXC{A, B}
\UIC{C}
\end{prooftree}
$$
Which is an invalid argument.

Let's think why the original argument is valid, intuitively. That's because it has the following structure:
$$
\begin{prooftree} 
\noLine \AXC{All Ps are Qs}
\UIC{a is P}
\UIC{a is Q}
\end{prooftree}
$$
All arguments with this structure is valid, but the propositional logic does not have construct to capture internal structure of each propositions here.
## Names and Predicates
See also: [[predicate|predicates]]

We have seen that the internal structures of basic propositions can be important. We start with the simplest kind of basic propositions and distinguish its part, name and predicates.

Let's consider the proposition "Socrates is a man." We can split it into two parts:
- **name**:  pick an individual (i.e. "Socrates")
- **predicates**: pick up a property that things may process (i.e. "is a man")

Names are usually symbolized by lowercase letters $a, b, \dots, r, s, t$ (last six letters in the alphabet are reserved for variables) and predicates will be symbolized by uppercase letters $A, B, \dots, Y, Z$. So the above proposition may be symbolize as $s M$ if we have the glossary $s: \text{Socrates}\ M: \text{is a man}$.

> [!info] We usually avoid using $I$ as a predicate name, since it is reserved for the [[./the identity predicate|identity predicate]].

A predicate can be $n-$place to represent a n-ary [[relation|relation]]. They can be denoted with superscripts attached to indicate how many platmce they are. E.g. $P^1\ \underline{x}$, $P^2\ \underline{x}\, \underline{y}$, though this is usually not necessary and clear from context.

## Variables and Quantifiers
see also: [[quantifiers|quantifiers]]

First-order logic also introduced two kinds of **quantifiers**: 
- universal quantifier: $\forall$ (forall)
  - $\forall x \ \alpha$ means "for all x, alpha is true"
- existential quantifier: $\exists$ (there exists)
  - $\forall x \ \alpha$ means "there exists an x, such that for that x, alpha is true"

Quantifiers will also introduce **variables**, which are often denoted by letters from $u$ to $z$ (though people tends to use $x, y, z$ first). If a variable is in the scope of a quantifier, it is said to be _[[bound and free variables|bound]]_. Otherwise it is said to be _free_.

## Semantics
In first-order logic, an [[interpretations (logic)|interpretation]] is more complex than in propositional logic. Instead of simply assigning truth values to basic propositions, an interpretation consists three components:o
- **Domain** (or Universe of Discourse): The set of objects that the logic talks about
- **Referents** of names (refer to an object)
- **Extension** of predicates (for which set of the objects are the predicates true)

Variables don't have a fixed referent, and what they refer to can change during evaluation.

For example, we can have an interpretation of
$$
\begin{align}
&\text{Domain}: \{ 1, 2, 3 \} \\
&a: 2,\ b: 2 \\
&P: \varnothing,\ Q: \{1, 2\}
\end{align}
$$
And under this interpretation, we can say that $Q\ a$ is true but $\forall x\ (Px \lor Qx)$ is false.

> [!note] 
> You may ask why we don't write domain as something like $\{a, b, c\}$, this is because we want to distinguish objects from names, as multiple names can refer to the same objects and objects don't need to have a name. Using numbers is a common convention.
