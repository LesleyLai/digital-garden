---
aliases:
  - bidirectional reflectance distribution function
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - computer/graphics/RayTracing
  - computer/graphics/LightTransport
  - computer/graphics/pbr
title: Bidirectional Reflectance Distribution Function
---
**Bidirectional reflectance distribution function (BRDF)** encodes the behavior of light that "bounces off" surface. In particular, given incoming direction $\omega_i$, how much light gets scattered in any outgoing direction $\omega_0$.

## Definition

In the most general case, light can enter some surface at a point $p$ and incident direction vector $\Psi$. and can leave the surface at some other point $q$ and exitant direction $\Theta$. The function define this relationship is called the [[BSSRDF|BSSRDF]] (bidirectional surface scattering reflectance distribution function).

We can make additional assumption that $p = q$ and ignore [[subsurface scattering|subsurface scattering]], in this case we have *bidirectional reflectance distribution function* (BRDF). 

> [!definition]
> The BRDF at a point $x$ is defined as the ratio of the differential [[./radiance|radiance]] $L$ reflected in an exitant direction ($\Theta$), and the differential [[./irradiance|irradiance]] ($E$) incident through a differential [[solid angle|solid angle]] $dw_{\Psi}$:
> 
> $$
>    \begin{aligned}
>    f_{r}(x, \Psi \rightarrow \Theta) &=\frac{d L(x \rightarrow \Theta)}{d E(x \leftarrow \Psi)} \\
>    &=\frac{d L(x \rightarrow \Theta)}{L(x \leftarrow \Psi) \cos \left(N_{x}, \Psi\right) d \omega_{\Psi}}
>    \end{aligned}
> $$
> 
> where $\cos(N_x, \Psi)$ is the cosine of the angle formed by the normal vector at the point $x, N_x$, and the indecent direction vector $\Psi$.
   
## Properties
 - *Range* - The BRDF can take any positive value and can very with wavelength.
- *Dimension* - The BRDF is a four-dimensional function defined at each point on a surface; each two dimensions correspond to the incoming direction/outgoing direction
- *Reciprocity* - [[./Helmholtz reciprocity|Helmholtz reciprocity]] $f_{r}(x, \Psi \rightarrow \Theta)=f_{r}(x, \Theta \rightarrow \Psi)$
  Because of the reciprocity property, the following notation is used for the BRDF: $f_{r}(x, \Theta \leftrightarrow \Psi)$
- *Relation between incident and reflected radiance*:
  TODO Advanced Global Illumination p33
- *Energy conservation* - The law of conservation of energy requires that the total amount of power reflected over all directions must be less than or equal to the total amount of power indecent on the surface

> [!example]+ Example: Lambertian reflection
> Lambertian reflection assume light is equally likely to be reflected in each output direction. In other words, $f_r = c$ where $c$ is some constant.
> 
> $$
>    \begin{aligned}
>    L_o(\omega_o)
>    &= \int_{\Omega} f_r L_i(\omega_i) \cos \theta_i d \omega_i \\
>    &= f_r \int_{\Omega} L_i(\omega_i) \cos \theta_i d \omega_i \\
>    &= f_r \, E
>    \end{aligned}
> $$
> 
> where $E$ here is the irradiance.
> 
> We often want to think in term between 0 and 1, so we sometimes use the *albedo* $\rho$ where
> $$
>    f_r = \frac{\rho}{\pi}
> $$

> [!example]+ Example: Perfect specular reflection
> We will introduce some angles to describe specular reflection,
> where $\theta_i$ and $\theta_o$ are the angles related to normal,
> and $\phi_i$ and $\phi_o$ ([[azimuthal angle|azimuthal angle]]) are the angles around the plane.
> 
> And we can have the following distribution:
> $$
>    f_r(\theta_i, \phi_i; \theta_o, \phi_o) = \frac{\delta(\cos{\theta_i} - \cos{\theta_o})}{\cos{\theta_i}}
>    \delta(\phi_i - \phi_0 \pm \pi)
> $$
> 
> Where $\delta$ is the [[./Dirac delta|Dirac delta]] function.
> 
> In practice, we can't find perfect specular reflection direction via random sampling and we simply pick the reflected direction.

## Other Lighting Phenomenon to Consider
For refraction, we need to consider the [[./Snell's Law|Snell's Law]]. [[Fresnel equations|Fresnel]] is also something to consider when doing reflection.

Another thing to consider is [[anisotropic reflection|anisotropic reflection]], where reflection depends on [[azimuthal angle|azimuthal angle]] $\phi$, that is something can be considered in a [[texture map|texture map]].

## Microfacet BRDF
See [[./microfacet theory|microfacet theory]]

## See Also
- [[./rendering equation|rendering equation]]

## Reference
- "Advanced Global Illumination" 2.5
- [Lecture 16: The Rendering Equation (CMU 15-462/662)](https://youtu.be/Ttxdbn7TSLI)