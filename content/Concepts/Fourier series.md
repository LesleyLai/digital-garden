---
parent:
  - "[[series|series]]"
  - "[[Fourier analysis|Fourier analysis]]"
  - "[[signal processing|signal processing]]"
tags:
  - math/fourier
created: 2024-09-24
modified: 2024-10-12
publish: true
---
A **Fourier series** is a way to representing a [[periodic function|periodic function]] as a [[./linear combination|linear combination]] of (potentially infinite amount of) [[harmonic|harmonically related]] [[sinusoid|sine and cosine functions]]. It is analogous to a [[./Taylor series|Taylor series]], which expresses functions as a sum of monomial terms.

![[../assets/Fourier series.gif|A sawtooth wave represented by a successively larger sum of trigonometric terms]]

For functions that are not periodic, we need to use [[Fourier transform|Fourier transform]]. For functions of two variables that are periodic in both variables, the trigonometric basis in the Fourier series is replaced by the [[./spherical harmonics|spherical harmonics]].

## Key Features
The sinusoidal functions in Fourier series are integer multiples of a _fundamental frequency_ related to the period of the original function. Sine waves with this characteristic are referred to as [[harmonic|harmonics]].

The sine and cosine functions used in the Fourier series are [[./orthogonal functions|orthogonal]] to each other, meaning they are [[./linear independence|linearly independent]] over the interval of periodicity [^1]:

$$
\begin{gather}
\displaystyle{\frac{1}{\pi}\int \limits_{-\pi}^{\pi} {\color{black}\sin({\color{red}n} x)}{\color{black} \sin({\color{blue}m} x)} dx = \begin{cases} 1, & {\color{red}n} = {\color{blue}m} \\ 0, & {\color{red}n} \neq {\color{blue}m}\end{cases}} \\
\displaystyle{\frac{1}{\pi}\int \limits_{-\pi}^{\pi} {\color{black}\cos({\color{red}n} x)}{\color{black} \cos({\color{blue}m} x)} dx = \begin{cases} 1, & {\color{red}n} = {\color{blue}m} \\ 0, & {\color{red}n} \neq {\color{blue}m}\end{cases}} \\
\displaystyle{\frac{1}{\pi}\int \limits_{-\pi}^{\pi} {\color{red}\sin({\color{red}n} x)}{\color{blue} \cos({\color{blue}m} x)} dx =0}
\end{gather}
$$

## Trigonometric Form

The Fourier series can be defined in several different ways. The most common way is as a sum of sine and cosine terms.

> [!definition] Fourier Series, Trigonometric Form
> The Fourier series of a periodic function $f(x)$ of [[frequency and period of waves|period]] $T$ is
> $$
>f(x) = \frac{A_0}{2} + \sum_{n = 1}^\infty \left( A_n \cos{\left( 2\pi   \frac{n}{T} x\right)} + B_n \sin{\left( 2\pi \frac{ n }{T} x \right)} \right)
> $$
>
> for some set of **Fourier coefficients** $A_n$ and $B_n$ defined by the integrals
> $$
> \begin{aligned}
> A_n &= \frac{2}{T}\int_{x = 0}^T f(x) \cos{\left( 2\pi \frac{n}{T} x\right)}dx \\
> B_n &= \frac{2}{T}\int_{x = 0}^T f(x) \sin\left( 2\pi \frac{ n }{T} x \right) \, dx
> \end{aligned}
> $$

