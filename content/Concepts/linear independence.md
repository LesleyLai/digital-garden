---
aliases:
  - linearly independent
  - linear dependence
  - linearly dependent
created: 2023-05-30
modified: 2024-06-14
parent:
  - "[[linear algebra|linear algebra]]"
publish: true
tags:
  - math/LinearAlgebra
  - math/definitions
---
# Linear Independence
> [!definition]
> 
> Let $\mathbf{v}_1, \cdots, \mathbf{v}_n$ be vectors in a [[./vector space|vector space]] V. If the only [[./linear combination|linear combination]] of the vectors satisfying
> $$
> a_1 \mathbf{v}_1 + \cdots + a_n \mathbf{v}_n = \mathbf{0}
> $$
> is the trivial linear combination (all the a's is zero), then the vectors are **linearly independent**.

## Linear Dependence Test
See: [[./rank of matrices|rank]]
Two or more vectors are linearly dependent **iff** one of the vectors is a linear combination of the others.

## Extending Linear Dependence
Let $\mathbf{v}_1, \cdots, \mathbf{v}_n$ be linearly independent vectors.
- Suppose $\mathbf{v} \notin \text{span}(\mathbf{v}_1, \cdots, \mathbf{v}_n)$. Then the vectors $\mathbf{v}, \mathbf{v}_1, \cdots, \mathbf{v}_n$ are linearly independent (see [[./linear span|span]])
- Remove a vector from $\mathbf{v}_1, \cdots, \mathbf{v}_n$ and the remaining vectors are still linearly independent

 Let $\mathbf{v}_1, \cdots, \mathbf{v}_n$ be linearly dependent vectors.
- For any vector $\mathbf{v}$ the vectors $\mathbf{v}, \mathbf{v}_1, \cdots, \mathbf{v}_n$ are linearly dependent
- At least one vector can be removed from $\mathbf{v}_1, \cdots, \mathbf{v}_n$ without changing its span.