---
parent:
  - "[[Python|Python]]"
  - "[[variadic functions|variadic functions]]"
tags:
  - computing/python
aliases:
  - Python argument packing
  - Python splat operator
  - Python kwargs
  - Python unpacking operator
  - Python variadic functions
created: 2024-10-21
modified: 2024-10-22
publish: true
---
**Variadic functions**, or officially **argument packing**, is a way to pass variable number of arguments into a function in Python.

## Using `*args` for Positional Arguments
In a variadic function, extra arguments are collected in a [[Python tuples|tuple]] that we can write as `*args` in the argument list:
```python
def my_sum(*args):
  result = 0
  for arg in args:
      result += arg
  return result

my_sum() # 0
my_sum(1, 2, 3) # 6
my_sum(1, 10, 100) # 111
```

We can also have normal positional arguments along with variadic arguments. And the variadic argument does not necessarily to be called `arg`:
```python
def my_sum2(first, *rest):
  return first + sum(rest)

my_sum2() # Error
my_sum2(1, 2, 3) # 6
my_sum2(1, 10, 100) # 111
```

## Using `**kwargs` for Keyword Arguments
Functions can also accept a variable number of keyword arguments. We can pass to function a `**kwargs`, which has the type of a `dict`.
```python
def my_sum3(first, *rest, **kwargs):
  if kwargs["debug"]:
    print(first, rest)
  return first + sum(rest)

 # print "1, (2, 3)" and then returns 6
my_sum3(1, 2, debug = True)
```

## Unpacking with `*` and `**`
`*` and `**` can also be used as **unpacking operators** to unpack [[Python iterables|iterables]] and dictionaries, correspondingly. For example,
```python
my_list = [1, 2, 3]
print(*my_list) # 1 2 3
```
will unpack the call statement into `print(1, 2, 3)`.

If we unpacking a wrong number of element as arguments to pass into a function, Python will complain:
```python
def my_sum(a, b, c):
    print(a + b + c)

my_list = [1, 2, 3, 4]
my_sum(*my_list) # Error
```

We can even use multiple unpack operators in a single expression and we can use them in places other than function call. For example:
```python
xs = [1, 2, 3]
ys = [11, 22, 33]
[*xs, *ys] # [1, 2, 3, 11, 22, 33]
```

Another cool use of the unpack operator is to "pattern match" Python list into different parts:
```python
my_list = [1, 2, 3, 4, 5, 6]

a, *b, c = my_list
# a = 1, b = [2, 3, 4, 5], c = 6
```

Remember that `*` works for _any_ iterable object rather than just lists and tuples. For example, we can use it to unpack strings:
```python
[*"Lesley"] # ['L', 'e', 's', 'l', 'e', 'y']
```

For dictionaries, the unpack operator `**` works similarly. For example, we can merge two dictionary with the following:
```python
my_first_dict = {"A": 1, "B": 2}
my_second_dict = {"C": 3, "D": 4}
my_merged_dict = {**my_first_dict, **my_second_dict}

print(my_merged_dict)
```

## References
- [Python args and kwargs: Demystified – Real Python](https://realpython.com/python-kwargs-and-args)