We often refer to the cosine terms as the "even part" and the sine terms as the "odd part". An insight from decomposing [[./even and odd functions#Even and Odd Decomposition|decomposing Fourier series into even and odd components]] is that when $f$ is even or odd, we can simplify the Fourier series:
- for even functions, $B_n = 0$ and $f(x) = \frac{A_0}{2} + \sum_{n = 1}^\infty A_n \cos{\left( 2\pi   \frac{n}{T} x\right)}$
- for odd functions, $A_n = 0$ and $f(x) = \sum_{n = 1}^\infty A_n \sin{\left( 2\pi \frac{n}{T} x\right)}$

> [!info]+ Notation Variations
> Different sources may use alternative notations:
> 1. Some use $t$ instead of $x$ as the variable.
> 2. Lowercase letters $a_n$ and $b_n$ may be used instead of $A_n$ and $B_n$.
> 3. $A_0$ is sometimes defined as $\frac{1}{T}\int_{0}^T f(x)dx$ to avoid dividing by 2 in the main series.
> 4. The integration limits may be from $-\frac{T}{2}$ to $\frac{T}{2}$ rather than from $0$ to $T$.
> 5. The [[angular frequency|angular frequency]] $\omega = \frac{2\pi}{T}$ may be used for simplification.
>
> An equivalent formulation incorporating some of these variations is:
> $$
> f(t) = a_0 + \sum_{n = 1}^\infty \left( a_n \cos{(n\omega t)} + b_n \sin{(n\omega t)} \right)
> $$
> where
> $$
> \begin{align}
> a_0 &= \frac{1}{T} \int_{x = -\frac{T}{2}}^{\frac{T}{2}} f(t) dt \\
> a_n &= \frac{2}{T}\int_{x = -\frac{T}{2}}^{\frac{T}{2}} f(t) \cos{\left( 2\pi \omega x\right)}dt \\
> a_n &= \frac{2}{T}\int_{x = -\frac{T}{2}}^{\frac{T}{2}} f(t) \sin{\left( 2\pi \omega x\right)}dt
> \end{align}
> $$

## Alternative Representations
### Compact Trigonometric Form
If we perform some phase shift, we can combine the sine and cosine terms
> [!definition] Fourier Series, Compact Trigonometric Form
> $$
> f(x) = C_0 + \sum_{n = 1}^\infty C_n \cos{\left( 2\pi \frac{n}{T} x + \theta_{n} \right)}
> $$
> where 
> - $C_0 = 2A_0$
> - $C_n = \sqrt{ A_n^2 + B_n^2 }$
> - $\theta_n = \arctan(-B_n/A_n)$

This form direct represent the amplitude ($C_n$) and [[phase (waves)|phase]] ($\theta_n$) for each harmonic.

### Compact Exponential Form
Another way to represent the Fourier series is by combining terms via the [[./Euler's formula|Euler's formula]]:

> [!definition] Fourier Series, Compact Exponential Form
> $$
> f(x) = \sum_{n = -\infty}^{\infty} D_n e^{i \ 2\pi\frac{n}{T} x}
> $$
> where
> - $D_n = \frac{1}{T} \int_{x = 0}^{T} f(x)  e^{-i \ 2\pi\frac{n}{T} x} dx$

## Complex Fourier Series
One of the great advantage of the compact exponential form of the Fourier series is that it gives us new insight of the Fourier Series as a [[./linear combination|linear combination]] of [[circular motion|circular motions]] on a complex plane. [^2]

Consider a single term in the Fourier series: $D_n e^{i2\pi\frac{n}{T}x}$:
- the Fourier coefficient $D_n$ is the radius of the circle
- the term $2\pi\frac{n}{T}$ is the [[angular frequency|angular frequency]] of the circular motion
- As $x$ increase, the term $e^{i2\pi\frac{n}{T}x}$ causes a rotation in the complex plane. Positive $n$ values result in counterclockwise rotation, while negative $n$ values lead to clockwise rotation.

![[../assets/complex Fourier series.png|complex Fourier series.png]]
## Where Do Fourier Coefficients Come from
We can most easily understand the origin of Fourier coefficients by examining the compact exponential form of the Fourier series.

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

If we want to calculate other coefficients such as $D_2$, notice that
$D_2 = \frac{1}{T} \int_{x = 0}^{T} f(x)  e^{i \ 2\pi\frac{2}{T} x} dx$ which shifts all the above integrals by $e^{{\color{red} -}i \ 2\pi\frac{{\color{red} 2}}{T} x}$. And we get
$$
\begin{align}
&\int_{x = 0}^{T} f(x)  e^{i \ 2\pi\frac{2}{T} x}  = \int_{x = 0}^{T} \sum_{n = -\infty}^{\infty} D_{{\color{green} n}} e^{i \ 2\pi\frac{{\color{green} n} {\color{red} -  2}}{T} x} dx \\
&= \dots +  \int_{x = 0}^{T} D_{{\color{green} 1}} e^{i \ 2\pi\frac{{\color{red} -1}}{T} x} dx + \int_{x = 0}^{T} D_{\color{green} 2} dx + \int_{x = 0}^{T} D_{{\color{green} 3}} e^{i \ 2\pi\frac{{\color{red} 1}}{T} x} dx + \dots \\
&= T D_{\color{green} 2}
\end{align}
$$
[^2]

[^1]: [Purrier Series (Meow) and Making Images Speak – Bilim Ne Güzel Lan](https://bilimneguzellan.net/en/purrier-series-meow-and-making-images-speak/)
[^2]: [3blue1brown - But what is a Fourier series? From heat flow to circle drawings](https://www.3blue1brown.com/lessons/fourier-series)