---
created: 2024-09-05
modified: 2024-10-04
parent:
  - "[[ordinary differential equation|ODE]]"
publish: true
tags:
  - math/DifferentialEquations
---
A **characteristic equations** is an equation of degree $n$ upon which depends on the solution of a given $n$th-order [[./differential equations|differential equations]] or [[./difference equations|difference equations]]. The characteristic equations can only formed when the differential or difference equation is [[homogeneous differential equation|homogeneous]], [[./linear differential equation|linear]], and has constant coefficients. [^1]

For a differential equation
$$a_n y^{(n)} + a_{n-1} y^{(n-1)} + \cdots + a_1 y' + a_0 y = 0$$
We will have a characteristic equation of the form
$$
a_n r^{n} + a_{n-1} r^{n-1} + \cdots + a_1 r + a_0 = 0
$$
whose solutions $r_1, r_2, \dots, r_n$ are the roots from which the general solution can be formed. [^1]

## Derivation
Starting with a linear homogeneous differential equation with constant coefficients
$$a_n y^{(n)} + a_{n-1} y^{(n-1)} + \cdots + a_1 y' + a_0 y = 0$$
We can see that $y(x) = e^{rx}$ is a solution because the exponential function $f(x) = e^{rx}$ has the property that its derivative $f'(x) = r e^{rx}$ has the same shape as the original function (see [[Eigenfunction|Eigenfunction]]). In order to solve for $r$, one can substitute $y = e^{rx}$ and its derivatives into the differential equation to get
$$
a_n r^n e^{rx} + a_{n-1}r^{n-1}e^{rx} + \dots + a_1re^{rx} + a_0e^{rx} = 0
$$
Since $e^{rx}$ can never be zero, we can divide it out, and we get the characteristic equation [^1]
$$
a_n r^{n} + a_{n-1} r^{n-1} + \cdots + a_1 r + a_0 = 0
$$

## Formation of the General Solution
Solving the characteristic equation allow one to find the general solution of the differential equation. The solution depends on where the roots are at the [[./complex exponential function|complex frequency plane]], and whether there are repeated roots.

### Distinct Real Root
The [[./linear transformation|superposition principle]] of a linear system says that if $u_1, u_2, \dots$ are $n$ [[./linear independence|linearly independent]] solutions to a linear differential equation, then $c_1u_1 + c_2u_2 + \dots + c_nu_n$ is also a solution for all constant values $c_1, c_2, \dots, c_n$. Thus, if the characteristic equation has distinct real roots $r_1, \dots, r_n$, then a general solution will be of the form
$$
y(x) = c_1 e^{r_1x} + c_2 e^{r_2x} + \dots + c_n e^{r_nx}
$$
[^1]

> [!example]- Example: Solve $y'' + 5y' + 6y = 0$
> $$
> \begin{align}
> r^2 + 5r + 6 &= 0 & \text{(charastristic equation)} \\
> (r + 2)(r + 3) &= 0 \\
> r_1 = -2, r_2 = -3 \\
> y = c_1 e^{-2x} + c_2 e^{-3x}
> \end{align}
> $$

### Repeated Real Root
If the characteristic equation has a root $r_1$ that repeated $k$ times, the general solution that corresponding to $r_1$ is
$$
y(x) = e^{r_1 x} (c_1 + c_2 x + \dots + c_k x^{k-1})
$$

> [!example]+ Example $y'' + 4y' + 4y = 0$
> $$
> \begin{align}
> r^2 + 4r + 4 &= 0 \\
> (r + 2)^2 &= 0 \\
> r_1 = r_2 = -2
> \end{align}
> $$
> thus
> $$
> y = c_1 x e^{-2x} + c_2 e^{-2x}
> $$

### Complex Root
What if a root $r = \frac{-B \pm \sqrt{ B^2 - 4AC }}{2A}$ is complex? If a second-order differential equation has a characteristic equation with [[complex conjugate|complex conjugate]] roots $r_1 = a + bi$ and $r_2 = a - bi$, then the general solution is the following:
$$y(x) = c_1e^{(a + bi)x} + c_2e^{(a - bi)x}.$$

We can simplify it further with [[./Euler's formula|Euler's formula]]:
$$
\begin{align}
y(x) &= c_1e^{(a + bi)x} + c_2e^{(a - bi)x} \\
&= c_1e^{ax} (\cos{bx} + i \sin{bx}) + c_2e^{ax} (\cos{bx} - i \sin{bx}) \\
&=  e^{ax} ((c_1 + c_2)\cos{bx} + i (c_1 - c_2)\sin{bx})
\end{align}
$$
Since $c_1$ and $c_2$ are arbitrary constants that may be complex, we can substitute $c_1 + c_2$ and $i(c_1 - c_2)$ with some other constants. As a result,
$$
y(x) = e^{ax} (C_1\cos{bx} +  C_2\sin{bx})
$$
Note that both $C_1$ and $C_2$ may be complex numbers.

