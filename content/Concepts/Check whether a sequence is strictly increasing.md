---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

#computer/cpp #computer/python #computer/puzzle
Here is a list of implementation of strictly/[[monotonic sequence|monotonic]] increasing/decresing checkers in different languages.
All the implementation checks for strictly increasing, but they can be easily adapted.

## C++
The C++ solution uses [[std_adjacent_find|std::adjacent_find]]:
```cpp
template <std::ranges::range R>
bool is_strict_increasing(const R& r) {
	return std::ranges::adjacent_find(r, std::greater_equal<>{}) == r.end();
}
```

## Python
The Python implementation uses `zip`:
```python
def strictly_increasing(l):
         return all(x<y for x, y in zip(l, l[1:]))
```