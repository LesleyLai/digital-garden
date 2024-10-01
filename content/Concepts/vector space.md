---
aliases:
  - "#math/LinearAlgebra/VectorSpace"
  - vector spaces
created: 2023-05-30
modified: 2024-06-14
parent:
  - "[[linear algebra|linear algebra]]"
publish: true
specializations:
  - "[[Euclidean vector space|Euclidean vector space]]"
  - "[[function space|function space]]"
  - "[[normed vector space|normed vector space]]"
tags:
  - math/LinearAlgebra/VectorSpace
  - math/definitions
---
# Vector Space
Informally, when we add or multiply vectors in a **vector space**, the result vector stay in the space. In other word, the [[./linear combination|linear combination]] of vectors in vector space is still in that vector space.

> [!definition]
> 
> **vector spaces** are a set of objects $V$, called *vectors*, with the operations *scalars multiplication* and *addition*, and a special member *zero* $\mathbf{0} \in V$, that satisfy the following properties:
>
> For any vectors $\mathbf{u}$, $\mathbf{v}$, $\mathbf{w}$, and scalars $a$, $b$:
>- $a \mathbf{v} \in V$ and $\mathbf{u} + \mathbf{v} \in V$ ([[./closure property of vectors|closure property]])
>- $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$ ([[commutativity|commutativity]])
>- $\mathbf{u} + (\mathbf{v} + \mathbf{w}) = (\mathbf{u} + \mathbf{w}) + \mathbf{w}$ ([[associativity|associativity]])
>- $\exists \; \mathbf{0}$ s.t. $\mathbf{v} + \mathbf{0} = \mathbf{0} + \mathbf{v} = \mathbf{v}$
>- $\forall \; \mathbf{v} \ \exists -\mathbf{v}$ s.t. $\mathbf{v} + (-\mathbf{v}) = \mathbf{0}$
>- $1 \mathbf{v} = \mathbf{v}$
>- $a(b\mathbf{v}) = (ab)\mathbf{v}$
>- $a(\mathbf{u} + \mathbf{v}) = a \mathbf{u} + a \mathbf{v}$
>- $(a + b)\mathbf{v} = a\mathbf{v} + b\mathbf{v}$

A vector space that is contained in another vector space is called a [[./subspaces|subspace]]. And the [[./four fundamental subspaces|four fundamental subspaces]] are the most important subspaces to study.

>[!info]
>Every vector space is a [[./metric space|metric space]] with $d(\mathbf{x}, \mathbf{y}) = \| \mathbf{x} - \mathbf{y} \|$

## Properties
- [[./linear span|span]]
- [[./basis|basis]]
- [[./dimension of a vector space|dimension]]