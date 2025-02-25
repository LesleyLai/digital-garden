---
parent:
  - "[[Python|Python]]"
  - "[[pattern matching|pattern matching]]"
tags:
  - computing/python
created: 2025-02-22
modified: 2025-02-23
publish: true
---
This is a quick syntax reference for Python pattern matching.

Example [^1]:
```python
match point:
    case (0, 0):
        print("Origin")
    case (0, y):
        print(f"Y={y}")
    case (x, 0):
        print(f"X={x}")
    case (x, y):
        print(f"X={x}, Y={y}")
    case _:
        raise ValueError("Not a point")
```

## Matching List
Match head and tail
```python
match list:
    case [head, *tail]:
        # do something
```
## Or Pattern
```python
match list:
    case [] | [_]:
        # list of zero or one element
    case [first, second, *tail]:
        # do something
```

## Guard
```python
match command.split():
    case [x] if x > 10:
        # do something
```


[^1]: [PEP 636 – Structural Pattern Matching: Tutorial | peps.python.org](https://peps.python.org/pep-0636/)