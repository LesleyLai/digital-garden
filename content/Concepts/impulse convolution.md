---
parent:
  - "[[./convolution|convolution]]"
tags:
  - math/convolution
created: 2024-10-30
modified: 2024-10-30
publish: true
aliases:
  - convolution with a shifted impulse shifts the function
---
A [[./convolution|convolution]] with a shifted [[./Dirac delta|impulse]] shifts the original function:
$$
f(t) * \delta(t - T) = f(t - T)
$$
![[../assets/impulse convolution.webp|impulse convolution.webp]]

We can show it using the definition of convolution:
$$
\begin{align}
f(t) * \delta(t - T) &= \int_{\tau = -\infty}^{\infty} f(\tau) \delta(t - T - \tau) \, d\tau  \\
&= \int_{\tau = -\infty}^{\infty} f(t - T) \delta(t - T - \tau) \, d\tau \\
&= f(t - T) \int_{\tau = -\infty}^{\infty} \delta(t - T - \tau) \, d\tau \\
&= f(t - T)
\end{align}
$$

This property is useful for analyzing [[./linear time-invariant system|linear time-invariant systems]], where the [[impulse response|impulse response]] fully characterizes the system.