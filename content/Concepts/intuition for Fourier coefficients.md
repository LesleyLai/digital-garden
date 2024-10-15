---
parent:
  - "[[Fourier series|Fourier series]]"
tags:
  - math/fourier
created: 2024-10-13
modified: 2024-10-13
publish: true
---
We can most easily understand the origin of Fourier coefficients by examining the compact exponential form of the Fourier series:
$$
f(x) = \sum_{n = -\infty}^{\infty} D_n e^{i \ 2\pi\frac{n}{T} x}
$$
where $D_n = \frac{1}{T} \int_{x = 0}^{T} f(x)  e^{-i \ 2\pi\frac{n}{T} x} dx$.

We know that $D_0 = \frac{1}{T} \int_{0}^{T} f(x) dx$. Let's see how this integral yields $D_0$:
$$
\begin{align}
&\int_{x = 0}^{T} f(x) dx = \int_{x = 0}^{T} \sum_{n = -\infty}^{\infty} D_{{\color{green} n}} e^{i \ 2\pi\frac{{\color{green} n}}{T} x} dx \\
&= \dots +  \int_{x = 0}^{T} D_{{\color{green} -1}} e^{i \ 2\pi\frac{{\color{green} -1}}{T} x} dx + \int_{x = 0}^{T} D_{\color{green} 0} dx + \int_{x = 0}^{T} D_{{\color{green} 1}} e^{i \ 2\pi\frac{{\color{green} 1}}{T} x} dx + \dots
\end{align}
$$
All the terms except $\int_{x = 0}^{T} D_{\color{green} 0} dx$ will be zero because they complete at least one full cycle and we know that the average of a point on the circle is the origin.

Therefore:
$$
\frac{1}{T} \int_{x = 0}^{T} f(x) = \frac{1}{T}\int_{x = 0}^{T} D_{\color{green} 0} dx = D_{\color{green} 0}
$$

If we want to calculate other coefficients such as $D_2$, notice that $D_2 = \frac{1}{T} \int_{x = 0}^{T} f(x)  e^{i \ 2\pi\frac{2}{T} x} dx$ which shifts all the above integrals by $e^{{\color{red} -}i \ 2\pi\frac{{\color{red} 2}}{T} x}$. And we get
$$
\begin{align}
&\int_{x = 0}^{T} f(x)  e^{i \ 2\pi\frac{2}{T} x}  = \int_{x = 0}^{T} \sum_{n = -\infty}^{\infty} D_{{\color{green} n}} e^{i \ 2\pi\frac{{\color{green} n} {\color{red} -  2}}{T} x} dx \\
&= \dots +  \int_{x = 0}^{T} D_{{\color{green} 1}} e^{i \ 2\pi\frac{{\color{red} -1}}{T} x} dx + \int_{x = 0}^{T} D_{\color{green} 2} dx + \int_{x = 0}^{T} D_{{\color{green} 3}} e^{i \ 2\pi\frac{{\color{red} 1}}{T} x} dx + \dots \\
&= T D_{\color{green} 2}
\end{align}
$$

## References
 - [3blue1brown - But what is a Fourier series? From heat flow to circle drawings](https://www.3blue1brown.com/lessons/fourier-series)