---
tags:
  - computing/python
  - computing/PL/binding
parent:
  - "[[python gotchas|python gotchas]]"
  - "[[./late binding|late binding]]"
created: 2023-05-30
modified: 2024-03-14
publish: true
---
Python performs [[./late binding|late binding]] for variables used in a [[Python closure|closure]]. This means the value of variables are looked up when the closure is called. 

> [!example]+
> For example, when we write
>```python
>def create_multipliers():
>    return [lambda x : i * x for i in range(5)]
>     
>for multiplier in create_multipliers():
>    print(multiplier(2), end=' ')
> ```
> 
> We will print 5 `8`s rather than `0 2 4 6 8 `.
>
> In this case, even though 5 closures are created, they all look up `i` after the `for i in range(5)` is finished, and the value of `i` in that time is `4`.

## References
- [Common Gotchas — The Hitchhiker's Guide to Python](https://docs.python-guide.org/writing/gotchas/#late-binding-closures)
