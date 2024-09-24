---
created: 2023-05-30
modified: 2024-03-14
publish: true
parent:
  - "[[TypeScript|TypeScript]]"
tags:
  - "#computing/typescript"
---
TypeScript 4.9 introduces `satisfies` operator. It makes such that an expression satisfy an interface.

> [!example]+
> In the following code, the compiler makes sure that `myConfigSettings` satisfies `ConfigSettings`, even though the actual type of `myConfigSettings` is the same.
> ```typescript
> interface CompilerOptions {
>     strict?: boolean;
>     outDir?: string;
>     // ...
> }
> 
> interface ConfigSettings {
>     compilerOptions?: CompilerOptions;
>     extends?: string | string[];
>     // ...
> }
> 
> let myConfigSettings = {
>     compilerOptions: {
>         strict: true,
>         outDir: "../lib",
>         // ...
>     },
> 
>     extends: [
>         "@tsconfig/strictest/tsconfig.json",
>         "../../../tsconfig.base.json"
>     ],
> 
> } satisfies ConfigSettings;
> ```

## References
- [Announcing TypeScript 5.0 - TypeScript](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#satisfies-support-in-jsdoc)