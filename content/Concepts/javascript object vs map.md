---
aliases:
  - TypeScript object vs mapping vs record
created: 2024-01-06
modified: 2024-03-14
parent:
  - "[[JavaScript|JavaScript]]"
  - "[[./TypeScript|TypeScript]]"
publish: true
tags:
  - computer/javascript
  - computer/typescript
---

[[Javascript object|Javascript object]] itself is a map/dictionary so there are no use for extra type. That being said, the standard `Map` type provides support of non-string keys and there are people who propose we should use `Map` for majority of cases because of performance and ergonomics.

In [[./TypeScript|TypeScript]], a [[TypeScript mapped type|mapped type]] is the primary way to have a dictionary and a `Record<K, T>` is a short hand for `{ [P in K]: T; }`. Both correspond to Javascript objects in runtime. We can also use `Map` if we need its functionality.
## References
- [When You Should Prefer Map Over Object In JavaScript](https://www.zhenghao.io/posts/object-vs-map)