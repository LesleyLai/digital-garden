---
tags:
  - math/LinearAlgebra/orthogonality
  - math/functions
generalizations:
  - "[[orthogonal|orthogonal vectors]]"
parent:
  - "[[function space|function space]]"
created: 2024-10-11
modified: 2024-10-11
publish: true
---
For functions $f$ and $g$ defined on $[a, b]$, we can define their [[L2 inner product of functions|inner product]] as
$$
\langle f,\, g \rangle = \int_a^b f_1(x) f_2(x) \, dx 
$$

And two functions are **orthogonal** on $[a, b]$ if
$$
\langle f,\, g \rangle = 0.
$$

> [!example]- Example: $f(x)=\sin (3 x), g(x)=\cos (3 x)$.
> $$
> \int_{-\pi}^\pi \sin (3 x) \cos (3 x) d x=0
> $$
> since $\sin (3 x) \cos (3 x)$ is odd and the interval $[-\pi, \pi]$ is symmetric about 0 . Thus $f(x)=\sin (3 x)$ and $g(x)=\cos (3 x)$ are orthogonal on $[-\pi, \pi]$.

## Related
- [[./Fourier series|Fourier series]] - where each term is orthogonal to all other terms
## References
- [Orthogonal Functions and Fourier series](https://ms.mcmaster.ca/courses/20102011/term4/math2zz3/Lecture1)