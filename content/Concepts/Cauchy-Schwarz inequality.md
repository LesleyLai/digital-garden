---
created: 2023-05-30
modified: 2024-10-07
publish: true
tags:
  - math/LinearAlgebra/norm
  - math/theorem
generalizations:
  - "[[Holder's Inequality|Holder's Inequality]]"
parent:
  - "[[inequalities|inequalities]]"
---
The **Cauchy-Schwarz inequality** states that for all vectors $\mathbf{u}$ and $\mathbf{v}$ in any [[./inner product space|inner product space]],

$$
|\langle\mathbf{u}, \mathbf{v}\rangle| \le \|\mathbf{u}\| \|\mathbf{v}\|
$$

It is considered one of the most widely used inequalities in math.

Equality in the Cauchy-Schwarz inequality (a.k.a. $|\langle\mathbf{u}, \mathbf{v}\rangle| = \|\mathbf{u}\| \|\mathbf{v}\|$) implies that the two vectors $\mathbf{u}$ and $\mathbf{v}$ are [[./linear independence|linearly dependent]]. [^1]

## Example: Euclidean Space
In an [[./Euclidean vector space|Euclidean space]] where the inner product is defined as the [[./dot product|dot product]], we have
$$
(\mathbf{u} \cdot \mathbf{v})^2
= (\|\mathbf{u}\| \|\mathbf{v}\| \cos(\theta))^2
\le (\|\mathbf{u}\| \|\mathbf{v}\|)^2
$$
where $\theta$ is the angle between $\mathbf{u}$ and $\mathbf{v}$.

Taking the square root, and we get the Cauchy-Schwarz inequality:
$$
|\mathbf{u} \cdot \mathbf{v}|
\le \|\mathbf{u}\| \|\mathbf{v}\|
$$
Further, we can see that the inequality is only equal when $\cos(\theta) = \pm1$, in which case $\mathbf{u}$ and $\mathbf{v}$ are collinear (and thus [[./linear independence|linearly dependent]]).

## Relation with The Triangle Inequality
The [[triangle inequality|triangle inequality]] is a consequence of the Cauchy-Schwarz inequality: [^1]
$$
\begin{align}
\|\mathbf{u} + \mathbf{v}\|^2 
&= \langle \mathbf{u} + \mathbf{v}, \mathbf{u} + \mathbf{v} \rangle && \\
&= \|\mathbf{u}\|^2 + \langle \mathbf{u}, \mathbf{v} \rangle + \langle \mathbf{v}, \mathbf{u} \rangle + \|\mathbf{v}\|^2 ~ && ~ \text{ where } \langle \mathbf{v}, \mathbf{u} \rangle = \overline{\langle \mathbf{u}, \mathbf{v} \rangle} \\
&= \|\mathbf{u}\|^2 + 2 \operatorname{Re} \langle \mathbf{u}, \mathbf{v} \rangle + \|\mathbf{v}\|^2 && \\
&\leq \|\mathbf{u}\|^2 + 2|\langle \mathbf{u}, \mathbf{v} \rangle| + \|\mathbf{v}\|^2 && \\
&\leq \|\mathbf{u}\|^2 + 2\|\mathbf{u}\|\|\mathbf{v}\| + \|\mathbf{v}\|^2 ~ && ~ \text{ using CS}\\
&=(\|\mathbf{u}\| + \|\mathbf{v}\|)^2. && 
\end{align}
$$
Taking square roots gives the triangle inequality:
$$\|\mathbf{u} + \mathbf{v}\| \leq \|\mathbf{u}\| + \|\mathbf{v}\|.$$


[^1]: [Cauchy–Schwarz inequality - Wikipedia](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Schwarz_inequality)