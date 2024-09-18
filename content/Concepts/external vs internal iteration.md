---
aliases:
  - internal vs external iterators
  - internal iterator
  - external iterator
created: 2024-04-13
modified: 2024-04-29
parent:
  - "[[Iterator Pattern|Iterator Pattern]]"
publish: true
tags:
  - computer/design_patterns/iterator
---

# External Vs Internal Iteration

**External iterator** give you an iterator to step over [^stackoverflow]:

```java
for (Iterator iter = list.iterator(); iter.hasNext(); ) {
  Object obj = iter.next();
  // Operate on obj
}
```

Instead, **internal iterator** require you to pass a callback to run over a collection  [^stackoverflow]:

```scala
list.foreach(elem => /* do something */)
```

External iterator is the primary paradigm in [[C++ iterators|C++]] and [[./Rust iterator|Rust]].
## Pros and Cons
External iterator gives user more flexibility and explicit control on how to use the iterator. [^3] On the other hand, they are often not linking-friendly and requires to inline tons-of library code to be efficient. [^1] [^2]

Internal iterator are often easier to implement. For languages that support  [[./generator|generators]], we can implement external iterator using a convenient syntax as if we are implementing internal iterator.

## Related
- [['Iterators and Traversables' note|Iterators and Traversables]]
  - It is hard to have a bulk operation sharing an external iterator API and that is why the author want to distinguish "iterator" and "traversable"
- [[./pull parser vs push parser|pull parser vs push parser]] - can be seen an instance of this problem
- [[./generator|generators]] - can be used to implement external iterators with a convenient syntax


[^stackoverflow]: [java - External Iterator vs Internal Iterator - Stack Overflow](https://stackoverflow.com/questions/224648/external-iterator-vs-internal-iterator#224675)
[^1]: [optimization - Why would external iteration require lots of code inlining relative to internal iteration? - Programming Language Design and Implementation Stack Exchange](https://langdev.stackexchange.com/questions/2664/why-would-external-iteration-require-lots-of-code-inlining-relative-to-internal)
[^2]: [graydon2 | The Rust I Wanted Had No Future](https://graydon2.dreamwidth.org/307291.html)
[^3]: [Neal Gafter's blog: Internal Versus External Iterators](http://gafter.blogspot.com/2007/07/internal-versus-external-iterators.html?m=1)