---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# Stringtify Arguments of C Macro
We can use `#` inside a macro to stringtify argument to macros.

For example,
```c
#define STRINGIZE(x) #x
const char* str = STRINGIZE(12);
```

generates
```c
const char* str = "12";
```