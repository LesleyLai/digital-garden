---
created: 2024-02-20
modified: 2024-03-14
parent:
  - "[[subdivision surface|subdivision surface]]"
publish: true
tags:
  - computer/graphics/geometry/subdivision
---

# Loop Subdivision
Loop subdivision is a subdivision scheme for triangle meshes.

It has the nice property that the [[./curvature|curvature]] is continuous away from irregular vertices ("$C^2$").

It has an algorithm similar to [[Catmull-Clark|Catmull-Clark]], though the rules are a bit different.