> [!example]- *Example*: $y'' + 4y' + 5y = 0,\ y(0) = 1,\ y'(0) = 0$
> Solve characteristic equation
> $$
> \begin{align}
> r^2 + 4r + 5 = 0 \\
> r = \frac{-4 + \sqrt{ 16 - 4 \cdot 1 \cdot 5 }}{2} = -2 \pm i
> \end{align}
> $$
> Thus,
> $$
> y = e^{-2x}(c_1 \cos(x) + c_2 \sin(x))
> $$
> Applying initial values $c_1 = 1$, $c_2 = 2$,
> $$
> y(x) = e^{-2x}(\cos(x) + 2 \sin(x))
> $$

#### Real Solutions
Sometimes we want to only find real solutions, in this case we can simplify the formula a bit further.

$y(x)$ will only be real when $c_1$ and $c_2$ are [[complex conjugate|complex conjugate]] (so $c_1 - c_2$ will be a pure imaginary and $i (c_1 - c_2))$ will be real). In that case, let
$$
c_1 = \frac{c}{2}e^{i\theta} \qquad \text{and} \qquad c_2 = \frac{c}{2}e^{-i\theta}
$$
This yields
$$
\begin{align}
y(x) &= \frac{c}{2}e^{i\theta} e^{(a + bi)x} + \frac{c}{2}e^{-i\theta} e^{(a - bi)x} \\
&= \frac{c}{2} e^{ax}\left[e^{i(\theta + bx)} + e^{-i(\theta + bx)}\right] \\
&= ce^{ax} \cos{(bx + \theta)}
\end{align}
$$
[^3]

## Relation with Eigenvectors and Eigenvalues
In linear algebra, we also have the characteristic equation in the form of
$$
A \mathbf{u} = \lambda \mathbf{u}
$$
where $\lambda$ and $\mathbf{u}$ are called [[./eigenvalues and eigenvectors|eigenvalues and eigenvectors]] of the matrix $A$, respectively. This concept is closely linked to characteristic equations in differential equations.

For a linear, homogeneous differential equation with constant coefficients:
$$a_n y^{(n)} + a_{n-1} y^{(n-1)} + \cdots + a_1 y' + a_0 y = 0$$

The characteristic equation is
$$a_n r^{n} + a_{n-1} r^{n-1} + \cdots + a_1 r + a_0 = 0$$

We can turn this nth order differential equation into a first-order [[system of differential equation|system of differential equation]] by setting $x_0 = y, x_1 = y', \dots, x_{n - 1} = y^{(n-1)}$.

This gives us:
$$x_0^{\prime}=x_1,\, x_1^{\prime}=x_2,\, \ldots,\, x_{n-2}^{\prime}=x_{n-1}$$
and
$$x_{n-1}^{\prime}=y^{(n)}=-a_{n-1} y^{(n-1)}-a_{n-2} y^{(n-2)}$$.

For example. for the equation $y^{\prime \prime \prime}+2 y^{\prime \prime}+3 y^{\prime}-\mathrm{y}=0$, we get the following system:
$$
\mathbf{x}^{\prime}=\left(\begin{array}{ccc}
0 & 1 & 0 \\
0 & 0 & 1 \\
1 & -3 & -2
\end{array}\right) \mathbf{x}
$$
The characteristic polynomial of this matrix is:

$$
\operatorname{det}\left(\begin{array}{ccc}
-\lambda & 1 & 0 \\
0 & -\lambda & 1 \\
1 & -3 & -2-\lambda
\end{array}\right)=-\left(\lambda^3+2 \lambda^2+3 \lambda-1\right)
$$
We get back the characteristic equation of the original differential equation (up to a multiplication of -1), demonstrating the direct link between the two concepts. [^2]

[^1]: [Characteristic equation (calculus) - Wikipedia](https://en.wikipedia.org/wiki/Characteristic_equation_(calculus))
[^2]: [What is the relation between the characteristic equation in linear algebra and the characteristic equation discussed in differential equations? - Quora](https://www.quora.com/What-is-the-relation-between-the-characteristic-equation-in-linear-algebra-and-the-characteristic-equation-discussed-in-differential-equations)
[^3]: - Linear Systems and Signals, 3rd Edition, 2.2