---
aliases:
  - std::max returns wrong value
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#computing/cpp/stl"
  - computing/API_design
---

# `std::max` Returns Wrong Value
C++ STL's '`std::max` returns the first argument when the two arguments are [[./equivalence relation|equivalent]], while it should returns the second argument.

This makes a different when two arguments are equivalent in terms of `oprator==` but not strictly equal (which is a coding anti-pattern, but such code exists).

For example, in the below code, we can easily have two person with the same name but different ages.

```c++
struct Person {
  std::string name;
  int age;

  friend bool operator==(const Person& lhs, const Person& rhs) {
    return lhs.name == rhs.name;
  }
};
```

If `std::max` returns the second argument in this case, it can preserve a few useful properties:

-   the pair `(min(x,y), max(x,y))` is either `(x,y)` or `(y,x)`,
-   if `x` and `y` are distinct, then `min(x,y)` and `max(x,y)` are distinct,
-   the function that maps `(x,y)` to `(min(x,y), max(x,y))` is a [[stable sorting|stable sorting]] function for sets of two elements.