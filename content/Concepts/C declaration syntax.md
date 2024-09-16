---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[the C programming language|the C programming language]]"
  - "[[C++|C++]]"
publish: true
tags:
  - "#computer/c/syntax"
---

# The C Declaration Syntax

C took an unusual approach for its declaration syntax. In C, one can write an expression involving the item being declared, and states what type that expression will have. [^go]

E.g., 
- `int *p` is a int pointer because `*p` is an `int`
- `int a[3]` is an integer array because `a[3]` is an `int`

For functions, originally C's function declaration syntax was like the following
```c
int main(argc, argv)
    int argc;
    char *argv[];
{ /* ... */ }
```
so `int main(argc, argv)` is a function because `main(argc, argv)` returns an `int`.

For more complicated examples, C's declaration read like a spiral [^spiral].

[^go]: [Go's Declaration Syntax](https://go.dev/blog/declaration-syntax) ([['Go's Declaration Syntax' note|note]])
[^spiral]: [Clockwise/Spiral Rule](https://c-faq.com/decl/spiral.anderson.html)