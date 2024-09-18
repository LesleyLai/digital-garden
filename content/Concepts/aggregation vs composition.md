---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - computer/OOP
  - computer/architecture
---
In the UML diagram, there is a distinction between [[object aggregation|aggregation]] and [[./object composition|composition]]. In most garbage collected programming languages, there are no difference in code between them. However, composition implies [[ownership|ownership]] while aggregation does not.

```cpp
struct Composition {
  T1 v1;
  std::unique_ptr<T2> v2;
};

struct Aggregation {
  T* v = nullptr; // non-owning
};
```

## References
- [Difference Between Aggregation and Composition in UML](https://www.guru99.com/uml-aggregation-vs-composition.html)
