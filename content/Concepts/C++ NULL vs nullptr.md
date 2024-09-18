---
aliases:
  - NULL Macro
  - "NULL"
  - nullptr
created: 2024-01-14
modified: 2024-03-14
parent:
  - "[[C++|C++]]"
  - "[[the C programming language|the C programming language]]"
publish: true
tags:
  - computer/cpp/BestPractice
---
`NULL` is an [[implementation-defined|implementation-defined]] macro that are consider problematic practice in C++.

## Overloading
```cpp
int f(int);
int f(int*);

f(NULL); // ambiguous
```

Worse:
```cpp
int g(long);
int g(long*);

g(NULL); // guess who get called?
```

## Optimization
  A `nullptr_t` overload can be slightly fast than a pointer overload if we know a pointer is `NULL` at compile time.

  https://godbolt.org/z/Y7xKb4

## `nullptr` In C
- The proposal: http://www.open-std.org/jtc1/sc22/wg14/www/docs/n2394.pdf
- related: [[./Type-generic macro|Type-generic macro]]
- "Conditional expressions such as `(1 ? 0 : NULL)` and `(1 ? 1 : NULL)` have different status depending how `NULL` is defined. Whereas the first is always defined, the second is a constraint violation if `NULL` has type `void*`, and defined otherwise"
- "A `NULL` argument that is passed to a `va_arg` function that expects a pointer can have severe consequences. On many architectures nowadays `int` and `void*` have different size, and so if `NULL` is just `0`, a wrongly sized arguments is passed to the function."