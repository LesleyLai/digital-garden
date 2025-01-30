---
author:
  - Arno Schödl
aliases:
  - '"split C++ iterators to border and element"'
tags:
  - computing/cpp/iterator
created: 2024-03-01
modified: 2024-03-14
---
# Why Iterators Got It All Wrong — and what We Should Use instead
This talk propose to split C++ iterator concept into "border" and "element".

[Why Iterators Got It All Wrong — And What We Should Use Instead - Arno Schödl - CppNow 2022 - YouTube](https://www.youtube.com/watch?v=TZ_m6_IGwX0)
slides: [Slideshow | Why Iterators Got It All Wrong | think-cell](https://www.think-cell.com/en/career/talks/iterators#1)

## Notes
### Iterators
- modeled after pointer
- can be either an element or border between element

### Ranges
- anything that has iterators
  - containers: own elements, deep copying, and [[deep const-ness in C++|deep constness]]
  - views: reference, shadow copying, shallow constness

#### Think-cell Ranges Library:
- `tc::sort_unique_inplace(vec)` to replace `std::sort`, `std::unique`, and `vec.erase()`

### Transform Adaptor
TODO: projection and search criterion lumped together

Can have problem when calling `.base()`

##### Filter Adaptor

filter + upper_bound
cause problem
##### Reverse Adaptor
reverse + lower_bound cause problem

### Scope of the Problem
#### Order
Any adaptor that changes order of elements can cause problems
- `base()` of element is well-defined
- `base()` of border is in general undefined
- example: `sort` adaptor

#### Removing
- Adaptor removes elements
  - elements may collapses into border
  - `base()` of element well-defined
  - `base()` of border is ambiguous
  - e.x. `filter`
#### Adding
- ex `sorted_union`

### What Do We Do?
- Separate concepts Border and Element
  - big change: no iterators in user code
  - `base()` always does right thing

case study in their codebase (1M lines): iterators do have distinct border/element roles

### Iterators Were Always Ugly
- can dereference `begin()` but not `end()`
- `end()`'s meaning depends on role
  - if border, border after all elements
  - if element, magic value to say "none"
- have to mention rng twice
  - cannot write range expression inline

### Borders and Elements
- Border
  - cannot be dereferenced
  - If not at begin, has `element_before()`
  - If not at end, has `element_aafter()`
  - range `begin()` and `end()` are borders
- TODO

- Elements
  - never `end()`, cannot `++` beyond last element
  - has `border_before()` and `border_after()`

### Conclusion
- Iterator modeled after pointers
  - low level machine concept
- Element and Border has stronger semantics
  - intent already in programmer's head
  - express intent in code
  - needed for correctness of important range functions