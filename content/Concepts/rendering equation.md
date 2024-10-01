---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#computing/graphics/RayTracing"
  - "#computing/graphics/LightTransport"
---

# Rendering Equation

**The rendering equation** summarizes the light transportation relationship in Computer Graphics.

The most commonly used formulation for the rendering equation is the *hemispherical formulation*:

![[../assets/Rendering_eq.png|600]]

It is written in the form of
$$
L_{\text{o}}(\mathbf x, \omega_{\text{o}}, \lambda, t) = L_{\text{e}}(\mathbf x, \omega_{\text{o}}, \lambda, t) \ + \int_\Omega f_{\text{r}}(\mathbf x, \omega_{\text{i}}, \omega_{\text{o}}, \lambda, t) L_{\text{i}}(\mathbf x, \omega_{\text{i}}, \lambda, t) (\omega_{\text{i}}\cdot\mathbf n) \operatorname d \omega_{\text{i}}
$$
Where $L$ terms are [[./radiance|radiance]], and $f_r$ is the [[./BRDF|BRDF]]. Sometimes $\omega_i \cdot \mathbf{n}$ is also written as $\cos{\theta}$ where $\theta$ is the angle between incoming direction and normal.

# References
-   [[Advanced Global Illumination|Advanced Global Illumination]] 2.6
-   [Lecture 16: The Rendering Equation (CMU 15-462/662)](https://youtu.be/Ttxdbn7TSLI)