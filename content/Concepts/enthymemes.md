---
parent:
  - "[[logic and natural language|logic and natural language]]"
tags:
  - logic
created: 2024-10-17
modified: 2024-10-17
publish: true
aliases:
  - argument with unstated premises
---
An **enthymemes** is [[./argument|argument]] with an unstated premise. It's a common form of reasoning in everyday discourse where certain parts of the argument are left implicit.

For example, consider the following statement:
> "Socrates is mortal because he's human."

If we translate that into formal logic, we get
$$
\begin{align}
&H s \\
&\therefore \, M s
\end{align}
$$
which is clearly invalid.

The reason is that we didn't put in the unstated promise that "all humans are mortals."  If we put it into the argument, we get a valid argument:
$$
\begin{align}
&\forall x (H x \to M x) \\
&H s \\
&\therefore \, M s
\end{align}
$$