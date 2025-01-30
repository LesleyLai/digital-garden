---
parent:
  - "[[custom allocators|custom allocators]]"
tags:
  - computing/memory/allocator
  - stub
aliases:
  - bump allocator
  - linear allocator
created: 2024-11-27
modified: 2024-11-27
---
**linear allocator**, or **bump allocator**

## Usage Pattern
A common practice involves passing two arenas. One acts as a scratch buffer, essentially replacing `alloca` or [[variable-length arrays|VLAs]], while the other serves as a "permanent" arena:
```c
str str_from_file(str file_name, Arena* permanent, Arena scratch);
```
Note that
- The **scratch arena is passed by copy**, so all allocations from the scratch arena are implicitly freed upon return