---
created: 2024-08-26
modified: 2024-08-30
parent:
  - "[[ordinary differential equation|ODE]]"
publish: true
tags:
  - math/DifferentialEquations
---

# Separation of Variables
**Separation of variables** is a method to solve differential equations.

A DE is call **separable** if you can use isolate the two variables on opposite sides of the equation. 

> [!example]- Example: solve $y' = x(y - 1)$
> $\frac{dy}{dx} = x(y - 1)$ can be rewritten as $\frac{dy}{y - 1} = x dx$, and we can integrate both side
>$$
\int \frac{d y}{y-1}=\int x d x \ \Leftrightarrow \ \ln |y-1|+c_2=\frac{x^2}{2}+c_1
>$$
>We can amalgamate the two constants of integration into one constant:
>$$
\ln |y-1|=\frac{x^2}{2}+c_3
>$$
>Next we solve for $y$ as a function of $x$.
>
>$$
|y-1|=e^{x^2 / 2+c_3}=e^{c_3} e^{x^2 / 2}
>$$
>
>The absolute value signs can be removed, but then the right hand side might be positive or negative. We write this as
>$$
y-1= \pm e^{c_3} e^{x^2 / 2} \quad \Leftrightarrow \quad 1+ \pm e^{c_3} e^{x^2 / 2}
>$$
>Finally we replace the constant $\pm e^{c_3}$ by $C$ to get the solution
>$$
y(t)=1+C e^{x^2 / 2}
$$

## Lost Solutions
When applying the separation of variables technique, it's crucial to be aware that some solutions may be inadvertently excluded from the final result. One reason for that is assumptions made during the separation process.
> [!example] $y' = 2x(1 - y^2)$ has a trivial solution $y = 0$, but separation of variables will not find this solution
> Let's solve the equation by separation of variables
> 1. Separate variables: $\frac{d y}{(1-y)^2}=2 x d x$.
> 2. Integrate: $\quad \frac{1}{1-y}=x^2+C$.
> 3. Solve for $y$ : $\quad y=1-\frac{1}{x^2+C}$.
> The constant solution get lost at step 1, where the form $\frac{d y}{(1-y)^2}$ is only valid when $y \neq 1$.

In general, for a separable DE $y' = f(x)g(y)$, all the roots of $g(y)$ gives lost solutions.