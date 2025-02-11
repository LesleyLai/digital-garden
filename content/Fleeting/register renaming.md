---
parent:
  - "[[computer architecture|computer architecture]]"
tags:
  - computing/ComputerArchitecture
publish: true
created: 2025-01-05
modified: 2025-01-05
---
**Register renaming** is an technique performed by CPUs to map limited numbers of _architecture registers_ (also called _logical registers_, e.g. `rax`, `rbx`, ...) to a larger set of _physical registers_. This process is performed dynamically during execution.
The reasons CPUs implement register renaming instead of adding available architectural registers include [^1]
- backward and forward compatibility
- more available registers increasing the number of bit needed to encode each register
- limiting the number of architectural registers reduces the cost of saving and restoring all the visible states
- to break false [[data dependency|dependencies]] between instructions that happened to use the same register names so that CPUs can process instructions out of order
## See Also
- [[register allocation|register allocation]]
[^1]: [rename - Why do register renaming, when we can increase the number of registers in the architecture? - Stack Overflow](https://stackoverflow.com/questions/59143089/why-do-register-renaming-when-we-can-increase-the-number-of-registers-in-the-ar)