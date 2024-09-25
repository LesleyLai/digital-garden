---
created: 2024-05-12
modified: 2024-05-12
parent:
  - "[[STL algorithms|STL algorithms]]"
publish: true
tags:
  - computing/cpp/stl
---
# C++ `std::partial_sum`, `exclusive_scan`, And `inclusive_scan`

All three implements the [[./prefix sum|scan]] algorithm. The difference between `partial_sum` and `inclusive_scan` is that `partial_sum` guarantee evaluation order, so it can get deterministic result even with non-associative binary operator. On the other hand, `partial_sum` is not parallelable because of this property.