---
aliases:
  - linear map
  - linear operator
  - superposition principle
  - superposition property
created: 2023-05-30
modified: 2024-08-13
publish: true
specializations:
  - "[[Laplace transform|Laplace transform]]"
tags:
  - math/LinearAlgebra
---

# Linear Transformation
A function $f$ is **linear** if it maps _vectors to vectors_, and if for all vectors $\mathbf{u}$, $\mathbf{v}$ and scalers $a$ we have
$$
\begin{align*}
     f(\mathbf{u} + \mathbf{v}) &= f(\mathbf{u}) + f(\mathbf{v}) & \text{(additive)} \\
     f(a\mathbf{u}) &= af(\mathbf{u}) & (\text{homogeneity})
\end{align*}
$$
In other word, whether we add the vectors and then apply the map, or apply the map and then add the vectors gives the same result.

![[../assets/linear_maps_preserve_vector_space_properties.jpg|linear_maps_preserve_vector_space_properties.jpg]]

The above property is sometimes called the **superposition principle** in physics and engineering.

For example, the function $f(x)=ax+bf(x)=ax+b$ is not a linear function, but instead an [[affine function|affine function]].

## Geometric Intuition
A linear map must have a _fixed origin_ and _lines must map into lines_.

![[../assets/linear_map_intuition.png|linear_map_intuition.png]]

## Usefulness
The property of linear transformation has a few advantages:
- computationally it is much easier to solve [[./system of linear equation|system of linear equation]] than the nonlinear ones
- Linear transformations can be composed as matrix multiplication
- All maps can be approximated as linear maps over a short distance/time ([[Taylor's theorem|Taylor's theorem]])