---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[JavaScript|JavaScript]]"
publish: true
tags:
  - computer/javascript
---

# Javascript Variable Hoisting

In Javascript, variables declared with `var` are implicitly "hoisted" to the beginning of a block.

> [!example]
The following Javascript
> ```js
> {
>   console.log(a);
>   var a = "value";
> }
> ```
> behaves as
> ```js
> {
>   var a; // Hoist.
>   console.log(a);
>   a = "value";
> }
> ```

ES6 `let` and `const` does not have this behavior.

## See also
- [[./lexical scope|static scope]]