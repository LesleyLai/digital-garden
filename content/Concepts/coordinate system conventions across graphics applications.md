---
parent:
  - "[[coordinate systems in graphics programming|coordinate systems in graphics programming]]"
tags:
  - computer/graphics/coordinateSystems
created: 2024-09-22
modified: 2024-09-22
publish: true
---
Various graphics applications use different coordinate system conventions, such as [[./coordinate system handedness|handedness]] or y-up vs z-up.

![[../handedness.png|handedness.png]]

## Graphics APIs
Different graphics APIs have different convention for their definition of the [[./normalized device coordinate|normalized device coordinate]].
- [[OpenGL|OpenGL]]
  - X, Y, Z ranges: $[-1, 1]$
  - Y up
  - - (-1, -1) corresponds to the top-left corner
- [[./vulkan|Vulkan]] [^vulkan]
  - X, Y ranges: $[-1, 1]$, Z range $[0, 1]$
  - Y down
  - (-1, -1) corresponds to the bottom-left corner
- DirectX
  - X, Y ranges: $[-1, 1]$, Z range $[0, 1]$
  - Y up
  - (-1, -1) corresponds to the bottom-left corner

[^vulkan]: [The new Vulkan Coordinate System - Matthew Wellings](https://matthewwellings.com/blog/the-new-vulkan-coordinate-system/) ([['The new Vulkan Coordinate System' note|note]])