---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# Why Aren't Programming Language Specifications Comprehensive

Author: Laurence Tratt
Link: [Laurence Tratt: Why Aren't Programming Language Specifications Comprehensive?](https://tratt.net/laurie/blog/2023/why_arent_programming_language_specifications_comprehensive.html)
Tags: #Literature/Articles

---
CPython and PyPy behave differently with the following code:
```
$ cat diffs.py
print(str(0) is str(0))
$ python3 diffs.py
False
$ pypy diffs.py
True
```
## Deliberate Flexibility
- [[implementation-defined behavior|implementation-defined behavior]]

## Semi-inevitable Flexibility
e.g. timing

## Undesirable Flexibility
- [[./undefined behavior|undefined behavior]]

## Unknown Flexibility
- Not considered when designing the language
- such as [[memory model|memory model]] (how read/write memory in a concurrent environment)

## Further Reading
- [https://users.cs.utah.edu/\~regehr/papers/overflow12.pdf](https://users.cs.utah.edu/~regehr/papers/overflow12.pdf)
- [2201.07845.pdf](https://arxiv.org/pdf/2201.07845.pdf)
- [Examples of problems with integers](https://jvns.ca/blog/2023/01/18/examples-of-problems-with-integers/#example-8-compilers-removing-integer-overflow-checks)
- [Do we really need Undefined Behavior?](https://www.ralfj.de/blog/2021/11/24/ub-necessary.html)
- [Memory model (programming) - Wikipedia](https://en.wikipedia.org/wiki/Memory_model_(programming))