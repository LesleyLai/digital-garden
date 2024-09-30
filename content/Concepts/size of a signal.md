---
created: 2024-08-08
modified: 2024-08-11
parent:
  - "[[signal|signal]]"
publish: true
tags:
  - signal
---
# Size of a Signal

The size of a signal indicates the largeness or strength of a signal. Such a measurement must consider not only the signal magnitude, but also signal duration.

Signal size can be measured in two ways: energy and power. Energy is used to measure aperiodic signals, while power is used for periodic signals.

## Signal Energy

If we just integrate a signal $x(t)$, the positive and negative areas might cancel each other out. To address this, we define the signal size as the area under $|x(t)|^2$. This leads to the equation for *signal energy*:

$$
E_x = \int_{t = -\infty}^\infty |x(t)|^2 \, dt 
$$
> [!info] Comment
> The signal energy as described above does not indicate the actual energy (in the conventional sense) of the signal because the signal energy depends not only on the signal, but also on the load
## Signal Power

Signal energy must be finite for it to be a meaningful measure of signal size, and a necessary condition for signal energy to be finite is that $x(t) \to 0$ when $|t| \to \infty$. Otherwise the integral will not converge.

However, another type of signals we are interested in are *periodic* functions such as $x(t) = \sin(t)$, which have infinite energy. A more meaningful measure of the signal size in such a case would be the time average of the
energy, if it exists. We can define signal power as the following:
$$
P_x = \lim_{T \rightarrow \infty} { \frac{1}{T} \int _{t = -T/2}^{T/2} |x(t)|^2 \, dt } 
$$

### RMS Value
The square root of $P_x$ is the [[root mean square|root mean square]] (RMS) value of $x(t)$.

## Examples
### Example 1
![[../assets/signal size example 1.png|400]]
This signal amplitude $\to 0$ when $|t| \to \infty$, so we can use signal energy
$$
E_x = \int_{-\infty}^{\infty} x^2(t) \, dt = \int_{-1}^{0} 2^2 \, dt + \int_{0}^{\infty} (2e^{-t/2})^2 \, dt = 4 + 4 = 8
$$
### Example 2
![[../assets/signal size example 2.png|signal size example 2.png]]
This signal amplitude does not $\to 0$ when $|t| \to \infty$, so we cannot use signal energy. However, it is periodic, so we can use signal power. Since a periodic signal repeats regularly each period, averaging $|x(t)|^2$ over an infinitely large interval is identical to averaging this quantity over one period (2 seconds in this case).
$$
P(x) = \frac{1}{T} \int_{-T/2}^{T/2} |x(t)|^2 \, dt = \frac{1}{2} \int_{-1}^{1} t^2 \, dt = \frac{1}{3}
$$

## Reference
- Linear Systems and Signals, 1.1