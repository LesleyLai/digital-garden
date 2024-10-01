---
aliases:
  - CIE 1931 XYZ color space
parent:
  - "[[color space and color model|color space]]"
publish: true
tags:
  - color
created: 2024-05-29
modified: 2024-05-29
---
The Commission Internationale de l’Éclairage (CIE) standards body created the **CIE 1931 XYZ color space**, which is graphed in the following figure. [^2]
![[../assets/xyz color space.svg|xyz color space.svg]]

XYZ is a *device-independent* color space, which means that it does not describe the characteristics of a particular display or color measurement device. [^2]

## Meaning of X, Y, and Z
Y is the [[luminance|luminance]], Z is quasi-equal to blue (of CIE RGB), and X is a mix of the three CIE RGB curves chosen to be nonnegative. [^1]

## Computation
Given a spectral distribution $S(\lambda)$, its XYZ color space coordinates $x_{\lambda}, y_{\lambda}, z_{\lambda}$ are computed by integrating its product with the $X(\lambda)$, $Y(\lambda)$, and $Z(\lambda)$ spectral matching curves:
$$
\begin{aligned}
x_\lambda & =\frac{1}{\int_\lambda Y(\lambda) \mathrm{d} \lambda} \int_\lambda S(\lambda) X(\lambda) \mathrm{d} \lambda \\
y_\lambda & =\frac{1}{\int_\lambda Y(\lambda) \mathrm{d} \lambda} \int_\lambda S(\lambda) Y(\lambda) \mathrm{d} \lambda \\
z_\lambda & =\frac{1}{\int_\lambda Y(\lambda) \mathrm{d} \lambda} \int_\lambda S(\lambda) Z(\lambda) \mathrm{d} \lambda .
\end{aligned}
$$


[^1]:  [CIE 1931 color space - Wikipedia](https://en.wikipedia.org/wiki/CIE_1931_color_space)
[^2]: [PBRT V4 4.6 Color](https://pbr-book.org/4ed/Radiometry,_Spectra,_and_Color/Color) [[PBRT V4#4.6 Color|Note]]