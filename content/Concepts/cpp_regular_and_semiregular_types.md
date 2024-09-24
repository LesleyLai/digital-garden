---
Aliases:
  - c++ regular types
  - c++ semiregular types
  - regular and semiregular types in c++
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# Regular and Semiregular Types in C++
A regular type is a type that behave likes an int. In which it is
-   default constructible
-   support all of the special member functions
-   swappable
-   and equality comparable

A semi-regular type is the same to the regular type except there are no requirement on equality comparable:
```c++
namespace std {
  template <class T>
  concept semiregular = std::copyable<T> && std::default_initializable<T>;

  template <class T>
  concept regular = std::semiregular<T> && std::equality_comparable<T>;
}
```

---
parent: [[./cpp-concepts|C++ Concepts]]
tags: #computing/cpp/concepts