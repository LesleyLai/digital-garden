---
aliases:
  - planes
  - plane
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[geometry|geometry]]"
publish: true
tags:
  - "#math/geometry/analytic"
---

# Equation of Planes

## Implicit Form
A plane can be given by implicit equation
$$
ax + by + cz = d
$$
(this is called the _scalar equation of planes_)

or alternatively the [[./scalar triple product|scalar triple product]]
$$
\mathbf{P_1P_2} \times \mathbf{P_1R_3} \cdot (\mathbf{x} - \mathbf{P_1}) = 0
$$
(where $\mathbf{P_1}, \mathbf{P_2}, \mathbf{P_3}$ are known points on the plane and $\mathbf{x}$ is the parameter on plane) (this is called the _vector equation of planes_)

### Derivation
To derive the above equation, we can use a [[normal vectors|normal vector]] $\mathbf{n} = [a \ b \ c]^T$ and a point $\mathbf{P} = [x_0 \; y_0 \; z_0]^T$ on the plane:

$$
\mathbf{n} \cdot(\mathbf{x}-\mathbf{P})=a\left(x-x_0\right)+b\left(y-y_0\right)+c\left(z-z_0\right)=0
$$

![[../line-equation.png|400]]

Alternatively, given three points $\mathbf{P_1}$, $\mathbf{P_2}$, and $\mathbf{P_3}$ on the plane, we can construct the normal vector with the [[./cross product|cross product]]: $\mathbf{n} = \mathbf{P_{1}P_{2}} \times \mathbf{P_{1}P_{3}}$, so we can have an equation of plane as $\mathbf{P_{1}P_{2}} \times \mathbf{P_{1}P_{3}} \cdot (\mathbf{x} - \mathbf{P_{1}})$ (or alternatively can be viewed as the [[determinant|determinant]] $\det\left(\mathbf{P_1P_2},\, \mathbf{P_1P_3},\, (\mathbf{x} - \mathbf{P_{1}})\right)$)

## Importance in Multi-variable Calculus
Equation of planes is important in multi-variable [[./calculus|calculus]] since when we go closer and closer to a [[surface|surface]], it can be approximated by a plane.

## Parametric Form
A plane can also be expressed parametrically by a base point $\mathbf{P}$ and two tangent vectors $\mathbf{s}_{1}$ and $\mathbf{s}_{2}$:
$$
f(t_{1}, t_{2}) = \mathbf{P} + t_{1}\mathbf{s}_{1} + t_{2}\mathbf{s}_{2}
$$

## See also
- [[./equation of lines|equation of lines]]
- [[./tangent space|tangent space]]

## Reference
- [[MIT OCW Multivariable Calculus#Session 8 Equations of Planes|MIT OCW Multivariable Calculus > Session 8 Equations of Planes]]