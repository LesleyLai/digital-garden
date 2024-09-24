---
aliases:
  - Peter panning
created: 2023-10-18
modified: 2024-03-14
parent:
  - "[[./shadow mapping|shadow mapping]]"
publish: true
tags:
  - "#computing/graphics/shadow"
---

[[./shadow mapping|shadow mapping]] tends to have numerical precision issue that causes [[./self-occlusion|self-occlusion]], which can be solved by adding a depth bias. However, this can also introduce the **detached shadow** (**peter panning**) effect.
> [!figure]
> ![[../assets/detached shadow.png|400]]
> Image from RTR4