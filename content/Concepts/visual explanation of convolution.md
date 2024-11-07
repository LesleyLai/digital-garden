---
parent:
  - "[[convolution|convolution]]"
tags:
  - math/convolution
created: 2024-11-07
modified: 2024-11-07
publish: true
---
There are multiple ways to visualize the convolution operation, each gives unique insights.

## Flip-and-slide
Discrete convolution is often visualized as flipping one of the input signals (we call it the kernel or filter) and using it as [[weighted average|weights]] to compute a [[moving average|moving average]] over another signal.
![[../assets/discrete_convolution_visualization.gif|400]]

Similarly, continuous convolution can be visualized by a similar process where the result $(f * g)(t)$ represents the overlapping area between two functions. In this visualization:
1. The variable $t$ can be interpreted as the amount of "sliding" between the two functions (can also think of it as the _time_ passed)
2. The dummy variable $\tau$ represents the integration variable, allowing us to calculate the overlapping area (integrate) at each point of the sliding process.

![[../assets/Convolution_of_box_signal_with_itself2.gif|Convolution_of_box_signal_with_itself2.gif]]

## Diagonal Sum

An alternative visualization of the convolution theorem is to view values of the results as a sum or integral of a diagonal element when we lay the input into 2 dimension. [^1] This visualization leads to some interesting insides such as [[./polynomial multiplication as convolution|treating polynomial multiplication as convolution]] [^2].

In the discrete case, we have a straightforward sum:
![[../assets/diagonal slice discrete convolution.png|600]]

In the continuous case, the convolution is the area under the curve traced by the diagonal line divided by $\sqrt{ 2 }$. [^1]
![[../assets/continuous convolution visualization diagonal.png|400]]

> [!info]
> The reason that we have that $1 / \sqrt{ 2 }$ is that the step size on the diagonal line is multiplied by $\sqrt{ 2 }$ compared to the x or y axis. 
> ![[../assets/convolution Riemann sum.png|300]]
> Think the [[Riemann sum|Riemann sum]] approximation of the area of the slice:
> $$
> \sum_{x \in \text { samples }} \overbrace{f(x) g(s-x)}^{\text {Rect. height }} \underbrace{\sqrt{2} \cdot \Delta x}_{\text {Rect. width }}
> $$
> This is about the Riemann approximation of the convolution, but with an extra constant $\sqrt{ 2 }$:
> $$
> [f * g](s) = \int_{\tau = -\infty}^{\infty} f(x) g(s - x) \, dx
>$$


[^1]: [Convolutions | Why X+Y in probability is a beautiful mess - YouTube](https://www.youtube.com/watch?v=IaSGqQa5O-M) [[3Blue1Brown Convolutions Why X + Y in probability is a beautiful mess|note]]
[^2]: [But what is a convolution? - YouTube](https://www.youtube.com/watch?v=KuXjwB4LzSA)