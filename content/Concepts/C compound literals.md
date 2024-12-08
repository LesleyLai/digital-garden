---
parent:
  - "[[the C programming language|the C programming language]]"
tags:
  - computing/c
created: 2024-12-08
modified: 2024-12-08
publish: true
---
Something like the following:
```c
(struct point){.x=1, .y=1}
```

This code doesn't compile in C++. To add compound literals to a header aiming to support both C and C++, we can use the following macro:
```c
#ifdef __cplusplus  
#define COMPOUND_LITERAL(T) T  
#else  
#define COMPOUND_LITERAL(T) (T)  
#endif
```
## Reference
- [Compound literals (since C99) - cppreference.com](https://en.cppreference.com/w/c/language/compound_literal)