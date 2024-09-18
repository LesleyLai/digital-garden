---
created: 2021-01-25
modified: 2024-04-08
parent:
  - "[[projection matrix|projection matrix]]"
publish: true
tags:
  - computer/graphics/projection
---

# Perspective projection
![[../perspective projection.png|300]]

We build a matrix that copy `z` into `w`, and then perform `w` divide (which also divide ~z~)

We say that $[x \ y \ z \ z]^T$ is in the [[clip space|clip space]], and divide by the w coordinate we gets $[x/z \ y/z \ 1]^T$ in [[normalized device coordinate|normalized device coordinate]].