---
parent:
  - "[[programming languages MOC|programming languages MOC]]"
tags:
  - computing/PL
created: 2025-01-30
modified: 2025-01-31
publish: true
---
A `goto` statement allows for an unconditional transfer of control to another location in the code. In most languages, its use is more restricted than a assembly jump, as it cannot cross function boundaries. However, it can still introduce risks. For example, in C, `goto` can bypass variable declarations.

A related construct, [[computed goto|computed goto]], provides greater flexibility but is also more dangerous. While not widely supported, it is sometimes used for performance-critical tasks, such as optimizing hot loops in interpreters.

## In Language Design
Modern system programming languages such as Rust, Zig, and [[./Odin (programming langauge)|Odin]] do not provide `goto` for several reasons [^1]:
- It is rarely needed. Most use cases of `goto` in C can be replaced with dedicated language constructs in these languages, such as [[labeled loops|labeled loops]] and [[./defer statement|defer]].
- Not all backends support this kind of unstructured control flow (notably [[./webassembly|wasm]] and [[SPIRV|SPIRV]]). Enforcing a [[reducible control flow graph|reducible control flow graph]] can be a better approach when targeting these platforms.
- Its semantics are problematic. In C, `goto` can bypass variable declarations, leading to [[undefined behavior|undefined behavior]].
  - This problem can be fixable by introducing new scope for each variable declaration and disallow `goto` to a outer scope. This behavior is not intuitive to programmers and is taxing to implement, though. [^1]

## See Also
- [[structured programming|structured programming]]
- [[./RAII|RAII]] and [[./defer statement|defer]] - can be used to replace some usages of `goto` as clean-up
- [[./coroutines|coroutines]]
- [[./tail call|tail call]]
- [[exception|exception]]
- [[continuation|continuation]]

[^1]: [Remove goto · Issue #630 · ziglang/zig](https://github.com/ziglang/zig/issues/630)