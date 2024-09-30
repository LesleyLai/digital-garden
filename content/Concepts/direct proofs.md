---
parent:
  - "[[logic|logic]]"
tags:
  - math/proofs
  - logic/proofs
created: 2024-09-30
modified: 2024-09-30
publish: true
---
A **direct proof** is a proof method by applying established facts, such as [[axiom|axioms]] and existing lemmas and theorems without further assumptions. [^1]

## Logic
In logic, a direct proof means applying [^2]
1. premise
2. an instance of an [[./axiom schemas|axiom schemas]]
3. an [[./inference rules|rule of inference]]

Here is an example, given [[implication elimination|modus ponens]], and three promise $p$, $p \to q$, and $(p \to q) \to (q \to r)$, we can prove $r$ by first writing down premises and repletely applying the inference rule as following [^2]:
1. $p$ (premise)
2. $p \to q$ (premise)
3. $(p \to q) \to (q \to r)$ (premise)
4. $q$ (modus ponens: 1, 2)
5. $(q \to r)$ (modus ponens: 2, 3)
6. $r$ (modus ponens: 4, 5)

[^1]: [Direct proof - Wikipedia](https://en.wikipedia.org/wiki/Direct_proof)
[^2]: [Introduction to Logic - Chapter 4](http://intrologic.stanford.edu/chapters/chapter_04.html)