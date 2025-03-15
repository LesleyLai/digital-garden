---
parent:
  - "[[generator|generator]]"
  - "[[Python|Python]]"
tags:
  - computing/python
created: 2024-10-26
modified: 2024-10-31
aliases:
  - Python generator expression
publish: true
---
We can write generators in Python like the following:
```python
def infinite_sequence():
    x = 0
    while True:
        yield x
        x += 1
```

The result generator object can be repeatedly invoked with `.next()` to get the next value:
```python
seq = infinite_sequence()
next(seq) # 0
next(seq) # 1
next(seq) # 2
```

Python generator are [[Python iterables|iterables]], so we can do something like this:
```python
for i in infinite_sequence():
    print(i)
    # Note that this loop will not terminate since the generator above is infinite
```
## Generator Expressions
Python has a shorthand syntax for producing generators. The syntax is very similar to [[./python comprehension|list comprehension]], though it uses paranthesis:
```python
generator = (x ** 2 for x in range(10)) 
```

The generator expression doesn't seems to be able to express "infinite" generators.