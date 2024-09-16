---
aliases:
  - supremum
  - supremum property
created: 2023-05-30
modified: 2024-04-06
publish: true
tags:
  - math/analysis
---

# Least Upper-bound Property
## Least Upper Bound
Definition: Let $E$ be a subset of $\mathbb{R}$, and $M$ be a real number. We say that $M$ is a _least upper bound_ for $E$ iff
- $M$ is an upper bound for $E$
- any other upper bound $M'$ for $E$ must be larger than or equal to $M$.

## Least Upper Bound Property
Empty set does not have a least upper bound.
There always exist *exact one* least upper bound for any non-empty set that has an upper bound (existence and uniqueness).

Least upper bound property can be used to develop the idea of [[limit|limit]]

## Supremum
Define $sup(E)$ to be the least upper bound of $E$ if $E$ has a least upper bound.
If $E$ is a non-empty set with no upper bound, $sup(E) = \infty$.
If $E$ is an empty set, $sup(E) = -\infty$.

## Greatest Lower Bound and Infimum
The definitions of /greatest lower bound/ and /infimum/ are similar to above.

## Prove that there is a Real Number $x$ such that $x^2 = 2$
- Construct a set $E$ to be all none-negative real numbers whose square root is less than 2
- We can apply the least upper bound property because $E$ is not empty ($1 \in E$) and $E$ is upper bounded by 2
- We get $x = \sup(E)$, and we prove $x^2 = 2$
- We can prove by contradiction.
  For example, if $x < 2$, we can find a small number $\epsilon$ s.t. $x + \epsilon \in E$