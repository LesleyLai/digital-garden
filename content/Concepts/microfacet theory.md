---
aliases:
  - microfacet BRDF
created: 2024-02-01
modified: 2024-03-14
parent:
  - "[[./BRDF|BRDF]]"
publish: true
tags:
  - "#computing/graphics/pbr/microfacet"
---

**Microfacet theory** is based on the idea that rough surfaces can be represented as a collection of [[./microgeometry|microfacets]], which are tiny, flat, and ideally smooth surfaces. These microfacets are statistically distributed, and their aggregate behavior determines the macroscopic surface's reflective properties.

The following is the form of the general microfacet specular [[./BRDF|BRDF]]
$$
f(\mathbf{l}, \mathbf{v})=\frac{F(\mathbf{l}, \mathbf{h}) G(\mathbf{l}, \mathbf{v}, \mathbf{h}) D(\mathbf{h})}{4(\mathbf{n} \cdot \mathbf{l})(\mathbf{n} \cdot \mathbf{v})}
$$
where we have light direction $\mathbf{l}$, view direction $\mathbf{v}$, surface normal $\mathbf{n}$, and [[./half vector in microfacet BRDF|half vector]] $\mathbf{h}$. The three terms are Fresnel reflectance $F(\mathbf{l}, \mathbf{h})$, geometry/shadowing masking function $G(\mathbf{l}, \mathbf{v}, \mathbf{h})$, and normal distribution function $D(\mathbf{h})$.

## Fresnel Reflectance $F(\mathbf{l}, \mathbf{h})$
The [[Fresnel equations|Fresnel reflectance]] term describes the fraction of incoming light that is reflected instead of refracted
## Geometric Shadowing $G(\mathbf{l}, \mathbf{v}, \mathbf{h})$
The geometric shadowing term take into account the [[./shadowing and masking on a microfacet BRDF|shadowing and masking]] of microfacets.
## Normal Distribution Function $D(\mathbf{h})$
The normal distribution function $D(\mathbf{h})$ characterizes the concentration of microfacet normals pointing toward any given direction

## References
- [['Physics and Math of Shading' note|'Physics and Math of Shading' note]]