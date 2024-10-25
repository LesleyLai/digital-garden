---
parent:
  - "[[compiler optimizations|compiler optimizations]]"
tags:
  - computing/compiler/optimizations
  - computing/PL
aliases:
  - tail call optimization
  - tco
  - tail recursion
  - tail-call elimination
created: 2024-10-25
modified: 2024-10-25
publish: true
---
A **tail call** is a a procedure call performed as a final operation of the procedural. A compiler can compile it as a jump operation without additional overhead associated with a normal function call. In particular, a tail call doesn't need to allocate a new [[stack frame|stack frame]].

For example, in the following example, the call to `f` is not a tail call, while the call to `g` is:
```python
def foo(x):
  f(x)
  return g(x)
```

In the following code, the call to `g` is also not a tail call:
```python
def bar(x):
  return g(x) + 10
```

While tail call optimization is often taught in the context of recursion, 
[[Graydon Hoare|Graydon Hoare]] argues that it is not the most interesting motivation for tail call:
> [!quote]+
> Recursion just muddies the waters, since a single small recursive function is usually only data driven in the most trivial sense of traversing one data structure with a constant operation per element, which usually optimizes well to a single non-recursive / imperative function traversing the same structure, with same-or-better performance than the TCO version. People do this manually all the time. TCO looks pointless given this example, an academic frill.
> 
> The better examples are lexers or direct-threaded interpreters or something, where the system is data driven in both a primary dimension (eg. the next bit of input) and a secondary dimension (frequently switching modes and changing its mind about _what code to run_ on each new bit of input). Without TCO you have to encode the mode switching in an external token and re-branch on it as well as the next bit of input. If you have TCO, the mode switches get encoded in the program counter and it literally runs faster. There's no way to beat it without TCO or [[computed goto|computed gotos]]. And TCO is less of a hassle to implement than computed gotos.

## Relation with Continuation-Passing Style
One mechanical way to transform a non-tail call into a tail-call is to perform [[continuation-passing style|CPS transformation]]. For example, for the following functions with non-tail calls:
```ocaml
let add x y = x + y

let multiply x y = x * y

let madd x y z =
  let v1 = multiply x y in (* non-tail call! *)
    add(v1, z)
```
A CPS transformation generates the following result:
```ocaml
let add x y (k: int -> 'a) = k(x + y)

let multiply x y (k: int -> 'a) = k(x * y)

let madd x y z (k: int -> 'a) =
  multiply x y (fun v1 -> add v1 z k)
```