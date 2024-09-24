---
created: 2024-03-30
modified: 2024-05-23
parent:
  - "[[design patterns|design patterns]]"
publish: true
tags:
  - computing/design_patterns/RAII
---

**RAII**, present in languages like C++ and Rust, automatically releases resources when they go out of scope, alleviating the need for manual management. This feature significantly reduces boilerplate code. Also, human are very bad at remembering releasing resources even with language facilities such as `defer` [^zig].

## Implementations
- C++ destructors
- [[Rust Drop trait|Rust Drop trait]]

## Shortcoming of RAII

### Discourage Bulking
One criticism of RAII is that it encourages [[coupling between behavior and data|binding lifetime of resources with lifetime of each individual domain object]]. This often is not the most optimal solution performance-wise. [^zig] Related, RAII encourage symmetric of allocation and deallocation, when it can often be more beneficial to free all memory at once (both [[garbage collector|garbage collector]] or [[arena allocator|arena allocator]] achieve that). [^2]

### Destructors and Exceptions

When combining RAII and [[stack unwinding|exceptions]], the usual requirement is that the destructors can never throw. However, this cause the problem for types like `scope_guard` which unfortunately just can't be standardized in C++.  [^3] [^4]

### Signaling Failure in Destructors
There are no way for destructors to communicate information outward (besides throwing exceptions), so as a result C++ standard library often decides to silently swallow errors in destructors [^4]


[^zig]: [Zig defer Patterns](https://matklad.github.io/2024/03/21/defer-patterns.html) ([['Zig Defer Patterns Mar 21, 2024' note|note]])
[^2]: [Untangling Lifetimes: The Arena Allocator - by Ryan Fleury](https://www.rfleury.com/p/untangling-lifetimes-the-arena-allocator)
[^3]: [Why Not Just Do Simple C++ RAII in C? | The Pasture](https://thephd.dev/just-put-raii-in-c-bro-please-bro-just-one-more-destructor-bro-cmon-im-good-for-it)
[^4]: [N3199: Improved \_\_attribute\_\_((cleanup)) Through defer](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3199.htm#cpp.compat-constructors.destructors)