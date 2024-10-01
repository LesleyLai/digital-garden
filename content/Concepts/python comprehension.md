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
modified: 2024-05-16
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