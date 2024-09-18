---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

#computer/cpp/stl #computer/cpp/17
`std::launder` is uses to avoid some undefined behavior when doing `reinterpret_cast` (due to [[strict aliasing rule|strict aliasing rule]] violation). It is useful when doing [[./Type Punning|type punning]].

`launder` is used to getting a pointer to an object from a pointer of incompatible type that I know represent the address of the first byte of the object. [^1]

`launder` is required when casting a byte array into an object. For example:
```cpp
std::byte small[small_size]; // A buffer for small buffer optimization

... // Placement new an object of S into it somewhere

S& s1 = reinterpret_cast<S&>(small); // UB
S& s2 = reinterpret_cast<S&>(std::launder(small)); // fine
```

[^1]: https://eel.is/c++draft/ptr.launder#