---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - math/geometry/transformation
  - "#math/LinearAlgebra"
---

# Scaling

## Scaling on Non-standard Axis

Scaling on non-standard axis can be represented as composition of rotate ($R$), diagonal scaling ($D$), rotate back ($R^T$) (recall that for [[./rotation|rotation]] $R^{-1} = R^T$):
$$
A: R^T D R
$$
$A$ is a [[./symmetric matrix|symmetric matrix]] here since $(R^T D R)^T = R^T D^T (R^T)^T = R^T D R$.