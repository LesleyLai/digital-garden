---
tags:
  - computing/python/best_practices
parent:
  - "[[python gotchas|python gotchas]]"
created: 2023-05-30
modified: 2024-03-14
publish: true
---
Python's default arguments are only evaluated once at module loading time. Thus, every time we mutate such a default argument inside a function, the change is persistent:

```python
def append_to(element, to=[]):
    to.append(element)
    return to

my_list = append_to(12)
print(my_list) # [12]

my_other_list = append_to(42)
print(my_other_list) # [12, 42]
```

To avoid this behavior, we need to specify any non-primitive default argument as `None` and assign it a value in function if it is `None`:
```python
def append_to(element, to=None):
    if to is None:
        to = []
    to.append(element)
    return to
```

## References
- [Common Gotchas — The Hitchhiker's Guide to Python](https://docs.python-guide.org/writing/gotchas/#mutable-default-arguments)