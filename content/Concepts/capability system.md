---
aliases:
  - programming langauge capabilities
  - permission system in package manager
created: 2024-02-22
modified: 2024-05-01
parent:
  - "[[pl design|pl design]]"
publish: true
tags:
  - computer/PL/idea
---

# Capability System

With a capacity system, OS resources must be accessed with explicit permission. This can be a good way to counter supply chain attack.

Lesley: Programmers should be required to explicitly enable those permissions for each package even for transitive dependencies.

[[./Deno|Deno]] and [[Austral|Austral]] are two systems that utilize a capacity system [^1].

[^1]: [How Capabilities Work in Austral](https://borretti.me/article/how-capabilities-work-austral)