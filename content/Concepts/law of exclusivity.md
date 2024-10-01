---
created: 2023-05-30
modified: 2024-10-02
publish: true
tags:
  - computing/concurrency
---
**Law of exclusivity** means that we need exclusive access when mutating an object.

Consequences:
- While reading an object, nobody can change it
- While mutating an object, nobody can read or change it

With law of exclusivity hold, we don't need explicit synchronization since we can have have [[./synchronization quadrant|shared mutable data]].

[[./value-oriented programming|Value-oriented programming]] is a paradigm that enforce the law of exclusivity, and [[./Rust borrow checker|Rust borrow checker]] also enforce that.

## Related Languages
- [[./Rust disallow simultaneous aliasing and mutation|Rust]]
- [[./Swift|Swift]]
- [[./The Hylo Programming Language|Hylo]]

## References
- [swift/docs/OwnershipManifesto.md at main · apple/swift · GitHub](https://github.com/apple/swift/blob/main/docs/OwnershipManifesto.md#the-law-of-exclusivity)
- [[Value-Oriented Programming Overlord Article|Value-Oriented Programming Overlord Article]]