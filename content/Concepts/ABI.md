---
parent:
  - "[[system programming|system programming]]"
tags:
  - computing/system/abi
title: Application Binary Interface
aliases:
  - application binary interface
created: 2024-10-05
modified: 2025-02-02
publish: true
---
**Application Binary Interface (ABI)** specifies details such as [[calling conventions|calling conventions]] and the layout of data types in memory. When using the same ABI, different object files or shared libraries can [[linker|link]] together without requiring access to the source code.

## Subsections
- [[calling conventions|calling conventions]]
- [[caller-saved and callee-saved registers|caller-saved and callee-saved registers]]

## Examples
- [[System V ABI|System V ABI]]