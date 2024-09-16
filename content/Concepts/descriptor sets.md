---
created: 2023-09-17
modified: 2024-03-14
parent: "[[vulkan]]"
publish: true
tags:
  - computer/graphics/Vulkan
---

# Vulkan Descriptor Sets
- In Vulkan, [[descriptor sets|descriptor sets]] are collections of bindings described by set layouts.
- Sets are allocated from descriptor pools
- Once you bind descriptor sets in command buffer, you can't update it (since GPU may be working on it)
  - Not true with [[./descriptor indexing|descriptor indexing]]