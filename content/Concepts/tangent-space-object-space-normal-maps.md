---
Aliases:
  - Tangent-Space vs. Object-Space. Normal maps
created: 2023-05-30
modified: 2024-03-14
publish: true
---

#computer/graphics/normal_maps 

---
# Tangent-Space vs. Object-Space. Normal Maps
[[normal map|Normal maps]] come with two flavor, *object-space* and [[./tangent space|tangent space]].

Object Space Normal
![[../2020-11-03_12-15-59_Normalmap_worldspace.jpg|2020-11-03_12-15-59_Normalmap_worldspace.jpg]]

Tangent Space Normal
![[../2020-11-03_12-15-17_Normalmap_tangentspace.jpg|2020-11-03_12-15-17_Normalmap_tangentspace.jpg]]

*Object space* normal is unique-per-mesh, and is not reusable.

*Tangent space* normal, by contrast, is easily reusable and great for deforming meshes, like characters, animals, flags, etc. It also works better with image compression (because most of the area is blue).

## Reference
- [Normal Map Technical Details](http://wiki.polycount.com/wiki/Normal_Map_Technical_Details)