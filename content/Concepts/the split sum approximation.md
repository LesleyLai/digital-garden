---
created: 2024-01-23
modified: 2024-03-14
parent:
  - "[[./real-time PBR rendering|real-time PBR rendering]]"
  - "[[./environment lighting|IBL]]"
publish: true
tags:
  - computer/graphics/pbr
---

# The Split Sum Approximation
**The Split Sum Approximation** is a technique used in [[./real-time PBR rendering|real-time PBR rendering]] to render [[./environment lighting|IBL]]. It use pre-filtered importance sampling to avoids expensive [[./Monte Carlo integration|Monte Carlo integration]] process.

The split sum approximation isolates [[./approximate integral of product as product of integral|approximate integral of product as product of integral]]. Specifically, it separates the material and lighting components from the [[./rendering equation|rendering equation]]:
$$
L_o\left(p, \omega_o\right) \approx \frac{\int_{\Omega_{f_r}} L_i\left(p, \omega_i\right) \mathrm{d} \omega_i}{\int_{\Omega_{f_r}} \mathrm{~d} \omega_i} \cdot \int_{\Omega^{+}} f_r\left(p, \omega_i, \omega_o\right) \cos \theta_i \mathrm{~d} \omega_i
$$

## Environment Mapping
For the environment mapping, we can pre-generating a set of differently filtered environment lighting (with [[./mipmapping|mipmapping]] and [[trilinear interpolation|trilinear interpolation]]):
![[../prefilter environment lighting.png|600]]
At runtime we query the pre-filtered environment lighting at the _r (mirror reflected) direction_.
![[../environment light mipmap querying.png|600]]

## BRDF
A typical [[./microfacet theory|microfacet theory]] still have too many parameters to be used in a look-up table.

However, we can use the [[./Schlick's approximation|Schlick's approximation]] for the Fresnel term which only depends on "base color" $R_{0}$ and the half angle $\theta$, and when writing out explicitly we can even extract the "base color" out of the integral as a constant!

$$
\begin{gathered}
\int_{\Omega^{+}} f_r\left(p, \omega_i, \omega_o\right) \cos \theta_i \mathrm{~d} \omega_i \approx R_0 \int_{\Omega^{+}} \frac{f_r}{F}\left(1-\left(1-\cos \theta_i\right)^5\right) \cos \theta_i \mathrm{~d} \omega_i+ \\
\int_{\Omega^{+}} \frac{f_r}{F}\left(1-\cos \theta_i\right)^5 \cos \theta_i \mathrm{~d} \omega_i
\end{gathered}
$$

Now our integrals only have two variables (roughness and angle $\theta$), so we can precompute a 2D lookup texture:
![[../IBL lookup texture.png|IBL lookup texture.png]]

## References
- [Real Shading in Unreal Engine 4](https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf)
- [Alternative Take on the Split Sum Approximation for Cubemap Pre-filtering // Zero Radiance](https://zero-radiance.github.io/post/split-sum/
- [[Games 202#Lecture 5 Real-time Environment Mapping|Games 202 > Lecture 5 Real-time Environment Mapping]]