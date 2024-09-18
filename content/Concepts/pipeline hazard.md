---
aliases:
  - pipeline stall
  - control hazard
  - data hazard
  - structural hazard
created: 2023-06-24
modified: 2024-03-14
parent:
  - "[[performance MOC|performance MOC]]"
publish: true
tags:
  - computer/performance/cpu
---

# Pipeline Hazards
[[CPU pipelining|Pipelined architecture]] hides CPU latency. However, there are cases known as **pipeline hazards** where CPUs can't executing next instruction in the following clock cycle.

There are multiple kinds of pipeline hazards:
- _structural hazard_: multiple instructions competing the same part of the CPU
- _data hazard_: CPU is waiting an operand to be computed in the previous step
- _control hazard_: CPU can't tell which instruction to execute next

Pipeline hazards cause _pipeline stall_, where CPU need to wait idle.
![[../4ag5w5i5.bmp|4ag5w5i5.bmp]]

## Control Hazard and the Cost of Branching
CPU performs _speculated execution_ when facing [[branching|branching]], so the performance of branching highly depends on how well the CPU can predict the branch. In a 50/50 coin toss, the CPU will meet _control hazard_ since it doesn't know what branch to execute next. We can use [[./branchless programming|branchless programming]] to avoid branching in hot paths.

## References
- [Pipeline Hazards - Algorithmica](https://en.algorithmica.org/hpc/pipelining/hazards/)