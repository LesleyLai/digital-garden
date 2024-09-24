---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# Maxwell's Equations

- [[Gauss's law|Gauss's law]]
- [[Gauss's law for magnetism|Gauss's law for magnetism]]
- [[Faraday's law|Faraday's law]]
- [[Ampère's circuital law|Ampère's circuital law]]

## Intuition

**Maxwell's equations** is described in term of [[./divergence|divergence]] and [[./curl|curl]] and can be interpreted as such[^1]:
$$
\text{Electric field}: \textcolor{green}{\mathbf{E}}
\quad
\text{Magnetic field}: \textcolor{yellow}{\mathbf{B}}
$$
|                                                                                                                                                             |                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| $\nabla \cdot \textcolor{green}{\mathbf{E}} = \frac{\rho}{\varepsilon_{0}}$                                                                                 | Gauss's law: electric field's divergence is proportional to charge density (1) |
| $\nabla \cdot \textcolor{yellow}{\mathbf{B}} = 0$                                                                                                           | Gauss's law for magnetism: divergence of magnetic field is zero everywhere (2) |
| $\nabla \times \textcolor{green}{\mathbf{E}} = \frac{\partial \textcolor{yellow}{\mathbf{B}}}{\partial t}$                                                  | Faraday's Law                                                                  | 
| $\nabla \times \textcolor{yellow}{\mathbf{B}} = \mu_{0}\left(\mathbf{J} + \varepsilon_{0}\frac{\partial \textcolor{green}{\mathbf{E}}}{\partial t} \right)$ |      Ampère's law with Maxwell's addition                                                                          |
(1)
![[../assets/gauss law.jpg|400]]
(2)
![[../assets/Gauss's law for magnetism.jpg|Gauss's law for magnetism.jpg]]

---
tags: #physics/electromagnetism

[^1]: [Divergence and curl: The language of Maxwell's equations, fluid flow, and more - YouTube](https://www.youtube.com/watch?v=rB83DpBJQsE)