---
Aliases:
  - Typescript Decorators
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# Javascript Decorators

A **decorator** starts with an `@` symbol and can be put in front of classes and class member variable and methods.

> [!info] It doesn't seems to be able to used on free functions yet. There seems to be some [controversies](https://github.com/wycats/javascript-decorators/issues/4)

Under the hood, a decorator is a function takes a decorated value and a context. A decorator can do four things
1. Change the decorated entity by mutating `value`
2. Replace the decorated entity by returning a compatible value
3. Exposing access to the decorated entity to others (via `context.access`)
4. Processing the decorated entity and its container (if it has one), after both exist: That functionality is provided by `context.addInitializer`.
> [!example]- `loggedMethod` decorator example
> For example, the following example add log to entry and exit of the decorated method
> ```js
> function loggedMethod(originalMethod, context) {
>     const methodName = String(context.name);
> 
>     function replacementMethod(this, ...args) {
>         console.log(`LOG: Entering method '${methodName}'.`)
>         const result = originalMethod.call(this, ...args);
>         console.log(`LOG: Exiting method '${methodName}'.`)
>         return result;
>     }
> 
>     return replacementMethod;
> }
> ```
> it can be used as following
> ```js
> class Person {
>     ...
> 
>     @loggedMethod
>     greet() {
>         ...
>     }
> }
> ```

The `context` parameter contains some additional information. We can see it in `Decorator`'s TypeScript type.
> [!info]- Decorator's Typescript Type Signature
> ```ts
> type Decorator = (
>   value: DecoratedValue, // only fields differ
>   context: {
>     kind: string; // which kind of JS construct
>     name: string | symbol;
>     addInitializer(initializer: () => void): void;
> 
>     // Don’t always exist:
>     static: boolean;
>     private: boolean;
>     access: {get: () => unknown, set: (value: unknown) => void};
>   }
> ) => void | ReplacementValue; // only fields differ
> ```

## Types In TypeScript
Typescript provides types such as `ClassMethodDecoratorContext` which we can help to write decorators.

> [!example]- well typed `loggedMethod` decorator
> ```typescript
> function loggedMethod<This, Args extends any[], Return>(
>     target: (this: This, ...args: Args) => Return,
>     context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
> ) {
>     const methodName = String(context.name);
> 
>     function replacementMethod(this: This, ...args: Args): Return {
>         console.log(`LOG: Entering method '${methodName}'.`)
>         const result = target.call(this, ...args);
>         console.log(`LOG: Exiting method '${methodName}'.`)
>         return result;
>     }
> 
>     return replacementMethod;
> }
> ```

## Class Method Decorators
Example: [[./mimic bound method in JavaScript|mimic bound method in JavaScript]]

## See also
- [[Python decorators|Python decorators]]

## References
- [JavaScript metaprogramming with the 2022-03 decorators API](https://2ality.com/2022/10/javascript-decorators.html)
- [Announcing TypeScript 5.0 - TypeScript](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#decorators)
---
parent: [[./JavaScript|JavaScript]], [[./TypeScript|TypeScript]]
tags: #computing/typescript #computing/javascript