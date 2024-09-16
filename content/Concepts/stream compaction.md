---
created: 2024-06-02
modified: 2024-06-02
parent:
  - "[[parallel algorithms|parallel algorithms]]"
publish: true
tags:
  - "#computer/AlgorithmsAndDataStructures/parallel"
---

Given an array of elements, the *stream compaction* algorithm creates a new array with elements that meet a certain criteria, e.g. non null. It also preserve the order of original elements.

Stream compaction is widely used in path tracing, collision detection, sparse matrix compression, etc. It can also *reduce data* transferred from GPU to CPU.

The [[./STL algorithms|C++ STL]] counterpart for stream compaction is `std::copy_if`.

## Steps
1. Compute a temporary array containing 0s and 1s
2. Run [[./parallel scan|exclusive scan]] to the temporary array
3. [[gather and scatter|scatter]]
  - result of scan is index into final array
  - only write an element if temporary array has a 1
![[../stream compaction 1.png|500]]