---
parent:
  - "[[latex|latex]]"
tags:
  - tools/latex
created: 2024-10-13
modified: 2024-10-13
publish: true
aliases:
  - equations in Latex
---
The `align` environment is one of the most commonly used commands to align multiple equations in LaTeX. It allows for the alignment of equations at the specified alignment point. The primary difference between align and align* is that with the * version, the equations are not numbered.

**Example**:
```latex
\begin{align*}
2x - 5y &=  8 \\
3x + 9y &=  -12
\end{align*}
```
will produces
$$
\begin{align*} 
2x - 5y &=  8 \\ 
3x + 9y &=  -12
\end{align*}
$$
## `align` Vs `aligned`
The `align` environment is a display math environment, meaning it works independently to display aligned equations across multiple lines, typically used when you want to align equations outside the context of other math environments.

On the other hand, the `aligned` environment does not initiate math mode on its own. Therefore, it must be used within another math environment, such as another `align`, `equation` or `gather`, and it only takes up the width of its content. This makes it suitable for aligning equations that are part of a larger expression. [^1]

Example usage of aligned:
```latex
\begin{equation}
\begin{bmatrix} x \\ y \end{bmatrix} = \text{solution of }
\boxed{
  \begin{aligned}
  2x - 5y &= 5 \\
  x + y &= 13
  \end{aligned}
}
\end{equation}
```
$$
\begin{equation}
\begin{bmatrix} x \\ y \end{bmatrix} = \text{solution of }
\boxed{
  \begin{aligned}
  2x - 5y &= 5 \\
  x + y &= 13
  \end{aligned}
}
\end{equation}
$$


## Long Equation
For equations longer than a line, we can use `multiline` [^2]. For example:
```latex
\begin{multline*}
f(x) = \frac{A}{2} + \frac{2A \cos{(t\omega)}}{\pi} - \frac{2A \cos{(3t\omega)}}{3\pi} + \frac{2A \cos{(5t\omega)}}{5\pi} - \frac{2A \cos{(7t\omega)}}{7\pi}\\
+ \frac{2A \cos{(9t\omega)}}{9\pi} - \frac{2A \cos{(11t\omega)}}{11\pi} + \frac{2A \cos{(13t\omega)}}{13\pi} + \dots
\end{multline*}
```
produces
$$
\begin{multline*}
f(x) = \frac{A}{2} + \frac{2A \cos{(t\omega)}}{\pi} - \frac{2A \cos{(3t\omega)}}{3\pi} + \frac{2A \cos{(5t\omega)}}{5\pi} - \frac{2A \cos{(7t\omega)}}{7\pi}\\
+ \frac{2A \cos{(9t\omega)}}{9\pi} - \frac{2A \cos{(11t\omega)}}{11\pi} + \frac{2A \cos{(13t\omega)}}{13\pi} + \dots
\end{multline*}
$$


## Centered Equations
If we just need to display consecutive equations without alignment, we can use `gather`, which will center the equations [^2]. For example:
```latex
\begin{gather*}
2x - 5y =  8 \\
3x^2 + 9y =  3a + c
\end{gather*}
```
produces
$$
\begin{gather*} 
2x - 5y =  8 \\ 
3x^2 + 9y =  3a + c
\end{gather*}
$$

[^1]: [equations - Which one should I use: \\begin{align} or \\begin{aligned}? - TeX - LaTeX Stack Exchange](https://tex.stackexchange.com/questions/8788/which-one-should-i-use-beginalign-or-beginaligned)
[^2]: [Aligning equations with amsmath - Overleaf, Online LaTeX Editor](https://www.overleaf.com/learn/latex/Aligning_equations_with_amsmath)