---
created: 2024-05-12
modified: 2024-05-12
parent:
  - "[[parallel algorithms|parallel algorithms]]"
  - "[[./prefix sum|scan]]"
publish: true
tags:
  - computing/AlgorithmsAndDataStructures/parallel
---

# Parallel Scan

For a single threaded [[./prefix sum|scan]] algorithm, we can do a for loop like this:
```cpp
out[0] = in[0];
for (int k = 1; k < n; ++k) {
  out[k] = out[k = 1] + in[k];
}
```

There are `n-1` addition for an array of length `n`.

This looks very sequential, but there are efficient parallel versions [^1].

## Naive Parallel Version
![[../assets/naive parallel scan.png|400]]

Pseudocode:
![[../assets/naive parallel scan code.png|300]]

This is an inclusive scan. And each thread writes one sum and reads two values.

![[../assets/naive parallel scan 2.png|400]]

## Work-Efficient Parallel Scan
Work-efficient parallel scan use a [[balanced binary tree|balanced binary tree]] (in concept) to perform scan in two phases
- up-sweep ([[./parallel reduction|parallel reduction]])
- down-sweep

Unlike the naive version, this is an exclusive scan.

## Up-Sweep
Same as parallel reduction
![[../assets/work efficient parallel scan up sweep.png|400]]

At this stage, imaging array as a tree
- Array stores **only left child**
- right child is the element itself
- For node at index n
  - Left child index = n / 2 (rounds down)
  - right child index = n

![[../assets/work efficient parallel scan up sweep 2.png|300]]

### Down-Sweep
- "Traverse" back down tree using **partial sums** to build the scan in place
  - Set root to zero
  - At each pass, a node passes its value to its left child, and sets the right child to the sum of the previous left child's value and its value

![[../assets/downsweep.png|400]]

Pseudocode:
![[../assets/downsweep pseudocode.png|600]]

## Complexities
- Sequential Scan $O(n)$
- Naive Parallel Scan: $O(n\log_2{n})$
- Work-Efficient Parallel Scan:
  -  Up-Sweep: $O(n)$ adds
  - Down-sweep: $O(n)$ adds $O(n)$ swaps

## References
[^1]: [Parallel Prefix Sum (Scan) with CUDA](https://developer.download.nvidia.com/compute/cuda/1.1-Beta/x86_website/projects/scan/doc/scan.pdf)