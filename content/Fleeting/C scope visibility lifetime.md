---
parent:
  - "[[the C programming language|the C programming language]]"
  - "[[scope|scope]]"
tags:
  - computing/c
aliases:
  - C variable scopes
  - Scope, visibility, and lifetime in C
title: Scope, visibility, and lifetime in C
created: 2025-02-10
modified: 2025-02-10
publish: true
---
In C, **scope** refers to the part of the _source code_ where a variable can be accessed. The **lifetime** of an _object_ is "the duration of program execution during which storage is guaranteed to be reserved for it."

> [!tip] Scope and lifetime do not always correlate. Only for variables with automatic storage duration is the lifetime of the underlying object tied to the scope of the variable.

## See Also
- [[C storage duration|storage duration]]
- [[Rust lifetime|Rust lifetime]] - In Rust, Scope and lifetime also does not have one-to-one correspondence