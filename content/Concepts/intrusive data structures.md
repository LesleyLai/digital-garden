---
parent:
  - "[[algorithms|data structures]]"
tags:
  - computing/algorithms
created: 2025-05-09
modified: 2025-05-09
publish: true
---
A data structure is **intrusive** if it requires help from the stored elements to function.

For example, a non-intrusive linked-list:
```cpp
template <typename T>
struct Node {
  T value;
  Node* next = nullptr;
  Node* previous = nullptr;
};

template <typename T>
struct List {
  Node* head;
  Node* tail;
};

List<int> list;
```

And below is an intrusive list:
```cpp
struct IntNode {
  IntNode value;
  IntNode* next = nullptr;
  IntNode* previous = nullptr;
};

template <typename Node>
struct List {
  Node* head;
  Node* tail;
};

List<IntNode> list;
```

# Reference
- [c++ - What does it mean for a data structure to be "intrusive"? - Stack Overflow](https://stackoverflow.com/questions/5004162/what-does-it-mean-for-a-data-structure-to-be-intrusive)