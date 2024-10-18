---
created: 2023-09-17
modified: 2024-03-14
parent: "[[vulkan]]"
publish: true
tags:
  - "#computing/graphics/Vulkan"
  - computing/graphics/bindless
---
> See also [[./descriptor sets|descriptor sets]]

With descriptor indexing, we can have
- Much larger descriptor sets
- Flexible descriptor updates
- Non-uniform indexing (with `NonUniformResourceIndex`)

## Flexible Descriptor Updates
With descriptor indexing, it's OK to have invalid descriptors in a binding if they're not in use. Though we need a flag `VK_DESCRIPTOR_BINDING_PARTIALLY_BOUND_BIT` when creating binding.

## References
- [Descriptor Indexing - YouTube](https://www.youtube.com/watch?v=rlboWNpaM7Q)