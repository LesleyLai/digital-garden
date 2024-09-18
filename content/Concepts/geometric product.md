---
created: 2024-07-07
modified: 2024-07-09
parent:
  - "[[geometric algebra|geometric algebra]]"
publish: true
tags:
  - math/geometric_algebra
---

# Geometric Product

The **geometric product** $\mathbf{a}\mathbf{b}$ (denoted without a symbol between) is defined as the sum of a scalar from [[./dot product|dot product]] and a [[bivector|bivector]] from [[exterior product|exterior product]]:
$$
\mathbf{a} \mathbf{b} = \mathbf{a} \cdot \mathbf{b} + \mathbf{a} \wedge \mathbf{b}
$$
The geometric product create an object called [[./rotors|rotor]].

## Relationship with Dot Product and Exterior Product
We can split geometric product as the following:
$$
\begin{align}
\mathbf{a}\mathbf{b} &= \frac{1}{2}(\mathbf{a}\mathbf{b} + \mathbf{a}\mathbf{b} + \mathbf{b}\mathbf{a} - \mathbf{b}\mathbf{a}) \\
&= \frac{1}{2}(\mathbf{a}\mathbf{b} + \mathbf{b}\mathbf{a}) + \frac{1}{2}(\mathbf{a}\mathbf{b} - \mathbf{b}\mathbf{a})
\end{align}
$$

The first term does not depend on the order of arguments $\mathbf{a}$ and $\mathbf{b}$ anymore (the "symmetric" part), which the second term is called the "antisymmetric" part.

The dot product of two vectors is symmetric and is equal to the first part:
$$
\mathbf{a} \cdot \mathbf{b} = \frac{1}{2}(\mathbf{a}\mathbf{b} + \mathbf{b}\mathbf{a})
$$
And the exterior product of two vectors is antisymmetric and is equal to the second part:
$$
\mathbf{a} \wedge \mathbf{b} = 
\frac{1}{2}(\mathbf{a}\mathbf{b} - \mathbf{b}\mathbf{a})
$$

Note that the dot product contains the *cosine* of the angle between $\mathbf{a}$ and $\mathbf{b}$ while the bivector contains *sine* of the angle, so together they fully describe the angle between the vectors as well as the plane they form. [^1]

## Properties
The geometric product is defined so that vectors have inverses (i.e. $\mathbf{a} \mathbf{a}^{-1} = 1$) and have nice properties like associativity ($\mathbf{a}(\mathbf{b}\mathbf{c} ) = (\mathbf{a}\mathbf{b})\mathbf{c}$). [^1]

## Multiplication Table
Geometric product of the basis vectors $\mathbf{x}, \mathbf{y}, \mathbf{z}$ has the following multiplication table:

![[../geometric product multiplication table.png|300]]
[^1]

Note that any unit vectors times itself is $1$:
$$
\mathbf{x}\mathbf{x} = \mathbf{x} \cdot \mathbf{x} + \mathbf{x} \wedge \mathbf{x} = 1
$$
For any pair of orthonormal basis vectors, the result is just the bivector they form together:
$$
\mathbf{x} \mathbf{y} = \mathbf{x} \cdot \mathbf{y} + \mathbf{x} \wedge \mathbf{y} = \mathbf{x} \wedge \mathbf{y}
$$

## Geometric Operations with Geometric Product
### Reflection
See: [[./reflection|reflection]]
If we have a unit vector $\mathbf{a}$ and a vector $\mathbf{v}$, we can reflect the vector $\mathbf{v}$ by a plane perpendicular to $\mathbf{a}$ as following:
$$
\begin{eqnarray}R_{\mathbf{a}}(\mathbf{v}) &=& \mathbf{v}_\parallel - \mathbf{v}_\perp \\ 
 &=& ( \mathbf{v} - (\mathbf{v} \cdot \mathbf{a})\mathbf{a} ) - ((\mathbf{v} \cdot \mathbf{a}) \mathbf{a}) \\
 &=&\mathbf{v} - 2 (\mathbf{v} \cdot \mathbf{a}) \mathbf{a}\end{eqnarray}
$$
We can replace the dot product $\mathbf{v} \cdot \mathbf{a}$ with the geometric product version $\frac{1}{2}(\mathbf{v}\mathbf{a} + \mathbf{a}\mathbf{v})$: [^1]
$$
\begin{eqnarray}R_{\mathbf{a}}(\mathbf{v}) &=& \mathbf{v} - 2(\frac{1}{2}( \mathbf{v} \mathbf{a} + \mathbf{a} \mathbf{v})) \mathbf{a} \\ &= & \mathbf{v} - \mathbf{v} \mathbf{a}^2 - \mathbf{a} \mathbf{v} \mathbf{a} \\ &= & - \mathbf{a} \mathbf{v} \mathbf{a}\end{eqnarray}
$$
(where $\mathbf{a}^2 = \mathbf{a} \cdot \mathbf{a} = 1$ since $\mathbf{a}$ is a unit vector)

Thus, $- \mathbf{a} \mathbf{v} \mathbf{a}$ represents reflecting the vector $\mathbf{v}$ around $\mathbf{a}$.

### Rotation
See: [[./two reflections gives a rotation|two reflections gives a rotation]]

It turns out that if we apply two successive reflections to a vector $\mathbf{v}$ (using vector $\mathbf{a}$ and vector $\mathbf{b}$), we get **a rotation by twice the angle between the vectors $\mathbf{a}$ and $\mathbf{b}$$:

![[../two reflection gives a rotation.png|two reflection gives a rotation.png]]

Thus, to represent a rotation by twice the angle between the vectors $\mathbf{a}$ and $\mathbf{b}$, we can perform the geometric products as following: 
$-\mathbf{b} (-\mathbf{a} \mathbf{v} \mathbf{a}) \mathbf{b} = \mathbf{b} \mathbf{a} \ \mathbf{v} \ \mathbf{a} \mathbf{b}$

> [!info] The above is the formula we use when we apply a rotation with a [[./rotors|rotor]] $\mathbf{a} \mathbf{b}$.

## Related
- [[./dot product|dot product]]
- [[exterior product|exterior product]]

[^1]: [Let's remove Quaternions from every 3D Engine (An Interactive Introduction to Rotors from Geometric Algebra) - Marc ten Bosch](https://marctenbosch.com/quaternions)