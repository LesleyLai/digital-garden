---
create: 2024-03-22
tags:
  - Literature/articles
  - computing/zig
  - computing/PL/ResourceManagement
link: https://matklad.github.io/2024/03/21/defer-patterns.html
author:
  - matklad.github.io
---
# Zig Defer Patterns Mar 21, 2024

## Highlights
- after writing Zig for some time, I am relatively confident that *humans are just not good at not forgetting defers*, especially when “optional” ownership transfer is at play (i.e, this function takes ownership of an argument, unless an error is returned ([View Highlight](https://read.readwise.io/read/01hsj7ntqa3avfhbwpnbp19phz))
- defer is good at discouraging RAII oriented programming. [[./content/Concepts/RAII|RAII]] encourages binding lifetime of resources (such as memory) with lifetimes of individual domain objects (such as a `String`). But often, in pursuit of performance and small code size, you want to separate the two concerns, and let many domain objects to share the single pool of resources ([View Highlight](https://read.readwise.io/read/01hsj7nhab83ykmwdzkv9me3s1))
