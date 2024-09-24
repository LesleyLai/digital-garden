---
parent:
  - "[[./C++ iterators|iterators]]"
tags:
  - computing/cpp/iterator
created: 2024-01-03
modified: 2024-09-25
publish: true
---
C++ STL [[./C++ iterators|iterators]] vary considerably from the classic [[./Iterator Pattern|iterator pattern]]. According to [[Alexander Stepanov|Stepanov]], STL iterators was initially called "coordinates."

> Eventually I started talking to C++ guys and showed them coordinates and they said, “we call it iterator”. Of course they didn’t call what I had an iterator. They had some C++ code where they were trying to do CLU like iterators, heavy state procedural things instead of lightweight pointers. So, I chickened out. I said, “Yes, that’s exactly what you guys have”. I thought it was much better to win with the wrong name than lose with the right name, so the name is stuck. It’s in the standard. But again, the concept which it designates is not a concept of iterator in CLU or iterator in Python or iterator in Java. Our iterator is a generalization of a coordinate in a data structure. It’s a lightweight thing. It doesn’t _do_ anything, it just _points_ to something.

[[./C++ ranges|C++ ranges]] are closer to the classic iterator pattern than C++ iterators.

The [[flux C++ library|flux C++ library]] uses the term "cursors" to describe its iterator counterpart, though it has a different model than the STL iterator:
> Flux cursors are a generalisation of array _indices_, whereas STL iterators are a generalisation of array _pointers_.

## Resources
- [9. Iterators](https://www.jmeiners.com/efficient-programming-with-components/09_iterators.html)