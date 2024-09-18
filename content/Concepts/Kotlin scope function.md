---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

#computer/kotlin #computer/PL/interesting_features #todo/someday 
Certain functions in Kotlin standard library such as 

There are five such functions: `let`, `run`, `with`, `apply`, and `also`.

Without using scoped function, we often need to create new variables for same tasks. This feature seems to be a good replacement of the [[fluent builder pattern|fluent builder pattern]].

- "kotlin scope functions are really good for chaining"
- "they allow writing pretty much everything as chained methods, and they make working with nullability pretty elegant imo"

# Reference
- [Scope functions](https://kotlinlang.org/docs/scope-functions.html)