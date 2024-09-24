---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - computing/cpp
---

# Passing Overload Set in C++

The following `LIFT` macro can be used 
```cpp
#define FWD(...) std::forward<decltype(__VA_ARGS__)>(__VA_ARGS__)

#define LIFT(X) [](auto &&... args) \
    noexcept(noexcept(X(FWD(args)...)))  \
    -> decltype(X(FWD(args)...)) \
{  \
    return X(FWD(args)...); \
}
```

like this:
```cpp
std::transform(first, last, target, LIFT(foo));
```

## Reference
[Passing overload sets to functions](https://blog.tartanllama.xyz/passing-overload-sets/)