---
created: 2023-05-30
modified: 2024-04-20
publish: true
tags:
  - math/calculus/vector
  - math/definitions
---
Intuitively, the curl measures how much is a [[./vector field|vector field]] rotating or spinning around a point.

> [!example]+ Demonstrations
> 
> ![[../assets/curl.jpg|600]]
> 
> The following situation also has a non-zero curl:
> 
> ![[../assets/curl2.jpg|curl2.jpg]]

Curl is commonly written as [[./cross product|cross product]] $\nabla \times X$, where $\nabla$ is the [[./Del operator|Del operator]] ($\nabla=\left(\frac{\partial}{\partial u_{1}}, \frac{\partial}{\partial u_{2}}, \frac{\partial}{\partial u_{3}}\right)$) and $X$ as vector of three functions: $X(\mathbf{u})=\left(X_{1}(\mathbf{u}), X_{2}(\mathbf{u}), X_{3}(\mathbf{u})\right)$.

Then the curl is
$$
\nabla \times X:=\left[\begin{array}{l}\partial X_{3} / \partial u_{2}-\partial X_{2} / \partial u_{3} \\ \partial X_{1} / \partial u_{3}-\partial X_{3} / \partial u_{1} \\ \partial X_{2} / \partial u_{1}-\partial X_{1} / \partial u_{2}\end{array}\right]
$$

## See Also
- [[./divergence|divergence]]

## References
- [Divergence and curl: The language of Maxwell's equations, fluid flow, and more - YouTube](https://www.youtube.com/watch?v=rB83DpBJQsE)