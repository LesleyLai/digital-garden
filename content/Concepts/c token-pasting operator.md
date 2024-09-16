---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

#computer/c/preprocessor
# C Token-pasting Operator
We can use `##` operator to concatenate two tokens, a process which is called _token pasting_.

For example,
```c
#define PASTE(x, y) x ## _ ## y
int PASTE(foo, bar) = 12;
```

generates
```c
int foo_bar = 12;
```