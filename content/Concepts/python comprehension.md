---
aliases:
  - python list comprehension
  - python dict comprehension
parent:
  - "[[Python|Python]]"
publish: true
tags:
  - computing/python
created: 2024-05-16
modified: 2025-03-11
title: Python List/Dict Comprehension
---
Something like this
```python
new_list = [expression for member in iterable if conditional]
```

Dict comprehension:
```python
>>> quote = "life, uh, finds a way"
>>> {char for char in quote if char in "aeiou"}
{'a', 'e', 'u', 'i'}
```

## Nesting
List comprehension can be used to perform "nested loops." The syntax loops like the following:
```python
new_list = [expression(item) for inner_iterable in outer_iterable for item in inner_iterable]
```

The above code is equivalent to
```python
new_list = []
for inner_iterable in outer_iterable:
    for item in inner_iterable:
        new_list.append(expression(item))
```

For example, we can use List comprehension to flatten a nested list:
```python
nested = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
[item for inner in nested for item in inner]
# Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Or perform [[Cartesian product|Cartesian product]]
```python
pairs = [(item1, item2) for item1 in list1 for item2 in list2]
```

## See Also
- [[./Python generators#Generator Expressions|generator expression]] has a similar syntax to list comprehension, but generate items lazily