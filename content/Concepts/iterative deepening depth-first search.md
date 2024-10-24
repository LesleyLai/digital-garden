---
aliases:
  - iterative deepening search
  - iterative deepening search
  - iterative lengthening search
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[Graph Searching Algorithms|Graph Searching Algorithms]]"
publish: true
tags:
  - "#computing/algorithms/searching"
---

# Iterative Deepening Depth-first search
**Iterative deepening search** combines the advantage of [[breadth-first search|breadth-first search]] and [[depth-first search|depth-first search]]. It performs a depth search with depth-limit 0, and if it can't find a solution, it tries depth-limit 1, 2, ...

This search algorithm only requires the memory cost of depth-first search, but can get optimal result like the breadth-first search. Thus, it is a preferred choice for [[uninformed search algorithms|uninformed search algorithms]].

There is a variant of iterative deepening search called *iterative lengthening searching* that increasing path-cost limits instead of increasing depth limits.
It is an analogy of the [[uniform-cost search|uniform-cost search]] (Dijkstra's algorithm) just like iterative deepening search is an analogy to breadth-first search.
However, this variant incurs significant overhead compares uniform-cost search.