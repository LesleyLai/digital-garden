---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#computing/cpp/library_design"
---
**Customization point objects** are [[./cpp_regular_and_semiregular_types|semiregular]] function objects (by definition) that handles constraint ADL dispatch.

A customization point object looks like the following:

```c++
namespace detail {
    template<class A, class B>
    void swap_helper(A& a, B& b) {
        using std::swap;
        swap(a, b);
    }
}

inline constexpr auto swap =
    []<A, B>(A& a, B& b)
        requires Swappable<A> && Swappable<B>
    {
        return detail::swap_helper(a, b);
    };
```

## Read More
-   [A C++ acronym glossary](https://quuxplusone.github.io/blog/2019/08/02/the-tough-guide-to-cpp-acronyms/#cpo) by Arthur O’Dwyer
-   [Customization Point Design in C++11 and Beyond](http://ericniebler.com/2014/10/21/customization-point-design-in-c11-and-beyond/) by Eric Niebler
-   [Niebloids and Customization Point Objects](https://brevzin.github.io/c++/2020/12/19/cpo-niebloid/)by Barry Revzin