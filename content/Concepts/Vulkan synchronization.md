---
created: 2024-07-08
modified: 2024-08-26
parent:
  - "[[vulkan|vulkan]]"
publish: true
tags:
  - computer/graphics/Vulkan/synchronization
---

# Vulkan Synchronization

General mental model of Vulkan Synchronization:
1. **Queues** run independently from each other
2. **Command buffers** submitted to one **queue** run in a specific order
3. Unless an order is enforced by barriers/renderpass/sync primitives, **commands** (in a command buffer) may be executed **in parallel** and **out of order** [^1]
As a result
1. we need `VkSemaphore` to handle synchronization between queues
2. The rule 2 only specify the *start time* of each time. It does not specify which command will end first. Nor does it deal with dependencies

## Primitives
- fences
- binary semaphores
- timeline semaphores
- pipeline barriers
- events


[^1]: [Vulkan synchronization - Scthe's blog](https://www.sctheblog.com/blog/vulkan-synchronization/#vulkan-synchronization-rules)