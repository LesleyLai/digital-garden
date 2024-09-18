---
Aliases:
  - shear mapping
  - shear transformation
created: 2023-05-30
modified: 2024-03-14
publish: true
---

#math/LinearAlgebra #math/geometry/transformation

---
# Sheering
*Sheering* displaces each point $\mathbf{x}$ in $\mathbf{u}$ in according to [[signed distance|signed distance]] to $\mathbf{v}$ 
$$f_{\mathbf{u}, \mathbf{v}} = \mathbf{x} + \langle \mathbf{v}, \mathbf{x} \rangle \, \mathbf{u}$$
Sheering is an [[./linear transformation|linear transformation]]. We can represent it in matrix form as
$$
A_{\mathbf{u}, \mathbf{v}} = I + \mathbf{u} \mathbf{v}^T
$$