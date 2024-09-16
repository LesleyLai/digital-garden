---
aliases:
  - Hessian test
created: 2024-02-04
modified: 2024-03-14
parent:
  - "[[mathematical optimization|mathematical optimization]]"
publish: true
tags:
  - math/calculus
  - math/optimization
---

# Second Derivative Test
**Second derivative test** can be used to decide whether a [[./critical point|critical point]] is local [[./extremum|minimum]], maximum, or [[saddle point|saddle point]].

## Second Derivative Test for Functions of One Variable
To find local maximum and minimum of a function $f(x)$, we
1. find the critical points, i.e. the solutions of $f'(x) = 0$
2. test the second derivative for each critical point $x_0$
  - $f''(x_0) > 0$ means that $x_0$ is a local minimum
  - $f''(x_0) < 0$ means that $x_0$ is a local maximum
  - If $f''(x_0) < 0$, the test failed

## Second Derivative Test for Several Variables
At a critical point, we know that the first derivative is zero, so the second derivative dominates local behavior for all $\mathbf{h} \neq \mathbf{0}$ and we can remove other terms in the [[./Taylor series for multi-variable functions|Taylor expension]]:
$$
\begin{align}
f(\mathbf{a} + \mathbf{h}) &= f(\mathbf{a}) + [Df]_{\mathbf{a}} \mathbf{h} + \frac{1}{2!} \mathbf{h}^T [D^2f]_{\mathbf{a}} \mathbf{h} + O(|\mathbf{h}|^3)  \\
 &\approx f(\mathbf{a}) + \frac{1}{2} \mathbf{h}^T [D^2f]_{\mathbf{a}} \mathbf{h}
\end{align}
$$
- If $\frac{1}{2} \mathbf{h}^T [D^2f]_{\mathbf{a}} \mathbf{h} > 0$ for all $\mathbf{h} \neq \mathbf{0}$, local minimum
- If $\frac{1}{2} \mathbf{h}^T [D^2f]_{\mathbf{a}} \mathbf{h} < 0$ for all $\mathbf{h} \neq \mathbf{0}$, local maximum

We can use [[eigenvalues|eigenvalues]] to figure out the above condition.

### Second Derivative Test for Functions of Two Variables
For a function of just two variables, we can use the "trace-determinant method" to perform second derivative test for function $f(x: \mathbb{R}, y: \mathbb{R}): \mathbb{R}$.

First we find the critical points by solving the linear equations
$$
\left\{\begin{array}{l}
f_x(x, y)=0 \\
f_y(x, y)=0
\end{array}\right.
$$
Then to see if a critical point $(x_0, y_0)$ is a local maximum, minimum, or saddle point, we calculate the [[./Hessian|Hessian]]:
$$
\left[D^2 f\right]=\left[\begin{array}{ll}
f_{xx} & f_{xy} \\
f_{yx} & f_{yy}
\end{array}\right]
$$
(Note that $f_{xy} = f_{yx}$ [[./symmetry of second derivatives|if we assume the derivatives are continuous]])

Then
- If $\det \left[D^2 f\right] = f_{xx}f_{yy} - (f_{xy})^2 < 0$, we have a saddle point
- If $\det \left[D^2 f\right] > 0$ and the [[./trace of matrices|trace]] $Tr \left[D^2 f\right] = f_{xx} f_{yy} > 0$, we have a local minimum
- If $\det \left[D^2 f\right] > 0$ and $Tr \left[D^2 f\right] = f_{xx} f_{yy} < 0$, we have a local maximum
- Otherwise, we have a degenerated critical point and the test fail

>[!example]- Example: find the critical points of $w = 12x^2 + y^3 - 12xy$ and determine their type
>**Solution**:
>$$
\begin{align}
w_x &= 24x - 12y & w_{xx} = 24 \\
w_y &= 3y^2 - 12x & w_{xy} = -12 \\
&& w_{yy} = 6y
\end{align}
>$$
> To find the critical points we need to solve
> $$
\left\{\begin{array}{l}
w_x = 24x - 12y =0 \\
w_y = 3y^2 - 12x = 0
\end{array}\right.
> $$
> And we get $(x, y) = (0, 0)$ and $(1, 2)$.
> At $(0, 0)$, we have $\det \left[D^2 w\right] = -144 < 0$, so it is a saddle point
> At $(1, 2)$, we have $\det \left[D^2 w\right] = 144$ and $Tr \left[D^2 f\right] = w_{xx} w_{yy} > 0$, so it is a minimum point.