---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# Substitution

**Substitution** gives meaning to variables. Intuitively, a substitution $[b / x] a$ changes all variable $x$ in $a$ to $b$.

> [!definition]
substitution is defined as following
> 1. $[b / x] x=b$ and $[b / x] y=y$ if $x \neq y$.
> 2. $[b / x] o\left(a_1 ; \ldots ; a_n\right)=o\left([b / x] a_1 ; \ldots ;[b / x] a_n\right)$ (where $o$ is an operator).

> [!example]
> $$
> [\text{num}[2] / x] \operatorname{plus}(x ; \operatorname{num}[3])=\operatorname{plus}(\operatorname{num}[2] ; \operatorname{num}[3]) .
> $$

## References
- [[Practical Foundations for Programming Languages#Chapter 1|Practical Foundations for Programming Languages Chapter 1]]

---
parent: [[./programming languages MOC|programming languages MOC]]
tags: #computer/PL