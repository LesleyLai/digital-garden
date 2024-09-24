---
aliases:
  - Python assignment expression
tags:
  - computing/python
created: 2023-05-30
modified: 2024-03-14
title: Walrus Operator in Python
publish: true
---
Python 3.8 Walrus operator makes assignment an [[expression|expression]]. For example,

```python
print(is_new := True)
```

It can be useful during while loop or if statement:
```python
words = ['falcon', 'sky', 'ab', 'water', 'a', 'forest']

for word in words:
    if ((n := len(word)) < 3):
        print(f'warning, the word {word} has {n} characters')
```

## References
- [using walrus operator in Python - ZetCode](https://zetcode.com/python/python-walrus/)
- [The Walrus Operator: Python 3.8 Assignment Expressions – Real Python](https://realpython.com/python-walrus-operator)