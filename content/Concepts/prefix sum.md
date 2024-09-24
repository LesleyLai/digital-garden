---
aliases:
  - scan
  - exclusive scan
  - inclusive scan
created: 2024-05-12
modified: 2024-05-12
parent:
  - "[[sequence algorithms|sequence algorithms]]"
publish: true
tags:
  - "#computing/AlgorithmsAndDataStructures/sequence"
---

# Scan
**Scan**, or **Prefix Sum**
- Input
  - Array of n elements: $[a_0, a_1, \dots, a_{n-1}]$
  - [[semigroup|binary associate operator]]: $\bigoplus$
  - Identity: $I$
- Outputs the array
  - $[I, a_0, (a_0 \bigoplus a_1), , (a_0 \bigoplus a_1 \bigoplus a_2), \dots, (a_0 \bigoplus a_1 \bigoplus a_2 \bigoplus \dots \bigoplus a_{n-2})]$

C++ STL's `std::partial_sum`, `std::exclusive_scan`, and `std::inclusive_scan` are example implementation of the scan algorithm. Note that the difference of `partial_sum` and `inclusive_scan` is that `partial_sum` [[./C++ partial_sum exclusive_scan and inclusive_scan|additionally guarantee evaluation order]].

### Exclusive Vs Inclusive Scan
Exclusive: element $j$ of the result does not include element $j$ of the input
- input: `[3 1 7 0 4 1 6 3]`
- output: `[0 3 4 11 11 15 16 22]`

Inclusive
- input: `[3 1 7 0 4 1 6 3]`
- output: `[3 4 11 11 15 16 22 25]`

To generate exclusive scan from an inclusive scan, we need to shift all element in the output to right.