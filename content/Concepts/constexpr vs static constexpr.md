---
parent:
  - "[[C++|C++]]"
tags:
  - computing/cpp
created: 2024-10-18
modified: 2024-10-18
publish: true
---
Jason Turner mentioned that for data at function scope, `static constexpr` should be preferred solution over `constexpr` in most cases. [^1] 

The reason is that `constexpr` values are regular stack values [^1]. To demonstrate that `constexpr` variables are stack variables, consider the following example:

```cpp
const int* p = nullptr;
{
  constexpr std::array<int, 1000> value = get_value();
  p = &values[985];
}
// p is dangled
// If we enable asan in unoptimzed build, we will get a warning if we use p here
```

Instead, `static constexpr` will change the variable to static storage duration. [^1]

## Performance Trade off

There may be a performance trade-off to consider. For small data sizes, the `constexpr` version may offer better performance in release builds on GCC. However, for larger datasets, the `static constexpr` version tends to be significantly faster. The `static` version is also always faster on Clang or in debug build  [^2]. If performance is a concern, [[./benchmarking|benchmarking]] is recommended.

## Global Variables
For global variables, a (`static`) `constexpr` variable in a header file will cause duplication across compilation units . Instead, using `inline constexpr` is a better choice. [^3]

[^1]: [C++ Weekly - Ep 312 - Stop Using \`constexpr\` (And Use This Instead!) - YouTube](https://www.youtube.com/watch?v=4pKtPWcl1Go)
[^2]: [C++ Weekly - Ep 315 - constexpr vs static constexpr - YouTube](https://www.youtube.com/watch?v=IDQ0ng8RIqs)
[^3]: [C++ Weekly - Ep 339 - \`static constexpr\` vs \`inline constexpr\` - YouTube](https://www.youtube.com/watch?v=QVHwOOrSh3w)