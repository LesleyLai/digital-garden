---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - computer/typescript
---
# Typescript Utility Types

**Utility types** are available globally in typescript. They are the basic facility of [[type-level programming|type-level programming]] in Typescript.

Work with objects
- `Partial` and `Required` make fields optional or required
- `Omit` and `Pick` omit or add a field
- `Readonly` make fields read-only
  - No `Mutable` but we can make our own

Work with union:
- `Exclude`
- `Extract`

Work with functions:
- `ReturnType`
- `Parameters`

Other
- `NonNullable` removes `null` and `undefined`
-  `Awaited` unwrap `Promise<T>` type

## See also
- [[C++ Type Traits|C++ Type Traits]]

## References
- [TypeScript's Utility Types - YouTube](https://youtu.be/EU0TB_8KHpY)