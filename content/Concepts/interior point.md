---
aliases:
  - exterior point
  - boundary point
  - interior of a set
  - exterior of a set
  - boundary of a set
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/topology
  - math/analysis
---

# Interior, Exterior, and Boundary Points
Let $(X, d)$ be a metric space, let $E$ be a subset of $X$, and let $x_0$ be a point in $X$.
- $x_0$ is an *interior point* of E if $\exists \; r > 0$ s.t. $B(x_0, r) \subseteq E$  (The notation $B(x_0, r)$ is a [[./ball (topology)|ball]]).
- that $x_0$ is an *exterior point* of E if $\exists \; r > 0$ s.t. $B(x_0, r) \cap E = \emptyset$.
- $x_0$ is a *boundary point* of E if it is neither an interior point nor an exterior point.
![[../interior_point.png|interior_point.png]]

The set of all interior points of E is called the *interior* of E and is denoted as $\text{int}(E)$.
The set of all exterior points of E is called the *exterior* of E and is denoted as $\text{ext}(E)$.
The set of all boundary points of E is called the *boundary* of E and is denoted as $\partial E$.