---
created: 2023-05-30
modified: 2024-09-23
publish: true
tags:
  - computing/PL
  - logic/predicate
parent:
  - "[[programming languages MOC|programming languages MOC]]"
---
Intuitively, a **substitution** $e[v / x]$ changes all [[bound and free variables|free occurrence]] of the variable $x$ in $e$ to $v$.

> [!definition]
> substitution is defined as following
> 1. $x[v / x] =v$ and $y[v / x] =y$ if $x \neq y$.
> 2. $o\left(a_1 ; \ldots ; a_n\right)[v / x] =o\left( a_1[v / x] ; \ldots ; a_n[v / x]\right)$ (where $o$ is an operator).

> [!example]
> $$
>  \operatorname{plus}(x ; \operatorname{num}[3])\, [\text{num}[2] / x]=\operatorname{plus}(\operatorname{num}[2] ; \operatorname{num}[3]) .
> $$

## Notation Problem
There are various different substitution notations used in the wild:
![[../assets/substitution notations.png|substitution notations.png]]

One big problem is that the forms $e[x \mapsto v]$ and $e := v$ are frequently used for substitution, but are also widely used for another purpose: _function update_ (also called _map update_ or _storage update_):
$$
(f[x \mapsto v])(z)=\text { if } z=x \text { then } v \text { else } f(z)
$$
Some papers even use of both meaning of the same syntax in the same paper, while made them are hard to read [^1]

## References
- [[Practical Foundations for Programming Languages#Chapter 1|Practical Foundations for Programming Languages Chapter 1]]
- Smith, Nicholas J.J.. _Logic : The Laws of Truth_, Princeton University Press, 2012. Chapter 9

[^1]: [Invited Talk - Guy Steele - YouTube](https://youtu.be/dCuZkaaou0Q?si=VUxznACcfawt_df-&t=2015)