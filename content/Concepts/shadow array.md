---
created: 2024-02-07
modified: 2024-03-14
parent:
  - "[[dynamic array|dynamic array]]"
publish: true
tags:
  - computing/algorithms/DynamicArray
---

# Shadow Array
**Shadow array** is a trick to reduce the latency of [[dynamic array|dynamic array]] resizing.

In the context of dynamic arrays, a shadow array is a secondary array that is created when the primary array reaches a certain threshold of fullness. As new items are added to the primary array, multiple items are simultaneously copied to the shadow array. This incremental copying process continues until the primary array is full, at which point all of its items have already been copied to the shadow array. The primary array can then be replaced by the shadow array, which has a larger capacity. [^1]

The advantage of this approach is that it spreads the cost of copying over multiple operations, rather than incurring a single $O(n)$ cost when the array is full.

A quote from [[include C++|include C++ discord]]
> [!quote] Array of arrays can do O(1) push_back using a shadow array

[^1]:  [data structures - What is a Shadow Array - Stack Overflow](https://stackoverflow.com/questions/12300854/what-is-a-shadow-array)
## Reference
- [Complexity Answers](https://pages.cs.wisc.edu/~ealexand/cs367/NOTES/Complexity/answers.html)
- [CS 537 Notes](https://pages.cs.wisc.edu/~bart/537/lecturenotes/s17.html)