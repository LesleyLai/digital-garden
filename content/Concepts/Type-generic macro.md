---
created: 2024-01-07
modified: 2024-03-14
parent:
  - "[[./C preprocessor|C preprocessor]]"
publish: true
tags:
  - computing/c
---

# Type-generic Macro
C11 introduces the `_Generic` keyword, to make it possible to write generic macros with the [[./C preprocessor|C preprocessor]].

For example, we create a generic `sin` macro since C does not support [[function overloading|function overloading]]:
```c
#define sin(X) _Generic((X), \
          long double: sinl, \
              default: sin,  \
                float: sinf  \
                         )(X)
```

If we use `double` instead of the `default` label here, it will be a compile-time error to use a type of `X` that does not match any of the associated types.

  This feature is not supported in C++.