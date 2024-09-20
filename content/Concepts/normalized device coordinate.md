---
parent:
  - "[[coordinate systems in graphics programming|coordinate systems in graphics programming]]"
tags:
  - computer/graphics
aliases:
  - NDC coordinate
created: 2024-09-20
modified: 2024-09-20
publish: true
---
**Normalized device coordinate (NDC)** is the coordinate space after [[perspective projection|perspective division]] has been applied to [[clip space|clip space]] coordinates. In other word, it is essentially a "normalized" version of the clip space.

![[../NDC.jpg|NDC.jpg]]
[^1]

Different APIs choose different conventions for NDC:
- [[OpenGL|OpenGL]]
  - X, Y, Z ranges: $[-1, 1]$
  - Y up
  - - (-1, -1) corresponds to the top-left corner
- [[./vulkan|Vulkan]]
  - X, Y ranges: $[-1, 1]$, Z range $[0, 1]$
  - Y down
  - (-1, -1) corresponds to the bottom-left corner
- DirectX
  - X, Y ranges: $[-1, 1]$, Z range $[0, 1]$
  - Y up
  - (-1, -1) corresponds to the bottom-left corner

[^1]: image from [Coordinate Systems (Direct3D 10) - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/direct3d10/d3d10-graphics-programming-guide-resources-coordinates)