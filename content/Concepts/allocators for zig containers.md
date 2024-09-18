---
created: 2023-05-30
modified: 2024-03-14
tags:
  - computer/PL/interesting_features
  - computer/memory_management/allocator
  - computer/zig
publish: true
---
# Allocators in Zig Containers

> Zig doesn’t have a blessed global allocator. Instead, containers in Zig come in two flavors. The “Managed” flavor accepts an allocator as a constructor parameter and stores it as a field ([Source](https://github.com/ziglang/zig/blob/1590ed9d6aea95e5a21e3455e8edba4cdb374f2c/lib/std/array_list.zig#L36-L43)). The “Unmanaged” flavor adds an `allocator` parameter to every method ([Source](https://github.com/ziglang/zig/blob/1590ed9d6aea95e5a21e3455e8edba4cdb374f2c/lib/std/array_list.zig#L436-L440)).

From: [Call Site Dependency Injection | matklad](https://matklad.github.io/2020/12/28/csdi.html#Per-Container-Allocators)