---
created: 2023-05-30
modified: 2024-08-08
parent:
  - "[[propositional logic|propositional logic]]"
publish: true
tags:
  - logic/propositional
  - math/logic
---

# Logical Argument

A **logical argument** is a sequence of propositions, with the last being the conclusion and the others being premises. [^1]

It can be written as the following:
$$
\begin{prooftree} 
\noLine \AXC{premise 1}
\UIC{premise 2}
\UIC{conclusion}
\end{prooftree}
$$

The conclusion can also be marked with a $\therefore$ (therefore):
$$
\begin{align}
&\text{premise 1} \\
&\text{premise 2} \\
&\therefore \, \text{conclusion}
\end{align}
$$
## Properties
- [[./necessarily truth-preserving|necessarily truth-preserving]] (NTP) and [[./validity (logic)|validity]] (NTP just by form)
- [[./deductive soundness|soundness]]

## Related
- [[inference rules|inference rules]]


[^1]: Smith, Nicholas J.J.. _Logic : The Laws of Truth_, Princeton University Press, 2012. Section 1.3