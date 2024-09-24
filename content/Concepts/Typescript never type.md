---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# Typescript Never Type

> [!example]+ Example: throwing exceptions results in `never` return type
> ```typescript
> // Function returning never must not have a reachable end point
> function error(message: string): never {
>   throw new Error(message);
> }
>  
> // Inferred return type is never
> function fail() {
>  return error("Something failed");
> }
>```

> [!example]+ Example: infinite loop returns `never`
> ```typescript
> function infiniteLoop(): never {
>   while (true) {}
> }
> ```


## Related
- [[./Rust never type|Rust never type]]
- [[noreturn attribute|noreturn attribute]]

---
tags: #computing/typescript