---
parent:
  - "[[C++|C++]]"
publish: true
tags:
  - computer/cpp/library_design
  - computer/simd
created: 2024-04-04
modified: 2024-04-04
---
# C++ SIMD `operator==` Debate
Here is the brief summarized debate of whether [[SIMD|SIMD]] vectors should have `operator==` return a SIMD vector or a boolean
## `operator==` Should Returns a SIMD Vector Camp
- That's what state-of-arts C++ libraries do
- It's what people want for the most of times
- If returning a `bool`, it is not clear what the semantics is (all? at least one?)
- Boolean returning simd vector `operator==` can be misuse
  - e.g. `std::simd x, y, z; auto result = (x == y) * z; /* spreading here */`
- Generic code that works both on scalars and vectors need `operator==` returning vector

## `operator==` Should Returns a Bool Camp
- [[./cpp_regular_and_semiregular_types|regular types]]' `operator==` return `bool`
  - Returning a vector can break generic code which expect `operator==` to return `bool`
- Rust's [std::simd](https://doc.rust-lang.org/stable/std/simd/) does that
  - Lesley: this is related to how Rust's equality is implemented ([[Rust Eq and PartialEq traits|Eq trait]]), so in C++ the situation is different

## Third Option: `operator==` Should not Exist
That's my take. And it seems to solve a large numbers of concerns above
### Cons
- Can't easily take advantage of generic code (both the above two options do it somewhat)
- using explicit functions looks quite ugly for basic math stuff

### Fourth Option: Implicitly Convert a `simd<bool>` to `bool`
IMO just horrible

## References
- [open-std.org/jtc1/sc22/wg21/docs/papers/2023/p2892r0.pdf](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2023/p2892r0.pdf)
- [open-std.org/JTC1/SC22/WG21/docs/papers/2023/p2926r0.pdf](https://www.open-std.org/JTC1/SC22/WG21/docs/papers/2023/p2926r0.pdf)
- [The story of regularity and std::simd | Make it fast and readable!](https://mattkretz.github.io/2023/11/16/preserving-regularity.html)