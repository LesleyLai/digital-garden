---
created: 2023-05-30
modified: 2024-03-14
parent: 
publish: true
tags:
  - computing/system/DataRepresentaiton
---
Common use cases of fixed-point number including in banking system or the unorm and snorm representation on GPU.

Fixed-point number is not suitable if we need both small and large numbers. It can [cause problem](https://www.wsj.com/articles/berkshire-hathaways-stock-price-is-too-much-for-computers-11620168548) if the number get too large (and thus overflow).

## See Also
- [[./unorm and snorm|unorm and snorm]]