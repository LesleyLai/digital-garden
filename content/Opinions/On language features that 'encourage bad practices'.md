---
created: 2024-03-14
modified: 2024-03-14
parent:
  - "[[my opinions|my opinions]]"
publish: true
tags:
  - "#opinion"
  - computer/PL
  - "#todo/in_progress"
---

People often lament that certain programming language features "facilitate the creation of poor code too easily." In my opinion, certain design choices that make it significantly easier to write bug (such as `goto` statement, nullable default, or lack of [[memory safety|memory safety]]) should be seriously avoided, but "people can abuse it" is not sufficient for vetoing a feature, especially if it offers substantial value.

Moreover, it is often the case that a feature being excluded under the pretext of "potential user misuse," yet the core language and standard library employ such features in a hardcoded manner regardless. I find this attitude condescending and hypocritical. [^1] Examples including the ubiquitous presence of hardcoded versions of operator overloading across nearly all programming languages including C and Java, and the lacking of generic in Go for years.

## Examples
### Operator Overloading
can be used in gratuitous fashion that make code cryptic and difficult to comprehend

E.g.
```cpp
// cross product
const vec3 result = v1 % v2;
```

I don't think this is a valid opinion. While operator overloading requires special attention to their semantics, it is trivial to obfuscate code similarly by writing functions with poor names.

The lack of operator overloading also force people to write code like the following
```js
a.add(b.multiply(c))
```

### Async Await Syntax
Easy to write blocking code when the code can be parallelized

E.g.
```js
for (const future of inputs) {
  outputs.push(await future);
}
```

IMO, the benefit of this feature (compared to a callback or continuation-based asynchronous programming style) is too big compared to this drawback.

### Hygienic Macros

Macros (as in Scheme and [[Rust Macros|Rust]]) are extremely powerful and versatile. However, I think macros are definitely easy to abuse.

Macros can also block language evolution in areas such as reflection because "we can already do that with macros." However, macros will always provide an inferior tooling experience compared to normal language features. As a result, I think languages should defer the time to add a macro feature.

## Properties
hide expensive computation

swizzling
value oriented programming

## Code folding
`#region` block
"excuse to make large file"

## Attributes

## Extension method
See: https://daedtech.com/why-i-dont-like-c-extension-methods/

[^1]: Note: It is definitely normal for languages to leave some features as hard-coded rather than perusing a generic solution. I just don't think this alone is a good reason to exclude a language feature