---
parent:
  - "[[the C programming language|the C programming language]]"
tags:
  - c
created: 2025-03-03
modified: 2025-03-04
publish: true
---
An identifier declared more than once can be made to refer to the same object or function by a process called **linkage**. [^1]

There are three kinds of linkage:
- _no linkage_: each declaration denotes a unique entity
- _external linkage_: each declaration denotes the same object or function entity
- _internal linkage_: similar to external linkage but limited to a single translation unit

## Linkage of Variables
A declaration’s linkage is determined by two factors: the presence of a storage-class specifier (`static` or `extern`), if any, and whether it is declared at block or file scope. By default, global variable and function declarations have _external linkage_, while local variable declarations have _no linkage_.

At file scope, the `static` specifier gives an identifier _internal linkage_. However, at local scope, it affects only the [[C storage duration and lifetime|storage duration]] rather than the linkage. We can declare a `static` function at local scope because a function does not have storage duration.

If an identifier is declared with `extern` while a prior declaration with internal or external linkage is visible, it inherits the same linkage. If no prior declaration is visible or the prior declaration had no linkage, the `extern` declaration has external linkage. For example: [^2]

```c
static int a; // internal linkage
extern int a; // inherited internal linkage

int main(void) {
  extern int b; // external linkage
  return b;
}
int b = 5; // external linkage
```

The `extern` keyword can be used to reintroduce a variable with external linkage into scope if it is shadowed by a local variable.
```cpp
int a = 4;

int main(void) {
    int a = 3;
    {
        extern int a; // refer to the global variable a rather than the local variable
        return a;
    }
}
```
## Reference
[^1]: [C23 Standard Draft](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf) 6.2.2
[^2]: Writing a C Compiler: Build a Real Programming Language From Scratch Ch 10