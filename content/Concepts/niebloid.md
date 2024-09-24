---
tags:
  - computing/cpp/library_design
  - computing/cpp/ranges
created: 2023-05-30
modified: 2024-03-14
publish: true
---
**Niebloids** are colloquial of standard range algorithms that prevents undesirable [[Argument-dependent lookup|Argument-dependent lookup]]. They prevent ADL pull-in "more specialized" `std` algorithms instead of calling `std::ranges::` as desired algorithm. As of C++20, the only way to implement such a "function" is to use global function object (a.k.a. [[./customization point object|customization point object]]).

Below is an example from the standard [^1]:

> The entities defined in the std​::​ranges namespace in this Clause are not found by argument-dependent name lookup ([[basic.lookup.argdep]​](http://eel.is/c++draft/basic.lookup.argdep)). When found by unqualified ([basic.lookup.unqual](http://eel.is/c++draft/basic.lookup.unqual)) name lookup for the postfix-expression in a function call (\[expr.call\]), they inhibit argument-dependent name lookup.
> 
> Example 1:
```cpp
void foo() {
  using namespace std::ranges;
  std::vector<int> vec{1,2,3};
  find(begin(vec), end(vec), 2); // #1
}
```
> The function call expression at #1 invokes `std​::​ranges​::​find`, not `std​::​find`, despite that (a) the iterator type returned from `begin(vec)` and `end(vec)` may be associated with namespace std and (b) `std​::​find` is more specialized ([temp.func.order](https://eel.is/c++draft/temp.func.order)) than `std​::​ranges​::​find` since the former requires its first two parameters to have the same type. — end example]


## Read More
-   [Customization Point Design in C++11 and Beyond](http://ericniebler.com/2014/10/21/customization-point-design-in-c11-and-beyond/)  by Eric Niebler
-   [Niebloids and Customization Point Objects](https://brevzin.github.io/c++/2020/12/19/cpo-niebloid/)  by Barry Revzin


[^1]: [C++ Standard Draft Chapter 27](http://eel.is/c++draft/algorithms.requirements#2)