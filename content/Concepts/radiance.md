---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[radiometry quantities|radiometry quantities]]"
publish: true
tags:
  - radiometry
  - computing/graphics/RayTracing
---

# Radiance

**Radiance** is the [[radiant flux|radiant flux]] per unit projected area per unit solid angle ($w / (\text{steradian} \cdot m^2)$).

Intuitively, radiant expresses how much power arrives at (or leaves from) a certain point on the surface, per unit solid angle, and per unit projected area.

Like other radiometry quantities, radiance is properly represented by [[./spectral power distribution|SPD]], but we often approximate it with RGB color.

Given position $x$ and direction vector $\Theta$, we can express radiance as 
$$
L(x, \Theta)=\frac{d^{2} \Phi}{d \omega d A^{\perp}}=\frac{d^{2} \Phi}{d \omega d A \cos \theta}
$$

The cosine term of the above definition is because that the projected area $A^\perp$ is the perpendicular of the surface orthogonal to the direction we are interested in.

![[../assets/Advanced_Global_Illumination_Figure_2_1.png|Advanced_Global_Illumination_Figure_2_1.png]]
Radiance is the quantity that captures the "appearance" of objects in the scene.

## Property of Radiance
- Radiance is invariant along straight paths and does not attenuate with distance. This property is only valid in the absence of participating media.
- Sensors, such as cameras and the human eye, are sensitive to radiance.